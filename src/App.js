import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import MobNav from './components/MobNav/MobNav';
import Categories from './pages/Categories/Categories';
import Category from './pages/Category/Category';
import Article from './pages/Article/Article';
import ScrollTopPage from './components/ScrollTopPage/ScrollTopPage';
import Footer from './components/Footer/Footer';
import CreateArticle from './pages/CreateArticle/CreateArticle';
import CreateButton from './components/CreateButton/CreateButton';
import Articles from './pages/Articles/Articles';

const App = () => {
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
                  <Articles />
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
                  <Categories />
                </ScrollTopPage>
              </Route>
              <Route path="/categories/:category">
                <ScrollTopPage>
                  <Category />
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
