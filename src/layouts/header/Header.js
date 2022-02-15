import React from 'react'
import './Header.css';

function Header(props) {
    return(
        <>
            <header>
                <h1>{props.title}</h1>
            </header>
        </>
    )
}

export { Header }