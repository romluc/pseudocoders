import { gql } from '@apollo/client';



export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
      posts {
        _id
        title
        content
      }
    }
  }
`;

export const QUERY_VERIFICATION_TOKEN = gql`
query verificationToken($userId: ID!){
  verificationToken(userId: $userId){
    _id
    createdAt
  }
}
`

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      name
      email
      posts {
        _id
        title
        content
      }
    }
  }
`;


export const QUERY_POSTS = gql`
  query posts {
    posts {
      _id
      title
      content
      author
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query post($postId: ID!) {
    post(postId: $postId) {
      _id
      title
      content
      author
      createdAt
      comments {
        _id
        content
        author
        createdAt        
      }
    }
  }
`;



export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      posts {
        _id
        title
        content
        createdAt
      }
    }
  }
`;

export const QUERY_COMMENT = gql`
query comment($commentId: ID!){
  comment(commentId: $commentId){
    _id
    content
    author
    createdAt
    comments {
      _id
      content
      author
      createdAt      
    }
  }
}
`
