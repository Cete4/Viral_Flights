import React from "react";

function Form(props) {
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
                    <button onClick={props.handleFormSubmit} type="button" className="btn btn-light">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;