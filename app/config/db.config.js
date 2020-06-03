module.exports = {
  HOST: "localhost",
  USER: "nxthong",
  PASSWORD: "1_Abc_123",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 50000
  }
};
