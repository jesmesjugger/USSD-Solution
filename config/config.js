module.exports = {
    host: "localhost",
    user: "root",
    pass: "",
    db: "ussdtest",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };