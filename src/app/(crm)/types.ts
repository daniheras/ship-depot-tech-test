export interface Mechanic {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface RepairCase {
  id: number;
  ship: {
    id: string;
    name: string;
    model: string;
    image: string;
  };
  mechanic_id: number | null;
  status: "ACTIVE" | "PENDING" | "REPAIRED";
}