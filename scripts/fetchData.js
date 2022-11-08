const axios = require("axios");

const functionSetData = {
  fetchUSer: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.data)
      .catch((err) => console.log(err)),
};

module.exports = functionSetData;
