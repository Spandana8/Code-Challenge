import React from 'react';
import { Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './styles.scss';

const UserPosts = props => {
  const { userPosts, setPostDetails } = props;

  const viewPostDetails = post => {
    setPostDetails(post);
    props.history.push(`/postDetails/${post.id}`);
  };

  return (
    <Table responsive striped bordered hover className={'posts-table'}>
      <thead>
        <tr>
          <th colSpan={3}>Posts</th>
        </tr>
        <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {userPosts.map((post, idx) => (
          <tr key={idx} onClick={() => viewPostDetails(post)}>
            <td>{post.id}</td>
            <td>{post.userId}</td>
            <td>{post.title}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default withRouter(UserPosts);
