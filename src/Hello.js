import React from 'react'
import btnPolygon from './img/btn_polygon.png'
import arrow from './img/arrow_icon.png'


class Hello extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="h1-wrapper">
                    <h1>Петербургский <br />
                        теннисный клуб <br />
                        имени М.А. Пасечникова</h1>
                </div>
                <div className="hello-video-btn">
                    <div className="video-btn">
                        <div className="white-ellipse">
                            <div className="purple-elipse">
                                <div>
                                    <img src={btnPolygon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-text">
                        Посмотрите видео <br /> о нашем клубе
                    </div>
                </div>
                <div className="service-wrapper-position">
                    <div className="service-wrapper">
                        <div className="sevice-name">Услуги</div>
                        <div className="service-category-wrapper">
                            <div className="service-category">Аренда корта</div>
                            <div className="service-icon">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="sevice-name">Услуги</div>
                        <div className="service-category-wrapper">
                            <div className="service-category">Детский теннис</div>
                            <div className="service-icon">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="sevice-name">Услуги</div>
                        <div className="service-category-wrapper">
                            <div className="service-category">Сборы команды</div>
                            <div className="service-icon">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="sevice-name">Услуги</div>
                        <div className="service-category-wrapper">
                            <div className="service-category">Расписание</div>
                            <div className="service-icon">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default Hello


