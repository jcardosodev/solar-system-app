import axios, { AxiosResponse } from "axios";
import { apiNinjaKey } from "../apiNinjaKey/apiNinjaKey";


const planetsApi = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/planets',
});

export interface PlanetsProps {
  distance_light_year: number,
  host_star_mass: number,
  host_star_temperature: number,
  mass: number,
  name: string,
  period: number,
  radius: number,
  semi_major_axis: number,
  temperature: number
}

export const getPlanetInfo = async (planetName: string): Promise<PlanetsProps[]> => {
  try {
    const response: AxiosResponse<PlanetsProps[]> = await planetsApi.get("", {
      headers: { "X-Api-Key": apiNinjaKey },
      params: { name: planetName }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching Planets API:", error);
    throw error;
  }
};