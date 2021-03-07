import React from 'react';
import { Link } from 'react-router-dom';
import './CreateButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const CreateButton = () => {
  return (
    <Link to="/article">
      <Button className="create-button">
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </Link>
  );
};

export default CreateButton;
