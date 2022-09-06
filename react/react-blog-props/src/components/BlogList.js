import BlogPost from "./BlogPost"
import data from "../data"
import '../index.css'

export default function BlogList() {
    const postList = data.map(function (post) {
        return (
            <BlogPost
                key={post.id}
                post={post}
            />
        )
    })
    return (
        <div className="post-list">
            {postList}
        </div>
    )
}