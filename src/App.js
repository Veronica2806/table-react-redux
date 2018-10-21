import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

//ACTIONS
import { updateValue, getUsers } from './actions/actions';

import Table from './components/Table/Table';

class App extends Component {
    constructor() {
        super();


    }

    componentWillMount() {
        this.props.getUsers();
    }


    render() {
    const { pending, success, rejected, response, error } = this.props.users;
    const users = success && response ? response : [];
    return (
      <div className="App">
          <Table
              activeColumns
              data={users}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        caclValue: state.calcReducer,
        users: state.getUsersReducer
    };
};

const mapDispatchToProps = dispatch => ({
    updateValue: (value) => dispatch(updateValue(value)),
    getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

