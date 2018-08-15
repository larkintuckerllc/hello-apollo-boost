export default `
  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }
  type Query {
    counter: Int
    todos: [Todo]
  }
  type Mutation {
    addTodo(text: String!): Todo
    decrementCounter(): Int
    incrementCounter(): Int
    toggleTodo(id: Int!): Todo
  }
`;
