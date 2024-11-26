import { db } from '../db';
import { mechanics } from '../schema';

const mechanicsData = [
  {
    id: "1",
    name: "Temiri Blagg",
    description: "A young mechanic working in Canto Bight stables, known for his interest in repairing equipment and helping the stablekeepers.",
    image: "https://static.wikia.nocookie.net/esstarwars/images/4/4f/Temiri-Blagg.png",
  },
  {
    id: "2",
    name: "Kalonia",
    description: "A skilled mechanic working in the Resistance, often assigned to fixing advanced starships and critical support systems.",
    image: "https://static.wikia.nocookie.net/esstarwars/images/f/f7/Harter_Kalonia_-_SW_Card_Trader.png",
  },
  {
    id: "3",
    name: "Peli Motto",
    description: "A mechanic from Tatooine who works at Hangar 35, known for helping The Mandalorian with the repair of his ship.",
    image: "https://static.wikia.nocookie.net/starwars/images/2/21/PeliMotto-TMH.png",
  },
  {
    id: "4",
    name: "Rose Tico",
    description: "A mechanic for the Resistance, specializing in starship repairs and technical support during the war against the First Order.",
    image: "https://static.wikia.nocookie.net/esstarwars/images/c/c9/Rose_Tico_TROSOCE.png",
  },
  {
    id: "5",
    name: "Watto",
    description: "Owner of a workshop on Tatooine and former owner of Anakin Skywalker. Watto is known for his ability to repair almost anything.",
    image: "https://static.wikia.nocookie.net/esstarwars/images/e/eb/WattoHS.jpg",
  },
];

async function seedMechanics() {
  try {
    await db.insert(mechanics).values(mechanicsData);
    console.log('Mechanics seeded successfully!');
  } catch (error) {
    console.error('Error seeding mechanics:', error);
  }
}

seedMechanics();