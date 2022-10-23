import React from "react";
import leftArrow from './img/leftArrow_icon.png'
import rightArrow from './img/rightArrow_icon.png'
import trainer1 from './img/trainers_photo_1.png'
import trainer2 from './img/trainers_photo_2.png'
import trainer3 from './img/trainers_photo_3.png'
import trainer4 from './img/trainers_photo_4.png'
import trainer5 from './img/trainers_photo_5.png'
import trainer6 from './img/trainers_photo_6.png'
import arrowDecor from './img/abonement-arrow-decor.png'



class Main extends React.Component {
    render() {
        return (
            <div className="continer">
                <div className="advantages-wrapper">
                    <div className="adv-border-decor-block"><div className="advantages-block-1">
                        <p>5 летних <br /> грунтовых кортов</p>
                    </div></div>
                    <div className="adv-border-decor-block"><div className="advantages-block-2">
                        <p>Зал с покрытием <br /> “Искусственная трава”</p>
                    </div></div>
                    <div className="adv-border-decor-block">
                        <div className="advantages-block-3">
                            <p> Зал с покрытием <br />
                                “Хард”
                            </p>
                        </div>
                    </div>
                </div>
                <section className="about">
                    <div className="about-wrapper">
                        <div className="about-img"></div>
                        <div className="about-text">
                            <h2>
                                Спортивный клуб
                            </h2>
                            <p>
                                Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis. Ultricies erat pretium risus quam tincidunt non viverra porttitor. Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet aliquet ultrices mauris pellentesque. Non ipsum commodo, sit mi sit netus aenean nisl. ]Donec sit pellentesque enim, vestibulum. <br /> <br />
                                Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.
                            </p>
                            <h3>Ornare orci ut dictum nulla fames. </h3>
                            <div className="about-list-container-position">
                                <div className="about-decor-li-wrapper">
                                    <div className="decor-li decor-li-1"></div>
                                    <div className="decor-li decor-li-2"></div>
                                    <div className="decor-li decor-li-3"></div>
                                    <div className="decor-li decor-li-4"></div>
                                </div>
                                <ul className="ul-about-wrapper">
                                    <li>Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis.</li><br />
                                    <li>Nisl senectus sed malesuada donec. Interdum malesuada bibendum imperdiet elementum auctor vitae in. </li><br />
                                    <li>Quam purus ornare dictum pharetra. Sed viverra tellus sollicitudin urna, sagittis. </li><br />
                                    <li>Scelerisque urna senectus commodo, nam. Donec nibh tempus imperdiet nisi, tincidunt mus egestas nisl nullam.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trainers">
                    <div className="trainers-wrapper">
                        <h2 className="trainers-h2">Тренерский состав

                        </h2>
                        <div className="trainers-slider-btn-wrapper">
                            <div className="trainers-slider-btn">
                                <img src={leftArrow} alt="" />
                            </div>
                            <div className="trainers-slider-btn">
                                <img src={rightArrow} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="trainers-slide-wrapper">
                        <div className="trainers-card">
                            <div className="trainers-card-wrapper">
                                <img src={trainer1} alt="" />
                                <h2 className="trainer-name">Pulvinar <br />
                                    aliquam</h2>
                                <p className="trainer-regali">
                                    Arcu elit massa amet turpis vel consequat pellentesque sit.
                                </p>
                            </div>
                        </div>
                        <div className="trainers-card">
                            <div className="trainers-card-wrapper">
                                <img src={trainer2} alt="" />
                                <h2 className="trainer-name">Pretium <br />
                                    odio</h2>
                                <p className="trainer-regali">
                                    Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.
                                </p>
                            </div>
                        </div>
                        <div className="trainers-card">
                            <div className="trainers-card-wrapper">
                                <img src={trainer3} alt="" />
                                <h2 className="trainer-name">Aliquet <br />
                                    consectetur</h2>
                                <p className="trainer-regali">
                                    Id sapien sed nibh fermentum massa posuere ipsum. Diam in.
                                </p>
                            </div>
                        </div>
                        <div className="trainers-card">
                            <div className="trainers-card-wrapper">
                                <img src={trainer4} alt="" />
                                <h2 className="trainer-name">Blandit <br />
                                    augue</h2>
                                <p className="trainer-regali">
                                    Scelerisque accumsan pretium justo, vitae elit. Dolor semper morbi sit auctor vel diam eros.
                                </p>
                            </div>
                        </div>
                        <div className="trainers-card">
                            <div className="trainers-card-wrapper">
                                <img src={trainer5} alt="" />
                                <h2 className="trainer-name">Lorem <br />
                                    lacus</h2>
                                <p className="trainer-regali">
                                    Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venenatis faucibus.
                                </p>
                            </div>
                        </div>
                        <div className="trainers-card">
                            <div className="trainers-card-wrapper">
                                <img src={trainer6} alt="" />
                                <h2 className="trainer-name">Sed <br />
                                    erat</h2>
                                <p className="trainer-regali">
                                    Quis ullamcorper pretium lacus risus tellus dolor etiam.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="price">
                    <div className="price-container">
                        <div className="price-abonement">
                            <h2 className="price-h2">
                                Цены и абонементы
                            </h2>
                            <div className="price-block-1 text">
                                Зимний сезон 2021-2022
                                <div className="arrow-decor">
                                    <img src={arrowDecor} alt="" />
                                </div>
                            </div>
                            <div className="price-block-1">
                                Абонемент
                                <div className="arrow-decor">
                                    <img src={arrowDecor} alt="" />
                                </div>
                            </div>
                            <div className="price-block-1">
                                Скидки
                                <div className="arrow-decor">
                                    <img src={arrowDecor} alt="" />
                                </div>
                            </div>
                            <div className="price-block-1">
                                Дополнительные услуги
                                <div className="arrow-decor">
                                    <img src={arrowDecor} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="price-services">
                            <div className="price-services-h2-container">
                                <h2 className="trainers-h2">Услуги
                                </h2>
                                <div className="trainers-slider-btn-wrapper">
                                    <div className="trainers-slider-btn">
                                        <img src={leftArrow} alt="" />
                                    </div>
                                    <div className="trainers-slider-btn">
                                        <img src={rightArrow} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="services-content-border">
                                <div className="services-text">
                                    <p>
                                        Уютное кафе
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Main