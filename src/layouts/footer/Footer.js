import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                {this.props.title}
            </footer>
        )
    }
}

export { Footer }
