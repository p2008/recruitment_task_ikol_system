import apiService from './api_layer';

const simpleParams = (params) => ({
  lat_1: params.start.latitude,
  long_1: params.start.longitude,
  lat_2: params.end.latitude,
  long_2: params.end.longitude,
  unit: 'meters',
  decimal_places: '2',
});

export const getSimple = (params) => apiService.get(
  '/distance/simple',
  { params: simpleParams(params) },
);
