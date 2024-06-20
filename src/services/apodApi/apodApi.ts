// Date must be between Jun 16, 1995 and Jun 19, 2024.
import axios, { AxiosResponse } from "axios";
import { nasaApiKey } from "../nasaApiKey/nasaApiKey";

const apodApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod"
});

export interface ApodImageryProps {
  copyright: string,
  date: string,
  explanation: string,
  hdurl: string,
  media_type: string,
  service_version: string,
  title: string,
  url: string
};

export const getApodRandomImagery = async (): Promise<ApodImageryProps[]> => {
  try {
    const response: AxiosResponse<ApodImageryProps[]> = await apodApi.get("", {
      params: { api_key: nasaApiKey, count: 1 }
    });
    return response.data;
  } catch (err) {
    console.error("Error fetching APOD api:", err);
    throw err;
  }
};

export const getApodTodayImagery = async (): Promise<ApodImageryProps> => {
  try {
    const response: AxiosResponse<ApodImageryProps> = await apodApi.get("", {
      params: { api_key: nasaApiKey }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching APOD imagery:", error);
    throw error;
  }
};
