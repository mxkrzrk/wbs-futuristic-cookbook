import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './CategoryCard.css';

const CategoryCard = ({ image, title, total }) => {
  return (
    <Card className="category-card">
      <Card.Header
        style={{ backgroundImage: `url(${image})` }}
        className="category-image"
      />
      <Card.Body className="d-flex justify-content-around align-items-center category-card-body">
        <Card.Title className="mb-0 category-card-title">{title}</Card.Title>
        <Card.Text>
          <Button className="category-card-button">
            Recipes
            <Badge variant="light" className="px-3 ml-2">
              {total}
            </Badge>
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
