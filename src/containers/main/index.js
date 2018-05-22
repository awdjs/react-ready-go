
/* Import Third Party Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// import styled from 'styled-components';


/* Import Redux Stuffs */
import {
  makeSelectTodos,
} from './selectors';


class Main extends React.Component {
  render() {
    const {
      todos,
    } = this.props;

    return (
      <div>
        <h1>
          Hello World !!
        </h1>
        <p>you have exactly {todos.size} tasks to do</p>
      </div>
    );
  }
}

Main.propTypes = {
  todos: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
});

function mapDispatchToProps(dispatch) {
  return {

  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
