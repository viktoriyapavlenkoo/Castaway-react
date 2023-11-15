import './App.css'
import Episodes from './Episodes/Episodes';
import Header from './Header/Header';
import Hero from './Hero/Hero';

function App() {
    return (
        <div className='container'>
            <Header/>
            <Hero />
            <Episodes/>
        </div>
    )
}

export default App;