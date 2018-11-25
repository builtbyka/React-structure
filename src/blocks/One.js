import React, {Component} from 'react';
import { itemsFetchData } from '../redux/actions/items';
import {connect} from 'react-redux';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class One extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItems: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  componentDidUpdate() {
    if(this.props.items.length && this.state.activeItems.length === 0){
      this.setState({activeItems: this.props.items, isLoaded: true})
    }
  }

  
  showAll = () => {
    this.setState({activeItems : this.props.items})
  }

  filterItems = (filterFunc) => {
    const filteredData = this.props.items.filter(filterFunc);
    this.setState({activeItems: filteredData});
  }

  filterOver50 = (item) => {
    return item.id > 50;
  }

  filterUnder50 = (item) => {
    return item.id < 50;
  }

  render() {
    if(this.props.asErrored) {
       return <p>Soz there's an error</p>
    }

    if (this.props.isLoading) {
        return <p>Loading...</p>
    }    

    return (
      <div>
        <button onClick={this.showAll}>All</button>
        <button onClick={() => this.filterItems(this.filterOver50)}>Over 50</button>
        <button onClick={() => this.filterItems(this.filterUnder50)}>Under 50</button>
        <ul>
          <TransitionGroup>
            {this.state.activeItems.map(
              (item) => (
                <CSSTransition key={item.id} timeout={500} classNames="move">
                  <li>{item.label}</li>
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(One);