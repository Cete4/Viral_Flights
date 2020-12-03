const axios = require("axios");

axios({
  "method": "GET",
  "url": "https://api.covidtracking.com/v1/states/current.json",
})
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })