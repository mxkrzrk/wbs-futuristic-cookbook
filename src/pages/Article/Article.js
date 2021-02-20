import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './Article.css';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

const Article = () => {
  const params = useParams();
  const [article, setArticle] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    client
      .getEntry(params.id)
      .then((entry) => {
        setArticle(entry.fields);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loader && (
        <div className="d-flex justify-content-center align-items-center loader">
          <Spinner animation="grow" />
        </div>
      )}
      {article && (
        <Card className="article-card">
          <Card.Header
            style={{ backgroundImage: `url(${article.image.fields.file.url})` }}
            className="article-card-header"
          ></Card.Header>
          <Card.Img variant="top" />
          <Card.Body className="p-4">
            <Card.Title as="h2" className="py-4 text-center">
              {article.title}
            </Card.Title>
            <div className="py-3">
              {documentToReactComponents(article.description)}
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Article;
