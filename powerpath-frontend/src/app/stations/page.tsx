"use client";

import { useChargingPoints } from '@/utils/hooks/openChargeMap';

const ChargingPointsPage = () => {
  const { chargingPoints, isLoading, error } = useChargingPoints('US', 10);

  // Adicione o log para verificar os dados recebidos
  console.log('Dados recebidos:', chargingPoints);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Charging Stations</h1>
      {chargingPoints.length === 0 ? (
        <p>No charging stations found. Check your API or parameters.</p>
      ) : (
        <ul>
          {chargingPoints.map((station) => (
            <li key={station.ID}>
              <h2>{station.AddressInfo?.Title || 'No Title'}</h2>
              <p>
                {station.AddressInfo?.AddressLine1 || 'No Address'}, {station.AddressInfo?.Town || 'No Town'},{' '}
                {station.AddressInfo?.StateOrProvince || 'No State'},{' '}
                {station.AddressInfo?.Postcode || 'No Postcode'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChargingPointsPage;
