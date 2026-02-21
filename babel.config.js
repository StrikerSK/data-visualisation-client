module.exports = (api) => {
  api.cache(true);

  const isDevelopment = process.env.NODE_ENV === 'development';

  return {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      isDevelopment && 'react-refresh/babel',
    ].filter(Boolean),
  };
};
