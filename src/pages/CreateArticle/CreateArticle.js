import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BlogAlert from '../../components/BlogAlert/BlogAlert';

const CreateArticle = () => {
  const [newArticle, setNewArticle] = useState({
    title: '',
    description: '',
    category: '',
  });
  const [validated, setValidated] = useState({
    form: false,
    description: false,
  });
  const [alert, setAlert] = useState({
    alertShow: false,
    message: '',
    variant: '',
  });

  useEffect(() => {
    // Add ID
    setNewArticle((prevState) => ({ ...prevState, articleID: uuidv4() }));
  }, []);

  const handleInputDescription = (event, editor) => {
    const data = editor.getData();
    setValidated((prevState) => ({ ...prevState, description: false }));
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
    const form = e.target;
    if (form.checkValidity() && newArticle.description) {
      createArticle(newArticle);
    } else {
      if (newArticle.description) {
        setValidated({ form: true, description: false });
      } else {
        setValidated({ form: true, description: true });
      }
    }
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
        setAlert({
          alertShow: true,
          message: data.message,
          variant: 'success',
        });
      } else {
        if (Array.isArray(data.error)) {
          const errorMessage = data.error
            .map((e) => `${e.param}: ${e.msg}`)
            .toString(',');
          throw new Error(errorMessage);
        } else {
          throw new Error(data.error);
        }
      }
    } catch (err) {
      setAlert({ alertShow: true, message: err.message, variant: 'danger' });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ alertShow: false, message: '', variant: '' });
  };

  return (
    <>
      {alert.alertShow ? (
        <BlogAlert {...alert} onCloseAlert={handleCloseAlert} />
      ) : (
        <Card className="create-article-card">
          <Form
            onSubmit={handleFormSubmit}
            noValidate
            validated={validated.form}
          >
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
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please insert title!
                </Form.Control.Feedback>
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
                {validated.description && (
                  <div className="text-danger small">
                    Please insert description!
                  </div>
                )}
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
                  required
                >
                  <option value="">Select category</option>
                  <option value="main">Main</option>
                  <option value="drinks">Drinks</option>
                  <option value="desserts">Desserts</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please choose a category!
                </Form.Control.Feedback>
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
      )}
    </>
  );
};

export default CreateArticle;
