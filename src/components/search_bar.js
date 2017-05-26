import React, {Component} from 'react';

//defining component(functional)

// /*const SearchBar = () => {
//   return <input />
// };*/

//but when
//we need to store the input we need to make
//class components

//giving access to all the functionality that React.Component has

// Class component has a state which has to be
// initialized in constructor of class
// to initiaze state we use
//          this.state = {} (an object)
// to manipulate state we use
//          this.setState() and we pass an object as arguement

// For handling events, we creat two steps :-
// 1. Make an event handler.
// 2. Pass that event handler to the component on which event is taking place
//   Both of these can be made inline by using arrow functions
class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
  }
//******whenever setState is called, the whole component re-renders*****.
// whenever we reference a JS object inside JSX, we put it inside curly braces
  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = {event =>  this.onInputChange(event.target.value) } />
      </div>
   );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

//exporting search bar
export default SearchBar;
