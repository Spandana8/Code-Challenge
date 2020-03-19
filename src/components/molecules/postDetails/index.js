import React from 'react';
import { Card } from 'react-bootstrap';
import { ButtonComponent } from '../../atoms/button';
export const PostDetails = props => {
  const { data, goToHome } = props;
  return (
    <>
      <ButtonComponent onClick={goToHome} />
      <Card>
        <Card.Header>{data.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{data.body}</p>
            <footer className="blockquote-footer">
              Posted by <cite title="Source Title">{data.name}, </cite>{' '}
              {data.company.name} ({data.location})
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};
