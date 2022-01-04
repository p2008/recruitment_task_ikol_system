const geoPointRules = {
  latitude: [
    (v) => !!v || 'field is required',
    (v) => (v && v >= -90 && v <= 90) || 'field must be in range (-90, 90)',
  ],
  longitude: [
    (v) => !!v || 'field is required',
    (v) => (v && v >= -180 && v <= 180) || 'field must be in range (-180, 180)',
  ],
};

export { geoPointRules };
