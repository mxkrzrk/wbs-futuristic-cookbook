import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateArticle = () => {
  const [newArticle, setNewArticle] = useState({
    title: '',
    description: '',
    category: '',
  });
  const [alert, setNewAlert] = useState({ show: false, message: '' });

  useState(() => {
    // Add ID
    setNewArticle((prevState) => ({ ...prevState, articleID: uuidv4() }));
  }, []);

  const handleInputDescription = (event, editor) => {
    const data = editor.getData();
    setNewArticle((prevState) => ({ ...prevState, description: data }));
  };

  const handleInput = (e) => {
    setNewArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check if state is not empty
    for (let prop in newArticle) {
      if (!newArticle[prop]) return;
    }
    createArticle(newArticle);
  };

  const createArticle = async (bodyData) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_API_URL + '/articles/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyData),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setNewArticle({ show: true, message: data.message });
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Card className="create-article-card">
      <Form onSubmit={handleFormSubmit}>
        <Card.Header as="h2" className="create-article-header">
          Create Article
        </Card.Header>
        <Card.Body className="p-4 create-article-card-body">
          <Form.Group controlId="title">
            <Form.Label className="create-article-input-label">
              Article title
            </Form.Label>
            <Form.Control
              type="text"
              className="create-article-input"
              onChange={handleInput}
              name="title"
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label className="create-article-input-label">
              Article description
            </Form.Label>
            <CKEditor
              editor={ClassicEditor}
              onChange={handleInputDescription}
              config={{
                toolbar: [
                  'heading',
                  '|',
                  'bold',
                  'italic',
                  'link',
                  'bulletedList',
                  'numberedList',
                  'blockQuote',
                ],
              }}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label className="create-article-input-label">
              Categories
            </Form.Label>
            <Form.Control
              as="select"
              onChange={handleInput}
              name="category"
              className="create-article-input"
            >
              <option value="">Select category</option>
              <option value="main">Main</option>
              <option value="drinks">Drinks</option>
              <option value="desserts">Desserts</option>
            </Form.Control>
          </Form.Group>
        </Card.Body>
        <Card.Footer className="py-4">
          <Button className="create-article-button" type="submit">
            <FontAwesomeIcon
              icon={faMeteor}
              className="create-article-button-icon"
            />
            Save
          </Button>
        </Card.Footer>
      </Form>
    </Card>
  );
};

export default CreateArticle;
