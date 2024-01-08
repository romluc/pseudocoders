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
      createdAt
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
  mutation addComment($postId: ID!, $content: String!) {
    addComment(postId: $postId, content: $content) {
      _id
      content
      author
      createdAt
    }
  }
`;

export const REMOVE_POST_COMMENT = gql`
  mutation removeComment($postId: ID!, $commentId: ID!) {
    removeComment(postId: $postId, commentId: $commentId) {
      _id
      content
      author
      createdAt
    }
  }
`;

export const ADD_REPLY = gql`
mutation addReply($COMMENT_Id: ID!, $content: String!) {
  addReply(COMMENT_Id: $COMMENT_Id, content: $content) {
    _id
    content
    author
    createdAt
  }
}
`

export const REMOVE_REPLY = gql`
  mutation removeReply($COMMENT_Id: ID!, $commentId: ID!) {
    removeReply(COMMENT_Id: $COMMENT_Id, commentId: $commentId) {
      _id
      content
      author
      createdAt
    }
  }
`;


export const VERIFY_EMAIL = gql`
mutation verifyEmail($incomingPin: String!, $userId: ID!){
  verifyEmail(incomingPin: $incomingPin, userId: $userId){
    token
    isMatched
  }
}
`
export const RESEND_VERIFICATION_EMAIL = gql`
mutation resendVerificationEmail($userId: ID!){
  resendVerificationEmail(userId: $userId){
    message
    createdAt
  }
}
`
