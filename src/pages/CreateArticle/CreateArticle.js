import React, { useEffect, useState } from 'react';
import './CreateArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateArticle = () => {
  const [newArticle, setNewArticle] = useState();

  const handleInputDescription = (event, editor) => {
    const data = editor.getData();
    setNewArticle((prevState) => ({ ...prevState, description: data }));
  };

  const handleInputTitle = (e) => {
    setNewArticle((prevState) => ({ ...prevState, title: e.target.value }));
  };

  return (
    <Card className="create-article-card">
      <Form>
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
              onChange={handleInputTitle}
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
        </Card.Body>
        <Card.Footer className="py-4">
          <Button className="create-article-button">
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
