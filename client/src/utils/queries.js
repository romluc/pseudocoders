import { gql } from '@apollo/client';



export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
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
        comments
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
