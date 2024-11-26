export interface Mechanic {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface RepairCase {
  id: number; // Unique identifier for the repair case
  ship: {
    id: string; // ID of the starship (as returned from SWAPI)
    name: string; // Name of the starship
    model: string; // Model of the starship
    image: string; // URL of the starship image
  };
  mechanic_id: number | null; // ID of the assigned mechanic, or null if not assigned
  status: "ACTIVE" | "PENDING" | "REPAIRED"; // Status of the repair case
}