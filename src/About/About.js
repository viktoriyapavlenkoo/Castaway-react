import Artist from "./Artist";
import Subscribe from "./Subscribe";
import './About.css'

function About() {
    return (
        <section className="about">
            <div className="about-container">
                <Artist/>
                <Subscribe/>
            </div>
        </section>
    )
}

export default About;