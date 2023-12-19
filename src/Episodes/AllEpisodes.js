import episodesData from '../json/episodes.json'
import Episode from './Episode';
import './Episodes.css'

function AllEpisodes() {
    return (
        <section className="all-episodes episodes">
            <div className="episodes__container">
                <ul className="episodes__list">
                    {episodesData.map((item, index) => <li className="episodes__item" key={index}><Episode data={item} /></li>)}
                </ul>
            </div>
        </section>
    )
}
export default AllEpisodes;