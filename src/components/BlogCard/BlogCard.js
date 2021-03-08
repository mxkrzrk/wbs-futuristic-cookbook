import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

const BlogCard = ({ title, articleid, imagename }) => {
  return (
    <Card className="my-4 rounded card-blog">
      <Card.Header
        style={{
          backgroundImage: `url(${process.env.REACT_APP_STATIC_URL}/${imagename})`,
        }}
        className="card-image"
      />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
      </Card.Body>
      <Card.Footer className="card-blog-footer d-flex justify-content-start align-items-center">
        <FontAwesomeIcon icon={faRocket} className="card-blog-footer-icon" />
        <Link to={`/article/${articleid}`}>Go to the recipe</Link>
      </Card.Footer>
    </Card>
  );
};

export default BlogCard;
