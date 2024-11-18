"use client";

import { useState, useEffect } from 'react';
import { fetchChargingPoints } from '@/app/api/route';
import { ChargingPoint } from '@/types/types';

export const useChargingPoints = (
  countryCode: string,
  maxResults = 10
): { chargingPoints: ChargingPoint[]; isLoading: boolean; error: string | null } => {
  const [chargingPoints, setChargingPoints] = useState<ChargingPoint[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadChargingPoints = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchChargingPoints(countryCode, maxResults);
        setChargingPoints(data);
      } catch {
        setError('Failed to load charging points');
      }
    };

    loadChargingPoints();
  }, [countryCode, maxResults]);

  return { chargingPoints, isLoading, error };
};
