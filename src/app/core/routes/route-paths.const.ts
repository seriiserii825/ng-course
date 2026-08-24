export const ROUTE_SEGMENTS = {
  APPS: 'apps',
  HOTEL_BOOKING: 'hotel-booking',
} as const;

export const ROUTE_PATHS = {
  HOME: '',
  CALCULATOR: 'calculator',
  BINDING: 'binding',
  APPS: 'apps',
  HOTEL_BOOKING: `${ROUTE_SEGMENTS.APPS}/${ROUTE_SEGMENTS.HOTEL_BOOKING}`,
};
