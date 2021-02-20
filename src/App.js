import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { client } from './contentful';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './components/Main/Main';
import BlogCard from './components/BlogCard/BlogCard';
import Header from './components/Header/Header';
import MobNav from './components/MobNav/MobNav';
import Categories from './pages/Categories/Categories';
import Category from './pages/Category/Category';
import Article from './pages/Article/Article';

const App = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    client
      .getEntries()
      .then((entries) => setArticles(entries.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col>
          <Main>
            <Switch>
              <Route path="/" exact>
                {articles &&
                  articles.map((article) => (
                    <BlogCard key={article.sys.id} {...article} />
                  ))}
              </Route>
              <Route path="/article/:id">
                <Article />
              </Route>
              <Route path="/categories" exact>
                <Categories articles={articles} />
              </Route>
              <Route path="/categories/:category">
                <Category articles={articles} />
              </Route>
              <Redirect to="/" />
            </Switch>
          </Main>
        </Col>
      </Row>
      <footer>
        <MobNav />
      </footer>
    </Container>
  );
};

export default App;
