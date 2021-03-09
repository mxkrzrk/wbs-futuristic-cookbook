import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../../api';
import mainImage from '../../Images/cookbook-1.jpg';
import dessertsImage from '../../Images/cookbook-2.jpg';
import drinksImage from '../../Images/cookbook-3.png';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Categories = () => {
  const [categories, setCategories] = useState([
    { title: 'Main', image: mainImage, total: 0 },
    { title: 'Desserts', image: dessertsImage, total: 0 },
    { title: 'Drinks', image: drinksImage, total: 0 },
  ]);

  useEffect(() => {
    fetchArticles().then((data) => {
      const categoriesUpdate = categories.map((category) => {
        let categoryTotalArticles = data.filter(
          (article) =>
            article.category.toLowerCase() === category.title.toLowerCase()
        ).length;
        return {
          ...category,
          total: categoryTotalArticles,
        };
      });
      setCategories(categoriesUpdate);
    });
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
