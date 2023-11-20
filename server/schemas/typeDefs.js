const typeDefs = `


  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    posts: [Post]
  }

  type Comment {
    content: String!
    comments: [Comment]
    author: String!
    createdAt: String!
  }

  type Project {
    name: String!
    imgSrc: String!
    alt: String!
    page: String!
    techs: String!
    repo: String!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    comments: [Comment]
    author: String!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }





  type Query {
    users: [User]
    user(email: String!): User
    postComments(postId: ID!): [Comment]
    commentComments(COMMENT_Id: ID!): [Comment]
    project(projectId: ID!): Project
    projects: [Project]
    posts(author: String): [Post]
    post(postId: ID!): Post
    me: User
  }



  
  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(title: String!, content: String!): Post
    removePost(postId: ID!): Post
    addProject(name: String!, imgSrc: String!, alt: String!, page: String!, techs: String!, repo: String!): Project
    removeProject(projectId: ID!): Project
    addPostComment(postId: ID!, commentText: String!): Post
    removePostComment(postId: ID!, commentId: ID!): Post
    addCommentComment(COMMENT_Id: ID!, commentText: String!): Comment
    removeCommentComment(COMMENT_Id: ID!, commentId: ID!): Comment

  }
`;

module.exports = typeDefs;
