import { Component } from 'react'
//import { robots } from './robots';
import CardList from './assets/components/CardList';
import SearchBox from './assets/components/SearchBox';
import './assets/styles/App.css';
import Scroll from './assets/components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => 
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    )
    return (
      <>
        <div className='text-center'>   
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} 
            />
          </Scroll>
        </div>
      </>
    )
  }
}

export default App
