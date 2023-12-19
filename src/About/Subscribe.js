import './Subscribe.css'

function Subscribe() {
    return (
        <div className="subscribe" id='contact'>
            <div className="subscribe__container">
               <div className="subscribe__text-block">
                    <p className="subtitle subscribe__subtitle">Email Newsletter</p>
                    <h2 className="subscribe__title">Subscribe for updates</h2>
                </div> 
               <form action="" method="post" className="subscribe__form">
                    <div>
                        <input type="text" name="name" id="" placeholder="Name" className="form__input input__name"/>
                    </div>
                    <div>
                        <input type="email" name="email" id="" placeholder="Email" className="form__input input__email"/>
                    </div>
                    <button type="submit" className="btn subscribe__btn">Submit</button>
               </form>
            </div>
        </div>
    )
}

export default Subscribe;