import React from 'react'
import axios from 'axios'
import Post from './Post'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: null }
  }

  componentDidMount() {
    axios.get('https://thewirecutter.com/wp-json/wp/v2/posts')
    .then(response => {
      this.setState({ posts: response.data })
    })
    .catch(error => console.log(error))
  }

  render() {
    console.log('posts', this.state.posts)
    const posts = this.state.posts;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Parser</h1>
        </header>
        <div className="parser">
          {posts && posts.map((post, i) =>
            <Post
              key={post.id}
              id={post.id}
              content={post.content.rendered}
              date={post.date}
              link={post.link}
              title={post.title.rendered}
            />)}
        </div>
      </div>
    );
  }
}

export default App;
