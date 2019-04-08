module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "./coverage",
  testPathIgnorePatterns: [
  "/node_modules/",
    "/public/"
  ],
  collectCoverageFrom: [
    "src/**/*.(ts|tsx)"
  ]
}