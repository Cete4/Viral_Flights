import React from "react";
import { RangeDatePicker } from 'react-google-flight-datepicker`;

function SearchForm(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group row">
                    <label htmlFor="search">Search for Flights</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a Flight"
                        id="search"
                    />

                    <RangeDatePicker
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