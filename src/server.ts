import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    // connect to MongoDB atlast path
    await mongoose.connect(process.env.DB_URL);

    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
