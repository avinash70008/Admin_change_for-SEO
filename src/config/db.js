const mongoose = require("mongoose");

const connect = async () => {
  try {
    return await mongoose.connect(
      "mongodb+srv://cmsadmin:cmsadmin@cluster0.8zikjdp.mongodb.net/cmsadmin?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log("error form connection :", err.message);
  }
};

module.exports = connect;