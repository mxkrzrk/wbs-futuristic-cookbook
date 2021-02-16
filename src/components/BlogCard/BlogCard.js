import React from 'react';
import './BlogCard.css';
import Card from 'react-bootstrap/Card';
import image from '../../Images/cookbook-2.jpg';

const BlogCard = () => {
  return (
    <Card className="my-4 shadow rounded card-blog">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-blog-footer">
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default BlogCard;
