import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setMessage} from '../redux/actions/message';

class Two extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 1
    }

    this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler = () => {
    this.props.dispatch(setMessage('New message - '+this.state.counter));
    this.setState({counter: this.state.counter+1});
  }

  componentDidUpdate() {
    
  }

  render(){
    const {messages} = this.props;
    return(
      <div>
        Two
        <button onClick={this.clickHandler}>Button</button>
        <ul>
          {messages.map((message, i) => <li key={i}>{message}</li>)}
        </ul>
      </div>
    )
  }
}

export default connect(state => state)(Two);