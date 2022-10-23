import React from "react";
import youtube from './img/youtube_footer_icon.png'
import vk from './img/vk_footer_icon.png'
import telegram from './img/telegram_footer_icon.png'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-container">
                <div className="container">
                    <nav className='navbar-container'>
                        <p className="copyRights">
                            2022 © Все права защищены.
                        </p>
                        <ul className='navbar-link-wrapper footer-styles'>
                            <li className="navbar-link-1">Главная</li>
                            <li className="navbar-link-2">О клубе</li>
                            <li className="navbar-link-3">Турниры</li>
                            <li className="navbar-link-4">Услуги</li>
                            <li className="navbar-link-5">Детский теннис</li>
                            <li className="navbar-link-6">Галерея</li>
                            <li className="navbar-link-7">Цены</li>
                            <li className="navbar-link-8">Контакты</li>
                        </ul>
                        <div className="footer-icon-position">
                            <img src={youtube} alt="" />
                            <img src={vk} alt="" />
                            <img src={telegram} alt="" />
                        </div>
                    </nav>
                </div>
            </footer>
        )
    }
}
export default Footer