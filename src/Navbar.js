import React from 'react'
import logo from './img/logo.png'
import youtube from './img/youtube_icon.png'
import vk from './img/vk_icon.png'


class Navbar extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className='navbar-container'>
                    <div className="logo-wrapper">
                        <img src={logo} alt="" className='logo' />
                    </div>
                    <ul className='navbar-link-wrapper'>
                        <li className="navbar-link-1">Главная</li>
                        <li className="navbar-link-2">О клубе</li>
                        <li className="navbar-link-3">Турниры</li>
                        <li className="navbar-link-4">Услуги</li>
                        <li className="navbar-link-5">Детский теннис</li>
                        <li className="navbar-link-6">Галерея</li>
                        <li className="navbar-link-7">Цены</li>
                        <li className="navbar-link-8">Контакты</li>
                    </ul>
                    <div className="social-web-wrapper">
                        <img src={youtube} alt="" />
                        <img src={vk} alt="" />
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar