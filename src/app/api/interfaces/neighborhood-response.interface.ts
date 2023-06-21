import { Neighborhood } from "./neighborhood.interface";

export interface NeighborhoodResponse {
  objects: NeighborhoodData[];
}

export interface NeighborhoodData {
  parameter: string;
  neighborhoods: Neighborhood[];
}
