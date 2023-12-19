import Hero from "../Hero/Hero";
import About from '../About/About';
import Comments from '../Comments/Comments';
import Episodes from '../Episodes/Episodes';

function MainPage() {
    return (
        <>
            <Hero />
            <Episodes/>
            <About/>
            <Comments/>
        </>
    )
}

export default MainPage;