export const PostCard = ({ id, title, body, cover }) => (
    <div key={id}>
        <img src={cover} alt={title} />
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
)