const { User, Project, Comment, Post } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('posts');
    },
    posts: async (parent, { author }) => {
      const params = author ? { author } : {};
      return Post.find(params).sort({ createdAt: -1 }).populate('comments');
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    projects: async () => {      
      return Project.find().sort({ createdAt: -1 });
    },
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },
    commentComments: async (parent, {COMMENT_Id}) => {
        const COMMENT = COMMENT_Id;
        return Comment.find(COMMENT).sort({ createdAt: -1 }).populate('comments');
    },
    postComments: async (parent, {postId}) => {
        const post = postId;
        return Comment.find(post).sort({ createdAt: -1 }).populate('comments');
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
    addProject: async (parent, { name, imgSrc, alt, page, techs, repo }, context) => {
    if (context.user) {
        const project = await Project.create({
        name,
        imgSrc,
        alt, 
        page,
        techs, 
        repo
        });
        return project;
    }
    throw AuthenticationError;    
    },
    removeProject: async (parent, { projectId }, context) => {
    if (context.user) {
        const project = await Project.findOneAndDelete({
        _id: projectId
        });

        return project;
    }
    throw AuthenticationError;
    },
    addPostComment: async (parent, { postId, commentText }, context) => {
        if (context.user) {
            const comment = await Comment.create({
                content: commentText, 
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
    removePostComment: async (parent, { postId, commentId }, context) => {
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
                  author: context.user.name,
                },
              },
            },
            { new: true }
          );

          return comment;
        }
        throw AuthenticationError;
    }, 
    addCommentComment: async (parent, { COMMENT_Id, commentText }, context) => {
    if (context.user) {
        const comment = await Comment.create({
            content: commentText, 
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
    removePostComment: async (parent, { COMMENT_Id, commentId }, context) => {
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
                  author: context.user.name,
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
