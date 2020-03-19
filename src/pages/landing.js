import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserActions } from '../modules/users/actions';
import { UsersSelector } from '../modules/users/selectors';
import { Container } from 'react-bootstrap';
import UserPosts from '../components/molecules/userPosts';

/**
 * Generates Home page
 *
 * @param {props}
 * @returns {home page view}
 */

const HomePage = props => {
  const { getUsers, getPosts, userPosts, setPostDetails } = props;

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  const postDetails = data => {
    setPostDetails(data);
  };

  return (
    <Container className={'page-body'}>
      <UserPosts userPosts={userPosts} setPostDetails={postDetails} />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    userPosts: UsersSelector.getUserPosts(state)
  };
};

const mapDispatchToProps = dispatch => {
  const { getUsers, getPosts, setPostDetails } = UserActions;
  return bindActionCreators(
    {
      getUsers,
      getPosts,
      setPostDetails
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
