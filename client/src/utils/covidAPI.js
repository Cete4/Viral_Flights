
  import axios from "axios";


  export default {
    getCovidInfo: function() {
      return axios.get("https://api.covidtracking.com/v1/states/current.json");
    },
    getCovidByState: function(state) {
      return axios.get("https://api.covidtracking.com/v1/states/" + state + "/current.json");
    },
    getCovidInfoByState: function(state) {
      return axios.get("https://api.covidtracking.com/v1/states/" + state + "/info.json");
    }
  };