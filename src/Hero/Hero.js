import Players from '../Elements/Players';
import '../Hero/Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
               <div className="hero__img-block">
                    <img src="../resources/images/hero-img.png" alt="Hero" />
               </div>
               <div className="hero__text-block">
                    <h1 className="title hero__title">Take your podcast to the</h1>
                    <h2 className="title hero__subtitle"><span>next </span> level</h2>
                    <div className='hero__players'>
                        <p>Listen on</p>
                        <Players/>
                    </div>
                    
               </div>
            </div>
        </section>
    )
}

export default Hero;