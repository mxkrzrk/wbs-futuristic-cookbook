import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/BlogCard';

const Category = ({ articles }) => {
  const params = useParams();
  const history = useHistory();
  return (
    <>
      {articles
        ? articles
            .filter((article) => article.fields.categories === params.category)
            .map((article) => <BlogCard key={article.sys.id} {...article} />)
        : history.push('/')}
    </>
  );
};

export default Category;
