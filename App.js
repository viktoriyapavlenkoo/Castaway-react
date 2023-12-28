import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AllEpisodes from './Episodes/AllEpisodes';
import MainPage from './MainPage/MainPage';

function App() {
    return (
        <div className='container'>
            <Header/>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/allEpisodes' element={<AllEpisodes/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;