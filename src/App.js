import React from 'react';
import './App.css';

const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    name: 'Mirko',
    age: 100,
    likesIceCream: true
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          growAYearOlder: () => this.setState({ age: this.state.age + 1 })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = () => (
  <div className="family">
    <Person />
  </div>
);

class Person extends React.Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {value => (
            <>
              <p>Name: {value.name}</p>
              <p>Age: {value.age}</p>
              <button onClick={value.growAYearOlder}>+1</button>
            </>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <div className="">
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
