const mongoose = require("mongoose");
const port = 3400;
const app = require("./src/config/app");

mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://127.0.0.1:27017/TwitterLarrave`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Conexión a base de datos correctamente");
    app.listen(port, () => {
      console.log("Servidor de express corriendo correctamente :)");
    });
  })
  .catch((err) => {
    console.log("Error al conectarse a la base de datos");
  });
