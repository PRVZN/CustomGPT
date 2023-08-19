const config = require("../serverConfig");
import mongoose from "mongoose";
async function dbConnect() {
  mongoose
    .connect(config.DBCONNECT, {
      autoIndex: true,
      readPreference: "primary",
      connectTimeoutMS: 15000,
    })
    .then(
      () => {
        console.log("Database is connected");
      },
      (err: any) => {
        console.log("Can not connect to the database" + err);
      },
    );
}

export default dbConnect;
