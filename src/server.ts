import { AppDataSource } from "./data-source";
import app from "./app";

AppDataSource.initialize().then(() => {
  
  app.listen(3000, async () => {
    console.log("Database connected.")
    console.log("Server is Runing!");
  });
}).catch(err => {
  console.log(err)
})

