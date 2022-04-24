const postResolvers = require('./post');
const userResolvers = require('./user');
const commentsResolvers = require('./comments');

module.exports = {
  Post: {
    // modifier to apply like or comment counts
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
  Subscription: {
    ...postResolvers.Subscription,
  },
};
