import axios, { AxiosResponse } from "axios";
import { nasaApiKey } from "../nasaApiKey/nasaApiKey";

const marsPhotosApi = axios.create({
  baseURL: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"
});

interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: {
    name: string;
    full_name: string;
  }[];
}

export interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

export interface MarsPhotosProps {
  photos: Photo[];
}

export const getMarsPhotos = async (): Promise<MarsPhotosProps> => {
  try {
    const response: AxiosResponse<MarsPhotosProps> = await marsPhotosApi.get("", {
      params: { api_key: nasaApiKey, sol: 666 }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Mars Rover Photos imagery:", error);
    throw error;
  }
};
