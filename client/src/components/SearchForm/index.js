import React from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
// import flightAPI from "../utils/flightAPI";

function SearchForm(props) {
    return (
        // props = flightAPI.originplace
        <div className="container">
            <form>
                <div className="form-group row">
                    <label htmlFor="search">Search for Flights</label>

                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button</button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>



                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a Flight"
                        id="search"
                    />
{/* <h1> {flightAPI.originplace} </h1> */}
                    <RangeDatePicker
                    // props = {flightAPI.originplace}
                        startDate={new Date()}
                        endDate={new Date()}
                        onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
                        minDate={new Date(1900, 0, 1)}
                        maxDate={new Date(2100, 0, 1)}
                        dateFormat="D"
                        monthFormat="MMM YYYY"
                        startDatePlaceholder="Start Date"
                        endDatePlaceholder="End Date"
                        disabled={false}
                        className="my-own-class-name"
                        startWeekDay="monday"
                    />

                    <button onClick={props.handleFormSubmit} type="button" className="btn btn-light">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;