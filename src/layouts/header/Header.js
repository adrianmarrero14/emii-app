import React from 'react'
import './Header.css';

class Header extends React.Component {

    state = {
        show: true
    }

    toggleShow = () => {
        return this.setState({ show: !this.state.show })
    }

    render() {
        if (this.state.show) {
            return (
                <>
                    <header>
                        <h1>{this.props.title}</h1>
                        <button onClick={ this.toggleShow }> Toggle Show</button>
                    </header>
                </>
            )
        } else {
            return (
                <>
                    <h1>There are not elements</h1>
                    <button onClick={ this.toggleShow }> Toggle Show</button>
                </>
            )

        }
    }
}

export { Header }