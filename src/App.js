import React from 'react'
import axios from 'axios'
import Posts from './Posts'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] }
  }

  componentDidMount() {
    axios.get('https://thewirecutter.com/wp-json/wp/v2/posts')
    .then(response => this.setState({
      posts: response.data
    })
    .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.posts)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Parser</h1>
        </header>
        <p className="App-intro">
          <Posts posts={this.state.posts}
        </p>
      </div>
    );
  }
}

export default App;
