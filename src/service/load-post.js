export const loadPost = async () => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [post, photos] = await Promise.all([postResponse, photoResponse])

    const postJson = await post.json()
    const photoJson = await photos.json()

    const postAndPhotos = postJson.map((post, index) => {
        return { ...post, cover: photoJson[index].url }
    })

    return postAndPhotos
}