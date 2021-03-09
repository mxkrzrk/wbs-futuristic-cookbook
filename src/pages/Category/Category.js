import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticles } from '../../api';
import BlogCard from '../../components/BlogCard/BlogCard';

const Category = () => {
  const params = useParams();
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <>
      {articles &&
        articles
          .filter((article) => article.category === params.category)
          .map((article) => <BlogCard key={article.articleid} {...article} />)}
    </>
  );
};

export default Category;
