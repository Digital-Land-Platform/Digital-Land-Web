import { ApolloQueryResult, LazyQueryExecFunction } from '@apollo/client';

export interface Location {
  country: string;
  province: string;
  sector: string;
}

export interface FetchLocationProps {
  getLocation: LazyQueryExecFunction<any, { locationId: string }>;
  locations: Record<string, Location>;
  setLocations: React.Dispatch<React.SetStateAction<Record<string, Location>>>;
}

export const fetchLocation = async (
  locationId: string,
  { getLocation, locations, setLocations }: FetchLocationProps
): Promise<Location | null> => {
  if (locations[locationId]) return locations[locationId];

  const result: ApolloQueryResult<{ getLocation: Location }> = await getLocation({
    variables: { locationId }
  });

  if (result.data?.getLocation) {
    const fetchedLocation = result.data.getLocation;
    setLocations((prev) => ({ ...prev, [locationId]: fetchedLocation }));
    return fetchedLocation;
  }

  return null;
};

export const formatLocation = (location: Location | null): string => {
  if (!location) return 'Loading location...';
  return `${location.country}, ${location.province}, ${location.sector}`;
};
