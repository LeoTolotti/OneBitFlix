import express from "express";
import { adminJS, adminJsRouter } from "./adminjs";
import { sequelize } from "./database";

const app = express();

app.use(adminJS.options.rootPath, adminJsRouter);
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log(`DB connection successfull`);
  });
  console.log(`Server started successfuly at port ${PORT}`);
});
