const mongoose = require("mongoose");
const uri =
  "mongodb+srv://talktostevenson:8N8xmd7hJeq0UBJw@de-damak.sue7t.mongodb.net/?retryWrites=true&w=majority&appName=De-damak";

function main() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Succesfull");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

module.exports = { main };
