import './Artist.css'

function Artist() {
    return (
        <div className="artist">
            <div className="artist__container">
                <div className="artist__text-block">
                    <button className="artist__btn">
                        <img src="../resources/images/arrow.svg" alt="" />
                    </button>
                    <p className="subtitle artist__subtitle">Meet your host</p>
                    <h2 className="section__title  artist__title">Jacob Paulaner</h2>
                    <p className="artist__text artist__first-text">Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
                    <p className="artist__text artist__second-text">He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
                </div>
                <div className="artist__img-block">
                    <img src="../resources/images/artist-img.png" alt="Artist" />
                </div>
            </div>
        </div>
    )
}

export default Artist;