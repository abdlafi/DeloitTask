module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
        ],
        alias: {
          tests: ['./tests/'],
          '@shared': './src/shared',
          '@stories': './src/stories',
          '@assets': './src/assets',
          '@routes': './src/routes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
