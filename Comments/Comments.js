import commentsData from '../json/comments.json'
import Comment from './Comment';
import './Comments.css'

function Comments() {
    return (
        <section className="comments">
            <div className="comments__containers">
                <ul className="comments__list">
                    {commentsData.map((item, index) => <li key={index} className='comments__item'><Comment data={item}/></li>)}
                </ul>
            </div>
        </section>
    )
}

export default Comments;