import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import mainImage from '../../Images/cookbook-1.jpg';
import dessertsImage from '../../Images/cookbook-2.jpg';
import drinksImage from '../../Images/cookbook-3.png';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Categories = ({ articles }) => {
  const history = useHistory();
  const [categories, setCategories] = useState([
    { title: 'Main', image: mainImage, total: 0 },
    { title: 'Desserts', image: dessertsImage, total: 0 },
    { title: 'Drinks', image: drinksImage, total: 0 },
  ]);

  useEffect(() => {
    if (articles) {
      const categoriesUpdate = categories.map((category) => {
        let categoryTotalArticles = articles.filter(
          (article) =>
            article.categories.toLowerCase() === category.title.toLowerCase()
        ).length;
        return {
          ...category,
          total: categoryTotalArticles,
        };
      });
      setCategories(categoriesUpdate);
    } else {
      // If articles is empty come back to home
      history.push('/');
    }
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100">
      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  );
};

export default Categories;
