import '../index.css'

export default function BlogPost(props) {
    return (
        <div className="post-container">
            <h2 className="post-title">{props.post.title}</h2>
            <p className="post-subtitle">{props.post.subTitle}</p>
            <p className="post-author">Posted by {props.post.author} on {props.post.date}</p>
        </div>
    )
}