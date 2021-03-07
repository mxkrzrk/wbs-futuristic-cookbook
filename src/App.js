import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import Footer from './components/Footer/Footer';
import CreateArticle from './pages/CreateArticle/CreateArticle';
import CreateButton from './components/CreateButton/CreateButton';

const App = () => {
  const [articles, setArticles] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_API_URL + '/articles');
      const data = await res.json();
      if (res.ok) {
        setArticles(data.data);
        setLoader(false);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

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
                      <BlogCard key={article.articleid} {...article} />
                    ))}
                  <CreateButton />
                </ScrollTopPage>
              </Route>
              <Route path="/article/:id">
                <ScrollTopPage>
                  <Article />
                </ScrollTopPage>
              </Route>
              <Route path="/article" exact>
                <ScrollTopPage>
                  <CreateArticle />
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
              <Redirect to="/" exact />
            </Switch>
            <Footer />
          </Main>
        </Col>
      </Row>
      <MobNav />
    </Container>
  );
};

export default App;
