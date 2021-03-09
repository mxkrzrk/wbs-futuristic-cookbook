import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../../api';
import BlogCard from '../../components/BlogCard/BlogCard';
import Spinner from 'react-bootstrap/Spinner';

const Articles = () => {
  const [articles, setArticles] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
      setLoader(false);
    });
  }, []);

  return (
    <>
      {loader && (
        <div className="d-flex justify-content-center align-items-center loader">
          <Spinner animation="grow" />
        </div>
      )}
      {articles &&
        articles.map((article) => (
          <BlogCard key={article.articleid} {...article} />
        ))}
    </>
  );
};

export default Articles;
