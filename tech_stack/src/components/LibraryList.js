import React, { Component } from 'react';

// we need to reach to redux state and pull the libraryList data out of it and display here
// USe connect tool to wrap the component so that it can ask for data from provider
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

// get state => pull substate => return as props which will be passed to component by connect
const mapStateToProps = (state) => {
  return { libraries: state.libraries };
};

/*
  https://learn.co/lessons/map-state-to-props-readme
  For a component to be connected to the store, i.e.
  to be able to get data from the store's internal state and
  to be told to re-render and get new data when that state changes,
  we will use the connect() function made available to us by React Redux.


  Two goals here:
  (a) to only re-render our App component when specific changes to the state occur,
  (b) to only provide the slice of the state that we need to our App component.
  So we will need:
      (1) a function that listens to every change in the store and
      (2) filters out the changes relevant to a particular component to
      (3) provide to that component.

  The connect function is taking care of task 1, it is synced up to our store,
  listening to each change in the state that occurs. When a change occurs,
  it calls a function that we write called mapStateToProps(),
  and in mapStateToProps() we specify exactly which slice of the state
  we want to provide to our component. Here, we want to provide state.items,
  and allow our component to have access to them through a prop called items.
  So that completes task 2. Then we have to say which component in our application
  we are providing this data to: you can see that we write connect(mapStateToProps)(App) to
  specify that we are connecting this state to the App component.
  Finally,this entire connect() method returns a new component,
  it looks like the App component we wrote, but now it also receives the correct data.
  This is the component we wish to export. So at the bottom of the file, you see:
*/

// it calls the connect function, and it returns anthor function, then we immediately
// call the function with LibraryList

// connect(), allows us to specify which data we are listening to (through mapStateToProps),
// and which component we are providing the data
export default connect(mapStateToProps)(LibraryList);
