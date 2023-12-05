const { User, Comment, Post } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('posts');
    },
    posts: async (parent, { author }) => {
      const params = author ? { author } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId }).populate('comments');
    },
    comment: async (parent, {commentId}) => {        
        return Comment.findOne({_id: commentId}).populate('comments');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      if(!user){
        throw AuthenticationError;
      }
      return { token, user };
    },    
    login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw AuthenticationError;
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
        throw AuthenticationError;
    }

    const token = signToken(user);

    return { token, user };
    },
    addPost: async (parent, { title, content }, context) => {

        console.log(context);
        
        if (context.user) {
          const post = await Post.create({
            title,
            content,
            author: context.user._id
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { posts: post._id } }
          );
            
          return post;
        }
        throw AuthenticationError;
        
    },
    removePost: async (parent, { postId }, context) => {
    if (context.user) {
        const post = await Post.findOneAndDelete({
        _id: postId,
        author: context.user._id,
        });

        await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { posts: post._id } }
        );

        return post;
    }
    throw AuthenticationError;
    },

    addComment: async (parent, { postId, content }, context) => {
        if (context.user) {
            const comment = await Comment.create({
                content: content, 
                author: context.user._id});

          await Post.findOneAndUpdate(
            { _id: postId },
            {
              $addToSet: {comments: comment._id},
            },
            {
              new: true,
              runValidators: true,
            }
          );

          return comment;
        }
        throw AuthenticationError;
    },
    removeComment: async (parent, { postId, commentId }, context) => {
        if (context.user) {

            const comment = await Comment.findOneAndDelete({
                _id: commentId,
                author: context.user._id,
                });

          await Post.findOneAndUpdate(
            { _id: postId },
            {
              $pull: {
                comments: {
                  _id: commentId,
                  author: context.user._id,
                },
              },
            },
            { new: true }
          );

          return comment;
        }
        throw AuthenticationError;
    }, 
    addReply: async (parent, { COMMENT_Id, content }, context) => {
    if (context.user) {
        const comment = await Comment.create({
            content: content, 
            author: context.user._id});

        await Comment.findOneAndUpdate(
        { _id: COMMENT_Id },
        {
            $addToSet: {comments: comment._id},
        },
        {
            new: true,
            runValidators: true,
        }
        );

        return comment;
    }
    throw AuthenticationError;
    },
    removeReply: async (parent, { COMMENT_Id, commentId }, context) => {
        if (context.user) {

            const comment = await Comment.findOneAndDelete({
                _id: commentId,
                author: context.user._id,
                });

          await Comment.findOneAndUpdate(
            { _id: COMMENT_Id },
            {
              $pull: {
                comments: {
                  _id: commentId,
                  author: context.user._id,
                },
              },
            },
            { new: true }
          );

          return comment;
        }
        throw AuthenticationError;
    }
}
};



module.exports = resolvers;
