import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render(){
        return (
            <>
                <div>Home</div>
                <Link to="/about">About</Link>
            </>
        )
    }
}

export { Home }