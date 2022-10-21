import React from "react";

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
            </div>
        )
    }
}
export default Main