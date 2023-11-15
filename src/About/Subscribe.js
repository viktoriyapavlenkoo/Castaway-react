import './Subscribe.css'

function Subscribe() {
    return (
        <div className="subscribe">
            <div className="subscribe__container">
               <div className="subscribe__text-block">
                    <p className="subtitle subscribe__subtitle">Email Newsletter</p>
                    <h2 className="subscribe__title">Subscribe for updates</h2>
                </div> 
               <form action="" method="post">
                    <div>
                        <input type="text" name="name" id="" placeholder="Name"/>
                    </div>
                    <div>
                        <input type="email" name="email" id="" placeholder="Email"/>
                    </div>
                    <button type="submit" className="btn subscribe__btn">Submit</button>
               </form>
            </div>
        </div>
    )
}

export default Subscribe;