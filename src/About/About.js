import Artist from "./Artist";
import Subscribe from "./Subscribe";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <Artist/>
                <Subscribe/>
            </div>
        </section>
    )
}

export default About;