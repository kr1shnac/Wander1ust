const initData = require("./data.js");
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("connected to dbs");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wander1ust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "688204c570a8d698264d3624",
  })); //map function create new array and insert owner in every listing
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
