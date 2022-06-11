import { PostCard } from "../PostCard"

export const Post = ({ post }) => (
    <div>
        {
            post.map(post => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    cover={post.cover}
                />
            ))
        }
    </div>
)