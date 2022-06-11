import './style.css';
import { Component } from 'react';

import { Post } from '../../components/Post';
import { loadPost } from '../../service/load-post';
import { Button } from '../../components/Button';
import { Input } from '../../components/Search';

class App extends Component {

  state = {
    post: [],
    allPost: [],
    page: 0,
    perPage: 5,
    textButton: 'load more',
    searchValue: ''
  }

  async componentDidMount() {
    await this.loadPost();
  }

  loadPost = async () => {
    const postAndPhotos = await loadPost()
    this.setState({
      post: postAndPhotos.slice(0, 5),
      allPost: postAndPhotos,
    })
  }

  loadMore = () => {
    const { page, perPage, post, allPost } = this.state;
    const nextPage = page + perPage;
    const nextPost = allPost.slice(nextPage, nextPage + perPage);

    post.push(...nextPost)

    this.setState({ page: nextPage })

    console.log(page, perPage, nextPage, nextPage + perPage, 'post')
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ searchValue: value })
  }


  render() {
    const { post, textButton, page, perPage, allPost, searchValue, home } = this.state;
    const noMorePost = page + perPage >= allPost.length;

    const filteredPost = !!searchValue ?
      allPost.filter(post => {
        return post.title.toLowerCase()
          .includes(
            searchValue.toLowerCase()
          )
      })

      : post;

    return (
      <div className='post'>

        {!!searchValue && (
          <h3>Search: {searchValue}</h3>
        )}

        <Input
          handleChange={this.handleChange}
          value={searchValue}
        />

        {filteredPost.length > 0 ?
          <Post post={filteredPost} />
          : <p>search not found</p>
        }

        {!searchValue && (
          <Button
            text={textButton}
            onClick={this.loadMore}
            disabled={noMorePost}
          />
        )}

      </div>
    )
  }
}

export default App;
