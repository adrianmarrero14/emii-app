import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
    render(){
        return (
            <>
                <div>About</div>
                <Link to="/">Home</Link>
            </>
        )
    }
}

export { About }