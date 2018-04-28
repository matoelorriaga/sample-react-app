import React from 'react';
import User from '../components/User'
import '../css/App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  
  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_PATH}/users`)
      .then(rawResponse => rawResponse.json())
      .then(response => this.setState({ users: response }));
  }

  render() {
    return (
      <div className="app-root">
        { 
          this.state.users.map(user => {
            return <User user={ user } key= {user.id} />
          }) 
        }
      </div>
    );
  }

}
