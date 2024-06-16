module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
    },
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testEnvironment: 'jsdom',

    transform: {
        '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './jest.babel.config.js' }],
      },
};
  