// src/api/route.ts
import { ChargingPoint } from '@/types/types';

const API_BASE_URL = 'https://api.openchargemap.io/v3';
const API_KEY = '7ef3fba4-65cb-46da-9a11-dfdb72e98c2a';

export const routes = {
  chargingPoints: `${API_BASE_URL}/poi/`,
};

// Serviço para buscar pontos de recarga
export const fetchChargingPoints = async (
  countryCode: string,
  maxResults = 10
): Promise<ChargingPoint[]> => {
  const url = `${routes.chargingPoints}?output=json&countrycode=${countryCode}&maxresults=${maxResults}&key=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch charging points');
    }

    const data: ChargingPoint[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching charging points:', error);
    throw error;
  }
};
