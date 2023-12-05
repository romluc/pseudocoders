const typeDefs = `


  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    posts: [Post]
  }

  type Comment {
    _id: ID!
    content: String!
    comments: [Comment]
    author: ID!
    createdAt: String!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    comments: [Comment]
    author: ID!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }





  type Query {
    users: [User]
    user(userId: ID!): User
    comment(commentId: ID!): Comment
    posts(author: ID): [Post]
    post(postId: ID!): Post
    me: User
  }


  
  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(title: String!, content: String!): Post
    removePost(postId: ID!): Post
    addComment(postId: ID!, content: String!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    addReply(COMMENT_Id: ID!, content: String!): Comment
    removeReply(COMMENT_Id: ID!, commentId: ID!): Comment

  }
`;

module.exports = typeDefs;
