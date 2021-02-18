import React from 'react';
import mainImage from '../../Images/cookbook-1.jpg';
import drinksImage from '../../Images/cookbook-2.jpg';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const categories = [
  { title: 'Main', image: mainImage },
  { title: 'Desserts', image: drinksImage },
  { title: 'Drink', image: mainImage },
];

const Categories = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          image={category.image}
          category={category.title}
        />
      ))}
    </div>
  );
};

export default Categories;
