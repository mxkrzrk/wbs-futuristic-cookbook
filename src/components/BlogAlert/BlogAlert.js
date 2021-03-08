import React from 'react';
import './BlogAlert.css';
import Alert from 'react-bootstrap/Alert';

const BlogAlert = ({ variant, message, onCloseAlert }) => {
  return (
    <Alert variant={variant} onClose={onCloseAlert} dismissible>
      <Alert.Heading className="blog-alert">{message}</Alert.Heading>
    </Alert>
  );
};

export default BlogAlert;
