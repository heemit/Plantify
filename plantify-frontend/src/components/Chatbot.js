import React, { useState } from 'react';

const cropData = {
    SUGARCANE: {
      timeToGrow: '12-18 months',
      temperature: '25-32°C (warm climate)',
      waterRequirements: '1500-2000 mm (high water requirement)',
      soilType: 'Sandy loam or loamy soil; pH: 6.0-7.5 (neutral to slightly acidic)',
      fertilizerRequirements: {
        nitrogen: '80-100 kg/ha',
        phosphorus: '40-60 kg/ha',
        potassium: '100-150 kg/ha',
        micronutrients: 'Magnesium (Mg), Calcium (Ca), Sulfur (S), Boron (B)',
      },
      growthRequirements: 'High water availability, especially in the initial stages. Requires full sunlight and well-drained soil.',
      pestsDiseases: 'Aphids, whitefly, sugarcane borer, and fungal diseases like red rot.',
    },
    MAIZE: {
      timeToGrow: '90-150 days (3-5 months)',
      temperature: '20-30°C',
      waterRequirements: '500-700 mm',
      soilType: 'Loamy soil; pH: 5.8-7.0',
      fertilizerRequirements: {
        nitrogen: '80-150 kg/ha',
        phosphorus: '20-50 kg/ha',
        potassium: '50-70 kg/ha',
        micronutrients: 'Zinc (Zn), Boron (B), Manganese (Mn)',
      },
      growthRequirements: 'Requires full sunlight and fertile, well-drained soil. Regular irrigation is crucial during the flowering and cob development stages. Maize benefits from crop rotation with legumes to improve soil nitrogen levels.',
      pestsDiseases: 'Corn borer, armyworm, rust, smut.',
    },
    WHEAT: {
      timeToGrow: '100-150 days (3-5 months)',
      temperature: '10-22°C',
      waterRequirements: '500-700 mm',
      soilType: 'Loamy soil; pH: 6.0-7.5',
      fertilizerRequirements: {
        nitrogen: '90-150 kg/ha',
        phosphorus: '25-35 kg/ha',
        potassium: '30-40 kg/ha',
        micronutrients: 'Iron (Fe), Zinc (Zn), Magnesium (Mg)',
      },
      growthRequirements: 'Wheat grows best in a cool climate with moderate rainfall. Requires well-drained, fertile soil. Irrigation during dry periods can significantly improve yield.',
      pestsDiseases: 'Wheat rust, aphids, fungal diseases like powdery mildew.',
    },
    GROUNDNUT: {
      timeToGrow: '90-150 days (3-5 months)',
      temperature: '25-30°C (warm climate)',
      waterRequirements: '450-600 mm',
      soilType: 'Sandy loam; pH: 6.0-7.0',
      fertilizerRequirements: {
        nitrogen: '30-50 kg/ha',
        phosphorus: '20-30 kg/ha',
        potassium: '15-20 kg/ha',
        micronutrients: 'Zinc (Zn), Iron (Fe), Calcium (Ca)',
      },
      growthRequirements: 'Requires well-drained soil with good water retention. Preferably planted in full sunlight. Sensitive to waterlogging, so avoid heavy rainfall or irrigation during flowering.',
      pestsDiseases: 'White grub, leaf spot, and aphids.',
    },
    RICE: {
      timeToGrow: '3-6 months',
      temperature: '25-35°C',
      waterRequirements: '1500-2500 mm (high water requirement)',
      soilType: 'Clay loam or silty soil; pH: 5.5-7.0',
      fertilizerRequirements: {
        nitrogen: '40-80 kg/ha',
        phosphorus: '30-40 kg/ha',
        potassium: '25-30 kg/ha',
        micronutrients: 'Boron (B), Zinc (Zn), Iron (Fe)',
      },
      growthRequirements: 'Requires flooded conditions for much of its growth cycle. Sensitive to water stress during the flowering stage. Optimal growth requires warm temperatures and sufficient irrigation.',
      pestsDiseases: 'Rice weevil, blast fungus, brown plant hopper.',
    },
    SOYBEAN: {
      timeToGrow: '100-120 days (3-4 months)',
      temperature: '20-30°C',
      waterRequirements: '500-700 mm',
      soilType: 'Well-drained, loamy soil; pH: 6.0-7.0',
      fertilizerRequirements: {
        nitrogen: '20-40 kg/ha (fixed by root nodules, minimal additional N needed)',
        phosphorus: '20-40 kg/ha',
        potassium: '30-50 kg/ha',
        micronutrients: 'Manganese (Mn), Zinc (Zn)',
      },
      growthRequirements: 'Soybeans prefer warm, sunny conditions. Requires well-drained soil and moderate irrigation.',
      pestsDiseases: 'Aphids, caterpillars, soybean rust.',
    },
    KHARIF_SORGHUM: {
      timeToGrow: '90-120 days (3-4 months)',
      temperature: '25-35°C',
      waterRequirements: '400-600 mm',
      soilType: 'Well-drained loamy soil; pH: 6.0-7.5',
      fertilizerRequirements: {
        nitrogen: '30-50 kg/ha',
        phosphorus: '20-40 kg/ha',
        potassium: '20-30 kg/ha',
        micronutrients: 'Iron (Fe), Zinc (Zn)',
      },
      growthRequirements: 'Requires moderate rainfall and well-drained soil. Can tolerate drought conditions, but higher yields are obtained with regular irrigation.',
      pestsDiseases: 'Aphids, stem borer, leaf spot.',
    },
    PIGEONPEA: {
      timeToGrow: '6-9 months',
      temperature: '28-35°C',
      waterRequirements: '800-1200 mm',
      soilType: 'Loamy or sandy loam soil; pH: 6.0-7.5',
      fertilizerRequirements: {
        nitrogen: '25-30 kg/ha',
        phosphorus: '20-25 kg/ha',
        potassium: '20-30 kg/ha',
        micronutrients: 'Manganese (Mn), Molybdenum (Mo)',
      },
      growthRequirements: 'Requires moderate rainfall and dry conditions during the harvest period. Prefers full sunlight and well-drained soil.',
      pestsDiseases: 'Pod borer, root rot, wilt disease.',
    },
    RABI_SORGHUM: {
      timeToGrow: '90-120 days (3-4 months)',
      temperature: '15-30°C',
      waterRequirements: '400-600 mm',
      soilType: 'Loamy soil; pH: 6.0-7.5',
      fertilizerRequirements: {
        nitrogen: '40-60 kg/ha',
        phosphorus: '25-35 kg/ha',
        potassium: '20-40 kg/ha',
        micronutrients: 'Zinc (Zn), Iron (Fe)',
      },
      growthRequirements: 'Prefers moderate temperatures and regular irrigation. Can tolerate dry conditions once established.',
      pestsDiseases: 'Aphids, shoot fly, grain mold.',
    },
    MINOR_PULSES: {
      timeToGrow: '60-120 days (2-4 months)',
      temperature: '20-30°C',
      waterRequirements: '300-600 mm',
      soilType: 'Loamy or sandy loam; pH: 6.0-7.5',
      fertilizerRequirements: {
        nitrogen: '20-40 kg/ha',
        phosphorus: '20-30 kg/ha',
        potassium: '15-30 kg/ha',
      },
      growthRequirements: 'Moderate irrigation and well-drained soil are essential.',
      pestsDiseases: 'Aphids, fungal diseases like wilt.',
    }
  };  

const Chatbot = ({ state }) => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [waitingForCrop, setWaitingForCrop] = useState(true);
  const [messages, setMessages] = useState([]);

  const handleUserInput = () => {
    if (waitingForCrop) {
      const cropInfo = cropData[userInput.toUpperCase()];
      if (cropInfo) {
        const cropDetails = `
          Here are the details for ${userInput} in ${state}:
          Time to Grow: ${cropInfo.timeToGrow}
          Temperature: ${cropInfo.temperature}
          Water Requirements: ${cropInfo.waterRequirements}
          Soil Type: ${cropInfo.soilType}
          Fertilizer Requirements:
            Nitrogen: ${cropInfo.fertilizerRequirements.nitrogen}
            Phosphorus: ${cropInfo.fertilizerRequirements.phosphorus}
            Potassium: ${cropInfo.fertilizerRequirements.potassium}
            Micronutrients: ${cropInfo.fertilizerRequirements.micronutrients}
          Growth Requirements: ${cropInfo.growthRequirements}
          Pests/Diseases: ${cropInfo.pestsDiseases}
        `;
        setMessages([
          ...messages,
          { type: 'user', text: userInput },
          { type: 'bot', text: cropDetails },
        ]);
        setWaitingForCrop(false);
      } else {
        setMessages([
          ...messages,
          { type: 'user', text: userInput },
          { type: 'bot', text: 'Sorry, I do not have information on that crop. Please try again.' },
        ]);
      }
    } else {
      setMessages([]);
      setWaitingForCrop(true);
    }
    setUserInput('');
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h3>🌾 Smart Farming Chatbot</h3>
      </div>
      <div className="chatbot-body">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chatbot-message ${message.type}`}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={waitingForCrop ? 'Enter crop name' : 'Type your next message...'}
          />
          <button onClick={handleUserInput}>
            {waitingForCrop ? 'Submit Crop' : 'Reset'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
