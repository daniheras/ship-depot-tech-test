import { db } from '../db';
import { cases } from '../schema';

const mechanicsIds = ["1", "2", "3", "4", "5", null]; // Incluye la opción sin mecánico asignado
const excludedIds = [2, 74, 59, 52, 66, 49, 58, 65, 75, 32, 3, 61, 68, 64, 63, 17]; // IDs de naves a excluir
const totalCases = 1000;

async function getValidShips() {
  const ships = [];
  for (let i = 1; i <= 100; i++) {
    if (!excludedIds.includes(i)) {
      ships.push({
        model: `Ship Model ${i}`,
        image: `https://starwars-visualguide.com/assets/img/starships/${i}.jpg`,
      });
    }
  }
  return ships;
}

async function seedCases() {
  try {
    const validShips = await getValidShips();

    for (let i = 0; i < totalCases; i++) {
      const randomShip = validShips[Math.floor(Math.random() * validShips.length)];
      const mechanicId = mechanicsIds[Math.floor(Math.random() * mechanicsIds.length)];
      const status = ["active", "pending", "finished"][Math.floor(Math.random() * 3)];
      const createdAt = new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)); // Fechas del último año
      const closedAt =
        status === "finished"
          ? new Date(createdAt.getTime() + Math.floor(Math.random() * 90 * 24 * 60 * 60 * 1000))
          : null;
      const budget = Math.random() > 0.5 ? Math.floor(Math.random() * 20001) : null;

      await db.insert(cases).values({
        createdAt: createdAt.toISOString(),
        shipModel: randomShip.model,
        shipImage: randomShip.image,
        mechanicId: mechanicId,
        status: status as "active" | "pending" | "finished",
        closedAt: closedAt ? closedAt.toISOString() : null,
        budget: budget ? budget.toString() : null,
      });

      if ((i + 1) % 100 === 0) {
        console.log(`${i + 1} cases seeded so far...`);
      }
    }

    console.log('All cases seeded successfully!');
  } catch (error) {
    console.error('Error seeding cases:', error);
  }
}

seedCases();
