from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from collections import Counter

app = Flask(__name__)
CORS(app)

# Load and preprocess data
data = pd.read_csv(r"C:\Users\heemi\plantify-frontend\public\Crops_data.csv")
data.columns = data.columns.str.strip()

yield_cols = [col for col in data.columns if 'YIELD' in col.upper()]
crop_names = [col.split(' YIELD')[0].strip().upper() for col in yield_cols]
crop_yield_map = dict(zip(crop_names, yield_cols))

state_crop_yields = {}

for state in data['State Name'].unique():
    state_data = data[data['State Name'] == state]
    crop_stats = {}
    for crop, col in crop_yield_map.items():
        if col in state_data.columns:
            valid_yields = state_data[col].dropna()
            if not valid_yields.empty:
                crop_stats[crop] = valid_yields.mean()
    state_crop_yields[state] = crop_stats

top_crops_per_state = {}
all_top_crops = []

for state, crop_stats in state_crop_yields.items():
    sorted_crops = sorted(crop_stats.items(), key=lambda x: x[1], reverse=True)
    top_crops = [crop for crop, _ in sorted_crops[:10]]
    top_crops_per_state[state] = top_crops
    all_top_crops.extend(top_crops)

crop_common_counts = Counter(all_top_crops)
most_common_crops = [crop for crop, count in crop_common_counts.most_common(10)]


@app.route('/recommend', methods=['POST'])
def recommend():
    state_name = request.json.get('state')
    state_name = state_name.strip().title()

    if state_name not in state_crop_yields:
        return jsonify({'error': f"State '{state_name}' not found"}), 404

    crop_stats = state_crop_yields[state_name]
    sorted_state_crops = sorted(crop_stats.items(), key=lambda x: x[1], reverse=True)

    common = [crop for crop, _ in sorted_state_crops if crop in most_common_crops][:5]
    unique = [crop for crop, _ in sorted_state_crops if crop not in most_common_crops][:5]

    result = {'state': state_name, 'common': [], 'unique': []}

    for crop in common:
        best_row = data[data['State Name'] == state_name].loc[
            data[data['State Name'] == state_name][crop_yield_map[crop]].idxmax()]
        result['common'].append({
            'name': crop,
            'district': best_row['Dist Name'],
            'avg_yield': round(state_crop_yields[state_name][crop], 2),
            'max_yield': round(best_row[crop_yield_map[crop]], 2),
        })

    for crop in unique:
        best_row = data[data['State Name'] == state_name].loc[
            data[data['State Name'] == state_name][crop_yield_map[crop]].idxmax()]
        result['unique'].append({
            'name': crop,
            'district': best_row['Dist Name'],
            'avg_yield': round(state_crop_yields[state_name][crop], 2),
            'max_yield': round(best_row[crop_yield_map[crop]], 2),
        })

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
