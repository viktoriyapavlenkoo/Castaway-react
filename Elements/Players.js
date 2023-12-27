import playersData from "../json/players.json"
import '../Elements/Players.css'

function Players() {
    return (
        <ul className="players__list">
            {playersData.map((item, index) =>
            <li key={index}><a href={item.href}><img src={item.image} alt={item.name} width={32}/></a></li>)}
        </ul>
    )
}

export default Players;