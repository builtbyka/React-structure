import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import One from '../blocks/One';
import Two from '../blocks/Two';

class Main extends Component {

  componentDidMount(){
      console.log('main');
  }

  render(){
      return(
        <div>
          Main
          <Link to="/main/1">One</Link>
          <Link to="/main/2">Two</Link>
          <Link to="/">Splash</Link>
          <Route path="/main/1" component={One}/>
          <Route path="/main/2" component={Two}/>
        </div>
      )
  }
};

export default Main;


// const Main = ({match}) => {
//   return(
//     <div>
//       Main
//         <Link to="/main/1">One</Link>
//         <Link to="/main/2">Two</Link>
//         <Link to="/">Splash</Link>
//         <Route path="/main/1" component={One}/>
//         <Route path="/main/2" component={Two}/>
//     </div>
// )};

// export default Main;