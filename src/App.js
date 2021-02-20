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
import Spinner from 'react-bootstrap/Spinner';
import ScrollTopPage from './components/ScrollTopPage/ScrollTopPage';

const App = () => {
  const [articles, setArticles] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    client
      .getEntries()
      .then((entries) => {
        setArticles(entries.items);
        setLoader(false);
      })
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
                <ScrollTopPage>
                  {loader && (
                    <div className="d-flex justify-content-center align-items-center loader">
                      <Spinner animation="grow" />
                    </div>
                  )}
                  {articles &&
                    articles.map((article) => (
                      <BlogCard key={article.sys.id} {...article} />
                    ))}
                </ScrollTopPage>
              </Route>
              <Route path="/article/:id">
                <ScrollTopPage>
                  <Article />
                </ScrollTopPage>
              </Route>
              <Route path="/categories" exact>
                <ScrollTopPage>
                  <Categories articles={articles} />
                </ScrollTopPage>
              </Route>
              <Route path="/categories/:category">
                <ScrollTopPage>
                  <Category articles={articles} />
                </ScrollTopPage>
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
