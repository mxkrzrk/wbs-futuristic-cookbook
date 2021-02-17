import React from 'react';
import './BlogCard.css';
import Card from 'react-bootstrap/Card';

const BlogCard = ({ title, image }) => {
  return (
    <Card className="my-4 rounded card-blog">
      <Card.Header
        style={{ backgroundImage: `url(${image.fields.file.url})` }}
        className="card-image"
      />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
      </Card.Body>
      <Card.Footer className="card-blog-footer">
        <Card.Link href="#">Go to the recipe...</Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default BlogCard;
