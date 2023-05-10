const mongoose = require("mongoose");

module.exports = {
  connectToDb: async () => {
    try {
      //need to add in cluster key here
      await mongoose.connect(
        "mongodb+srv://mwhitham:duSWUr6Fmn7vPVvu@backend-finalproject.b1pfm04.mongodb.net/cinema"
      );
      console.log("Connected to db");
    } catch (err) {
      console.log("Failed to connect:", err);
    }
  },
  disconnect: async () => {
    try {
      await mongoose.disconnect();
      console.log("DISCONNECTED");
    } catch (err) {
      console.error("Failed to disconnect:", err);
    }
  },
};
