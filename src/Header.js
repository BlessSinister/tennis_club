import React from 'react'
import Navbar from './Navbar'
import Hello from './Hello'



class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar />
                <div className='navbar-line-decor'></div>
                <Hello />
            </header>
        )
    }
}
export default Header