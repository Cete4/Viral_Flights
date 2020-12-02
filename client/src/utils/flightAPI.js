const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-09-01",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key":"228bba183bmsh1e1636f132eb6b4p1abe0djsn78c9c5710da5",
    "useQueryString":true
    },"params":{
    "inboundpartialdate":"2019-12-01"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })