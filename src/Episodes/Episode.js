function Episode(props) {
    const episodeData = props.data;
    return (
        <>
            <div className="episode__img-block">
                <img src={episodeData.image} alt={episodeData.alt} />
            </div>
            <div className="episode__text-block">
                <p className="episode__category">{episodeData.category}</p>
                <p className="episode__number">Episode {episodeData.id}</p>
                <h3 className="episode__title">{episodeData.title}</h3>
                <p className="episode__text">{episodeData.text}</p>
                <button className="btn episode__btn" data-id={episodeData.id}>View Episode Details</button>
            </div>
        </>
    )
}

export default Episode;