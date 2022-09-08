/**
 * The last several challenges covered the basic ways to pass props to child components.
 * But what if the child component that you're passing a prop to is an ES6 class component, 
 * rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props. 
 * Anytime you refer to a class component within itself, you use the this keyword. To access props within a class component, 
 * you preface the code that you use to access it with this. For example, if an ES6 class component has a prop called data, you write {this.props.data} in JSX.
 */


/**
 *  Exercise is for passing props that are from other components
 */
class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <Welcome name="Ryan"/>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /* Change code below this line */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Change code above this line */ }
          </div>
      );
    }
  };