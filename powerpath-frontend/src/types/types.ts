export type AddressInfo = {
  Title: string;
  AddressLine1: string;
  Town: string;
  StateOrProvince: string;
  Postcode: string;
  Country: { Title: string };
};

export type ChargingPoint = {
  AddressInfo: AddressInfo;
  ID: number;
};