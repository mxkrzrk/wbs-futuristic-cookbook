import React from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './components/Main/Main';
import BlogCard from './components/BlogCard/BlogCard';
import Header from './components/Header/Header';
import MobNav from './components/MobNav/MobNav';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col>
          <Main>
            <BlogCard />
            <BlogCard />
          </Main>
        </Col>
      </Row>
      <footer>
        <MobNav>
          {/* <Switch>
              <Route 
                path="/articles"
                render={(props) => <Articles articles={articles} {props} />}
              />
              <Route 
                path="/categories"
                render={(props) => <Categories categories={categories} {props} />}
              />
            </Switch> */}
        </MobNav>
      </footer>
    </Container>
  );
};

export default App;
