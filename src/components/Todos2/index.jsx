import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Query } from 'react-apollo';
import Todo2 from './Todo2';

const Todos2View = ({ error, loading, todos }) => {
  if (loading) return <div>LOADING</div>;
  if (error) return <div>ERROR</div>;
  return (
    todos.map(todo => (
      <Todo2
        completed={todo.completed}
        key={todo.id}
        id={todo.id}
        title={todo.title}
      />
    ))
  );
};

Todos2View.propTypes = {
  todos: PropTypes.array,
};

const GET_TODOS = gql`
  query {
    allTodos {
      id
      title
      completed @client
    }
  }
`;

const Todos2 =  () => (
  <Query query={GET_TODOS}>
    {({ data: { allTodos }, error, loading }) => (
      <Todos2View
        error={error}
        loading={loading}
        todos={allTodos} />
    )}
  </Query>
);

export default Todos2;
