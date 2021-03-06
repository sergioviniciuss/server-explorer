module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js(x)?"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/.jest/fileMock.js",
    "\\.(scss|less)$": "identity-obj-proxy",
  },
};
