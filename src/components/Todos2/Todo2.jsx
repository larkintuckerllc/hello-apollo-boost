import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Mutation } from 'react-apollo';

const Todo2View = ({ completed, title, onClick }) => (
  <div
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {title}
  </div>
);

Todo2View.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: String!) {
    toggleTodo2(id: $id) @client
  }
`;

const Todo2 = ({ completed, id, title}) => (
  <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
    {toggleTodo2 => (
      <Todo2View
        completed={completed}
        title={title}
        onClick={toggleTodo2}
      />
    )}
  </Mutation>
);

export default Todo2;