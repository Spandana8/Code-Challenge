import * as _ from 'lodash';
const getPosts = state => {
  return state.user.posts;
};

const getPostsLoading = state => {
  return state.user.loading.posts;
};

const getPostsError = state => {
  return state.user.error.posts;
};

const getUsers = state => {
  return state.user.users;
};

const getUsersLoading = state => {
  return state.user.loading.users;
};

const getUsersError = state => {
  return state.user.error.users;
};

const isPageLoading = state => {
  return getPostsLoading(state) && getUsersLoading(state);
};

const mapUsers = (post, users) => {
  const data = _.find(users, { id: post.userId });
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    userId: data.id,
    name: data.name,
    username: data.username,
    email: data.email,
    address: {
      street: data.address.street,
      suite: data.address.suite,
      city: data.address.city,
      zipcode: data.address.zipcode,
      geo: {
        lat: data.address.geo.lat,
        lng: data.address.geo.lng
      }
    },
    location: `${data.address.suite}, ${data.address.street}, ${data.address.city}`,
    phone: data.phone,
    website: data.website,
    company: {
      name: data.company.name,
      catchPhrase: data.company.catchPhrase,
      bs: data.company.bs
    }
  };
};

const mapUsersPosts = (users, posts) => {
  return posts.map(post => mapUsers(post, users));
};

const getUserPosts = state => {
  const users = getUsers(state);
  const posts = getPosts(state);
  if (users && posts) {
    return mapUsersPosts(users.data, posts.data);
  } else {
    return [];
  }
};

const getPostDetails = state => {
  return state.user.postDetails;
};

export const UsersSelector = {
  getPosts,
  getPostsLoading,
  getPostsError,
  getUsers,
  getUsersLoading,
  getUsersError,
  isPageLoading,
  getUserPosts,
  getPostDetails
};
