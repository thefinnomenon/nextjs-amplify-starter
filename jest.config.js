module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': `<rootDir>/src/__mocks__/fileMock.js`,

    // Handle path aliases
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/images/(.*)$': '<rootDir>/public/images/$1',
    '^@/locales/(.*)$': '<rootDir>/locales/$1',
    '^@/tests/(.*)$': '<rootDir>/src/__tests__/$1',
    '^@/mocks/(.*)$': '<rootDir>/src/__mocks__/$1',
    '^@/api/(.*)$': '<rootDir>/src/api/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/cypress/(.*)$': '<rootDir>/src/cypress/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/stories/(.*)$': '<rootDir>/src/stories/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/utilities/(.*)$': '<rootDir>/src/utilities/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/src/cypress/'],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};
