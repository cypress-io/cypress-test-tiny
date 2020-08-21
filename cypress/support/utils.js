export const isJSONRequest = (object) =>
    typeof object === 'string' && /\.json$/.test(object);
