import episodesData from '../json/episodes.json'
import Episode from './Episode';
import './Episodes.css'

function Episodes() {
    const lengthEpisodes = episodesData.length;
    const countViewEpisodes = 3;
    const lastEpisodes = episodesData.filter((item, index) => index >= lengthEpisodes - countViewEpisodes);
    lastEpisodes.sort((a, b) => b.id - a.id)

    return (
        <section className="episodes">
            <div className="episodes__container">
                <div className="episodes__header">
                    <h2 className="section__title episodes__title">Latest episodes</h2>
                    <button className='btn episodes__btn'>View all episodes</button>
                </div>
                <ul className="episodes__list">
                    {lastEpisodes.map((item, index) => <li className="episodes__item" key={index}><Episode data={item} /></li>)}
                </ul>
            </div>
            
        </section>
    )
}

export default Episodes;