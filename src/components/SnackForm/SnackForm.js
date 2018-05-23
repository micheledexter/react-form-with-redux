import React, { Component } from 'react';
import './SnackForm.css';
import { connect } from 'react-redux';

const mapReduxStateToProps = reduxState => ({ reduxState });

class SnackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snack: {
        type: 'ADD_SNACK',
        value: '',
      },
    }
  }

  handleFormChange = propertyName => event => {
    this.setState({
      snack: {
        ...this.props.snack,
        [propertyName]: event.target.value,
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const action = { type: 'ADD_SNACK', value: this.state.snack.value }
    this.props.dispatch(action);
  }

  render() {
    return (
      <div className="SnackForm">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleFormChange('value')} value={this.state.snack.value} />
          <input type="submit" value="Submit" />
        </form>
        <ul className="snackList">
          {this.props.reduxState.snackReducer.map((item,i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(SnackForm);