// import React, { Component } from "react";
// import SearchForm from "./SearchForm";
// import FlightsCard from "./FlightsCard";
// import flightAPI from "../utils/flightAPI";
// import "../styles/Result.css";

// class Container extends Component {
//     state = {
//         result: [],
//         filter: "",
//         filterBy: "quotes",
//         currentSort: "default",
//         sortField: ""

//     };

//     componentDidMount() {
//         flightAPI.search()
//             .then(res => {
//                 console.log(res)
//                 this.setState({
//                     result: res.data.results.map((e, i) => ({
//                         quotes: e.quotes.MinPrice,
//                         departure: e.quotes.OutboundLeg.DepartureDate,
//                         carriers: e.carriers.Name,
//                         place: e.places.CityName,
//                         airport: e.places.Name,
//                         key: i
//                     }))
//                 })
//                 console.log(quotes)

//             })
//             .catch(err => console.log(err));
//     }

//     handleFormSubmit = event => {
//         event.preventDefault();
//         const value = event.target.value;
//         const name = event.target.name;
//         console.log(name);
//         console.log(value);
//         this.setState({

//             [name]: value

//         });

//     };

//     handleInputChange = event => {
//         event.preventDefault();
//         console.log(event);
//         const value = event.target.value;
//         const name = event.target.name;
//         console.log(value);
//         console.log(name);
//         this.setState({

//             [name]: value

//         });
//     };

//     render() {
//         return (
//             <div className="container">
//                 <div className="row">
//                 </div>
//                 <div className="row">
//                     <div className="col-md-6">
//                         <SearchForm
//                             value={this.state.search}
//                             handleInputChange={this.handleInputChange}
//                             handleFormSubmit={this.handleFormSubmit}
//                         />
//                     </div>
//                 </div>

//                 <div className="row">
//                     <table className="table">
//                         <p>
//                             <th scope="col">Photo</th>
//                             <th>First Name</th>
//                             <th scope="col">Last Name </th>
//                             <th scope="col">Email</th>
//                             <th scope="col">Phone</th>
//                         </p>
//                         {[...this.state.result].map((item) =>
//                             <FlightsCard
//                                 place={item.place}
//                                 airport={item.airport}
//                                 quotes={item.quotes}
//                                 carriers={item.carriers}
//                                 departure={item.departure}
//                                 key={item.key}
//                             />
//                         )}

//                     </table>
//                 </div>


//             </div>
//         );
//     }
// }

// export default Container;