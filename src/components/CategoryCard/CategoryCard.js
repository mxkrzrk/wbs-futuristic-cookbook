import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CategoryCard = ({ image, title, total }) => {
  return (
    <Card className="category-card">
      <Card.Header
        style={{ backgroundImage: `url(${image})` }}
        className="category-image"
      />
      <Card.Body className="d-flex justify-content-between justify-content-md-around align-items-center category-card-body">
        <Card.Title className="mb-0 category-card-title">{title}</Card.Title>
        <Card.Text>
          <Link to={`/categories/${title.toLowerCase()}`}>
            <Button className="category-card-button">
              <FontAwesomeIcon
                icon={faMeteor}
                className="category-card-button-icon"
              />
              Recipes
              <Badge
                variant="light"
                className="px-3 category-card-button-badge"
              >
                {total}
              </Badge>
            </Button>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
