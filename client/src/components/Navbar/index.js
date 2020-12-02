import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Viral Flights</a>
            <a className="navbar-brand" href="/Flights">Flights</a>
            <a className="navbar-brand" href="/CoronaVirusTravelNews">Corona Virus Travel News</a>
            <a className="navbar-brand" href="/Blog">Blog</a>
        </nav>
    );
}

export default Nav;
