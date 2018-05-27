
/* Import Third Party Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

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
          Hello World!
        </h1>
        <h3>
          welcome to ready react go boilerplate
        </h3>
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
