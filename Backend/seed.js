const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path as necessary

const products = [
  // Seeds & Saplings 🌱
  { name: "Organic Tomato Seeds", price: 199, description: "High-quality organic tomato seeds for home and commercial farming.", imageUrl: "https://seed2plant.in/cdn/shop/products/62.png?v=1615875365&width=416", category: "Seeds & Saplings", subcategory: "Organic Seeds" },
  { name: "Hybrid Maize Seeds", price: 299, description: "Fast-growing hybrid maize seeds with high yield potential.", imageUrl: "https://m.media-amazon.com/images/I/51+2yLB57CL._AC_UF1000,1000_QL80_.jpg", category: "Seeds & Saplings", subcategory: "Hybrid Seeds" },
  { name: "Carrot Seeds", price: 149, description: "Premium fruit & vegetable seeds for fresh, healthy produce.", imageUrl: "https://prabhaorganics.com/cdn/shop/files/images-_35_75d4fb23-1f04-4294-ba89-d753b9e4dea7.jpg?v=1726982207&width=1445", category: "Seeds & Saplings", subcategory: "Fruit & Vegetable Seeds" },
  { name: "Basil Herb Seeds", price: 129, description: "Best quality herb seeds for medicinal and culinary use.", imageUrl: "https://www.organickashmir.com/cdn/shop/products/image_e9d4c2e7-e9f9-46d5-a194-eaf32b82c136_1200x1200.jpg?v=1597271062g", category: "Seeds & Saplings", subcategory: "Herb & Medicinal Seeds" },
  { name: "Rose Flower Seeds", price: 249, description: "Beautiful flower seeds to enhance garden aesthetics.", imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/12/GH/PH/YM/19165548/white-rose-flower-seeds.jpg", category: "Seeds & Saplings", subcategory: "Flower Seeds" },
  { name: "Mango Sapling", price: 499, description: "Healthy tree sapling for fruit-bearing gardens.", imageUrl: "https://succulentking.in/wp-content/uploads/2023/08/organic-mango-plant-500x500-1-e1642136668639.jpg", category: "Seeds & Saplings", subcategory: "Tree Saplings" },
  { name: "Groundnut Seeds", price: 250, description: "Premium groundnut seeds for high yield farming.", imageUrl: "https://vrmshoppe.com/wp-content/uploads/2021/05/groundnut-250x250-1.jpg", category: "Seeds & Saplings", subcategory: "Oilseed Crops" },
  { name: "Finger Millet Seeds", price: 180, description: "High-yield finger millet seeds for optimal growth and productivity.", imageUrl: "https://m.media-amazon.com/images/I/51wy7m+ZLOS._AC_UF1000,1000_QL80_.jpg", category: "Seeds & Saplings", subcategory: "Cereal Crops" },
  { name: "Pigeonpea Seeds", price: 220, description: "Premium pigeonpea seeds for high-quality pulse production.", imageUrl: "https://i.etsystatic.com/23669282/r/il/3b0012/4543691622/il_570xN.4543691622_2z9g.jpg", category: "Seeds & Saplings", subcategory: "Pulse Crops" },
  { name: "Sesame Seeds", price: 180, description: "High-quality sesame seeds ideal for oilseed farming.", imageUrl: "https://spices100.com/wp-content/uploads/2020/05/sesame-seeds-white-spices100.jpg", category: "Seeds & Saplings", subcategory: "Oilseed Crops" },
  { name: "Rabi Sorghum Seeds", price: 250, description: "Ideal rabi sorghum seeds for high yield production.", imageUrl: "https://www.agrifarming.in/wp-content/uploads/Jowar-Farming-in-Rabi-Season4.jpg", category: "Seeds & Saplings", subcategory: "Cereal Crops" },

  // Fertilizers & Soil Enhancers 🌾
  { name: "Organic Compost", price: 499, description: "Rich organic compost for soil enrichment.", imageUrl: "https://m.media-amazon.com/images/I/71DvzBrAPiL._AC_UF350,350_QL80_.jpg", category: "Fertilizers & Soil Enhancers", subcategory: "Compost & Manure" },
  { name: "Nitrogen-Rich Fertilizer", price: 699, description: "Premium nitrogen fertilizer for strong plant growth.", imageUrl: "https://m.media-amazon.com/images/I/71yKWudlb0L.jpg", category: "Fertilizers & Soil Enhancers", subcategory: "Chemical Fertilizers" },
  { name: "Organic Fertilizer", price: 599, description: "Natural organic fertilizer to boost crop yield and soil health.", imageUrl: "https://www.pennington.com/all-products/fertilizer/resources/-/media/Project/OneWeb/Pennington/Images/blog/fertilizer/What-is-Organic-Fertilizer/orgainc-soil.jpg", category: "Fertilizers & Soil Enhancers", subcategory: "Organic Fertilizers" },
  { name: "Growth Booster", price: 799, description: "Effective growth boosters for faster crop yield.", imageUrl: "https://lazygardener.in/cdn/shop/products/growth-boost-163259_525x700.jpg?v=1695147731", category: "Fertilizers & Soil Enhancers", subcategory: "Growth Boosters" },
  { name: "Soil Conditioner", price: 599, description: "Improves soil structure for better water retention.", imageUrl: "https://farmerscastle.com/wp-content/uploads/2023/04/Brown-Soil-Conditioner.jpg", category: "Fertilizers & Soil Enhancers", subcategory: "Soil Conditioners" },

  // Smart Farming Tools 🤖
  { name: "AI Soil Sensor", price: 1599, description: "Advanced AI-powered soil sensor for monitoring soil health.", imageUrl: "https://imgcdn.stablediffusionweb.com/2024/9/8/14f1c795-2345-4dc7-8f20-042ced09bf52.jpg", category: "Smart Farming Tools", subcategory: "AI-Powered Soil Sensors" },
  { name: "Smart Irrigation Kit", price: 2499, description: "Automated irrigation system with smart controls.", imageUrl: "https://www.gcelab.com/assets/images/IOT-in-agri-02_1697927555.jpg", category: "Smart Farming Tools", subcategory: "Smart Irrigation Systems" },
  { name: "Weather Monitoring Device", price: 2999, description: "Real-time weather monitoring for precision farming.", imageUrl: "https://www.benchmarklabs.com/wp-content/uploads/2021/12/IoT-Based-Weather-Monitoring-System-For-Micro-Climate-Forecasting.jpg", category: "Smart Farming Tools", subcategory: "Weather Monitoring Devices" },
  { name: "Drone Sprayer", price: 12999, description: "High-tech drone for spraying pesticides and fertilizers.", imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/10/CT/JT/PP/162092786/agricultural-pesticide-spraying-drone.jpg", category: "Smart Farming Tools", subcategory: "Drone Sprayers" },
  { name: "Automated Planter", price: 9999, description: "Machine-assisted planting tool for efficiency.", imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_848,h_565/https://www.futurefarming.com/app/uploads/2023/02/IMG_IMG_4542-1-848x565.jpg", category: "Smart Farming Tools", subcategory: "Automated Planters" },

  // Gardening & Farming Equipment 🏡
  { name: "Garden Trowel Set", price: 499, description: "Durable stainless steel trowel set for home gardening and professional use.", imageUrl: "https://m.media-amazon.com/images/I/912jssUWcHL.jpg", category: "Gardening & Farming Equipment", subcategory: "Hand Tools (Trowels, Pruners, Weeders)" },
  { name: "Power Cultivator", price: 4299, description: "Electric tiller and cultivator for easy soil preparation.", imageUrl: "https://mlhobevaucyf.i.optimole.com/w:1200/h:742/q:mauto/f:best/ig:avif/https://novo3ds.in/wp-content/uploads/2023/06/AG108_WEEDER_3.jpg", category: "Gardening & Farming Equipment", subcategory: "Power Tools (Tillers, Cultivators)" },
  { name: "Hydroponic Grow Kit", price: 3299, description: "Complete hydroponic system for growing plants indoors without soil.", imageUrl: "https://m.media-amazon.com/images/I/710s0CJQYbL._AC_UF1000,1000_QL80_.jpg", category: "Gardening & Farming Equipment", subcategory: "Hydroponic Systems" },
  { name: "Greenhouse Kit", price: 8999, description: "Compact greenhouse kit to create optimal growing conditions.", imageUrl: "https://images-cdn.ubuy.co.in/6757d69af791a84c5f2064d1-polycarbonate-greenhouse-kit-8x6x6-ft.jpg", category: "Gardening & Farming Equipment", subcategory: "Greenhouse Kits" },
  { name: "Vertical Farming Rack", price: 4999, description: "Space-saving vertical farming system for urban agriculture.", imageUrl: "https://pipphorticulture.com/wp-content/uploads/2022/09/Flora-Terra-1.jpg", category: "Gardening & Farming Equipment", subcategory: "Vertical Farming Equipment" },

  // Pest & Disease Control 🐛
  { name: "Organic Pest Repellent", price: 599, description: "Natural pest repellent spray to protect plants from insects and fungi.", imageUrl: "https://iffcourbangardens.com/cdn/shop/files/DrNeemOil.jpg?v=1701408280", category: "Pest & Disease Control", subcategory: "Organic Pesticides" },
  { name: "Chemical Insecticide", price: 999, description: "Highly effective chemical insecticide for large-scale farms.", imageUrl: "https://www.katyayaniorganics.com/wp-content/uploads/2024/10/Insectora_11zon-1.webp", category: "Pest & Disease Control", subcategory: "Chemical Pesticides" },
  { name: "Fungicide Spray", price: 799, description: "Fast-action fungicide spray for preventing plant diseases.", imageUrl: "https://m.media-amazon.com/images/I/71lR9Nbw-sL.jpg", category: "Pest & Disease Control", subcategory: "Fungicides & Herbicides" },
  { name: "Pest Trap Kit", price: 499, description: "Set of pest traps to prevent insect infestation naturally.", imageUrl: "https://m.media-amazon.com/images/I/81M3rJfapJL.jpg", category: "Pest & Disease Control", subcategory: "Pest Traps & Nets" },

  // Water Management & Irrigation 💧
  { name: "Drip Irrigation Kit", price: 12999, description: "Efficient drip irrigation system.", imageUrl: "https://m.media-amazon.com/images/I/81qS+0iTxTL._AC_UF1000,1000_QL80_.jpg", category: "Water Management & Irrigation", subcategory: "Drip Irrigation Systems" },
  { name: "Sprinkler System", price: 1299, description: "Automatic water sprinkler for uniform irrigation.", imageUrl: "https://m.media-amazon.com/images/I/81kgk1N8HJL.jpg", category: "Water Management & Irrigation", subcategory: "Sprinklers & Nozzles" },
  { name: "Water Pump", price: 7499, description: "Powerful water pump for agricultural irrigation.", imageUrl: "https://images-cdn.ubuy.co.in/65a1a2da6818167f1d2acf44-gasoline-water-pump-7-5-hp-water.jpg", category: "Water Management & Irrigation", subcategory: "Water Pumps" },
  { name: "Rainwater Harvesting Kit", price: 4599, description: "Eco-friendly rainwater harvesting system.", imageUrl: "https://hmadmin.hamleys.in/product/492336809/665/492336809-1.jpg", category: "Water Management & Irrigation", subcategory: "Rainwater Harvesting Systems" },

  // Farming Accessories & Wearables 🎒
  { name: "Protective Farming Gloves", price: 399, description: "Durable gloves for hand protection during farming tasks.", imageUrl: "https://m.media-amazon.com/images/I/5148Y9ApcAL.jpg", category: "Farming Accessories & Wearables", subcategory: "Protective Gear (Gloves, Boots, Aprons)" },
  { name: "UV Protection Farming Hat", price: 599, description: "Wide-brim UV protection hat for long hours in the sun.", imageUrl: "https://m.media-amazon.com/images/I/618VDk0Y9CL._AC_UY1100_.jpg", category: "Farming Accessories & Wearables", subcategory: "UV-Protection Hats & Clothing" },
  { name: "GPS Tracker for Farming", price: 2599, description: "GPS tracking device for monitoring farm vehicles and equipment.", imageUrl: "https://ueeshop.ly200-cdn.com/u_file/UPAN/UPAN862/2205/photo/2afde966d5.jpg", category: "Farming Accessories & Wearables", subcategory: "Smart Farming Wearables (GPS Trackers, Health Monitors)" }
];

mongoose.connect('mongodb://localhost:27017/Plantify', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products); // Add new products
    console.log('Products added');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
