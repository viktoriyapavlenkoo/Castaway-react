import './Comment.css'

function Comment(props) {
    const commentData = props.data;
    return (
        <>
            <img src={commentData.rating} alt="Rating" className="comment__rating"/>
            <p className="comment__text">{commentData.body}</p>
            <p className="comment__name">{commentData.name}</p>
        </>
    )
}

export default Comment;