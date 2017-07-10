import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render(){
        return (
            <div className='navBar'>
                <div>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>

                </div>
            </div>
        )
    }
}

export default Header