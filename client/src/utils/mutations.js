import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;


export const ADD_POST = gql`
  mutation addPost($title: String!, $content: String!) {
    addPost(title: $title, content: $content) {
      _id
      title
      content
      createdAt
      comments {
        _id
        content
      }
      author
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
      title
      content
      createdAt
      comments {
        _id
        content
      }
      author
    }
  }
`;

export const ADD_POST_COMMENT = gql`
  mutation addPostComment($postId: ID!, $content: String!) {
    addPostComment(postId: $postId, content: $content) {
      _id
      content
      author
      createdAt
    }
  }
`;

export const REMOVE_POST_COMMENT = gql`
  mutation removePostComment($postId: ID!, $commentId: ID!) {
    removePostComment(postId: $postId, commentId: $commentId) {
      _id
      content
      author
      createdAt
    }
  }
`;


