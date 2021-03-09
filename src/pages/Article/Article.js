import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import './Article.css';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

const Article = () => {
  const params = useParams();
  const [article, setArticle] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchArticle(params.id);
  }, []);

  const fetchArticle = async (articleid) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_API_URL + `/articles/${articleid}`
      );
      const data = await res.json();
      if (res.ok) {
        setArticle(data.data[0]);
        setLoader(false);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

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
            style={{
              backgroundImage: `url(${process.env.REACT_APP_STATIC_URL}/${article.imagename})`,
            }}
            className="article-card-header"
          ></Card.Header>
          <Card.Img variant="top" />
          <Card.Body className="p-4 article-card-body">
            <Card.Title as="h2" className="py-4 text-center article-card-title">
              {article.title}
            </Card.Title>
            <div className="py-3 article-card-description">{parse(article.description)}</div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Article;
