import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { UsersSelector } from '../modules/users/selectors';
import { Container } from 'react-bootstrap';
import { PostDetails } from '../components/molecules/postDetails';

const HomePage = props => {
  const { postDetails } = props;

  const goToHome = () => {
    props.history.push('/');
  };

  if (!postDetails) {
    goToHome();
    return null;
  }

  return (
    <Container className={'page-body'}>
      <PostDetails data={postDetails} goToHome={goToHome} />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    postDetails: UsersSelector.getPostDetails(state),
  };
};

export default connect(mapStateToProps)(HomePage);
