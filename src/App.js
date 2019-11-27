import React from 'react';
import './App.css';

const MyContext = React.createContext();

const MyProvider = (props) => {
  const [data, setData] = React.useState({
    name: 'Mirko',
    age: 100,
    likesIceCream: true
  });

  return (
    <MyContext.Provider
      value={{
        data,
        growAYearOlder: () => setData(data => ({ ...data, age: data.age + 1 }))
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

const Family = (props) => (
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
              <p>Name: {value.data.name}</p>
              <p>Age: {value.data.age}</p>
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
