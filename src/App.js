import React, { Component } from 'react';
import"./App.css"
import { CardList } from './Components/CardList/CardList';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsterData: [],
      searchQuery:""
    };
    // this.handleChange=this.handleChange.bind(this);
  }
  handleChange = (e) => {
  this.setState({ searchQuery: e.target.value });
};

  async fetchApi() {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then((response) => this.setState({ monsterData: response }));
  }

  async componentDidMount() {
    this.fetchApi();
  }

  render() {
    const {monsterData,searchQuery}=this.state;
    const filterMonster = monsterData.filter((monsterData)=>monsterData.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (

      <div className='App'>
        <h1>Humans Rolodex</h1>
        <input type="search" placeholder='search' onChange={this.handleChange}/>
        {filterMonster.length === 0 ? (
          <p>No monsters found.</p>
        ) : (
          <CardList monster={filterMonster} />
        )}
      </div>
    );
  }
}