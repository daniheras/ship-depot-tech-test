import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of starship IDs to exclude
const excludedIds = [2, 74, 59, 52, 66, 49, 58, 65, 75, 32, 3, 61, 68, 64, 63, 17].map(id => id.toString());

const generateRepairCases = async () => {
  try {
    // Fetch ships from SWAPI
    const starshipsResponse = await fetch('https://swapi.dev/api/starships/');
    const starshipsData = await starshipsResponse.json();
    let starships = starshipsData.results.filter(
      (ship) => !excludedIds.includes(ship.url.split('/').filter(Boolean).pop())
    );

    // If there are more pages, fetch them all
    let nextPage = starshipsData.next ? starshipsData.next.replace('http:', 'https:') : null;
    while (nextPage) {
      const nextResponse = await fetch(nextPage);
      const nextData = await nextResponse.json();
      starships = [
        ...starships,
        ...nextData.results.filter(
          (ship) => !excludedIds.includes(ship.url.split('/').filter(Boolean).pop())
        ),
      ];
      nextPage = nextData.next ? nextData.next.replace('http:', 'https:') : null;
    }

    const repairCases = [];

    for (let i = 0; i < 1000; i++) {
      const randomStarshipIndex = Math.floor(Math.random() * starships.length);
      const selectedStarship = starships[randomStarshipIndex];

      const mechanicAssigned = Math.random() < 0.05 ? Math.floor(Math.random() * 5) + 1 : null;

      // Ensure ACTIVE status only if a mechanic is assigned
      const status = mechanicAssigned ? (Math.random() < 0.5 ? 'ACTIVE' : 'PENDING') : 'PENDING';

      repairCases.push({
        id: i + 1,
        ship: {
          id: selectedStarship.url.split('/').filter(Boolean).pop(),
          model: selectedStarship.model,
          name: selectedStarship.name,
          image: `https://starwars-visualguide.com/assets/img/starships/${selectedStarship.url
            .split('/')
            .filter(Boolean)
            .pop()}.jpg`,
        },
        mechanic_id: mechanicAssigned,
        status: status,
      });
    }

    const filePath = path.join(__dirname, '../mock/cases.json');
    fs.writeFileSync(filePath, JSON.stringify({ data: repairCases }, null, 2));
    console.log('File written successfully');
  } catch (error) {
    console.error('Error generating repair cases:', error);
  }
};

generateRepairCases();
