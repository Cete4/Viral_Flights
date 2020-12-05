const axios = require("axios");

const country = "US";
const currency = "USD";
const locale = "en-US";
const originplace = "SFO-sky";
const destinationplace = "JFK-sky";
const outboundpartialdate = "anytime"; // “yyyy-mm-dd”

axios({
  "method": "GET",
  "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/"+country+"/"+currency+"/"+locale+"/"+originplace+"/"+destinationplace+"/"+outboundpartialdate,
  // "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/anytime",
  // "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/any/any/anytime",
  // "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/"+originplace+"/JFK-sky/anytime",
  "headers": {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key": "228bba183bmsh1e1636f132eb6b4p1abe0djsn78c9c5710da5",
    "useQueryString": true
  }, "params": {
    "inboundpartialdate": "2019-12-01",
  }
})
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })

//   import axios from "axios";


// export default {
//   getFlight: function() {
//     return axios.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + origin + "/" + destination + "/" + date);
//   },
//   getDogsOfBreed: function(breed) {
//     return axios.get("http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/FR/eur/en-US/uk/us/anytime/anytime?apikey=prtl6749387986743898559646983194");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/FR/eur/en-US/uk/us/anytime/anytime?apikey=228bba183bmsh1e1636f132eb6b4p1abe0djsn78c9c5710da5");
//   }
// };

// fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/"+originplace+"/JFK-sky/2019-09-01?inboundpartialdate=2019-12-01", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "228bba183bmsh1e1636f132eb6b4p1abe0djsn78c9c5710da5"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

// var originplace = "SFO-sky"
