import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './components/Main/Main';
import BlogCard from './components/BlogCard/BlogCard';
import Header from './components/Header/Header';
import MobNav from './components/MobNav/MobNav';

const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_API_KEY,
});

const App = () => {
  const [articles, setArticles] = useState();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth < 1024);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

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
                    <BlogCard key={article.sys.id} {...article.fields} />
                  ))}
              </Route>
              <Route path="/categories">
                <div>categories page</div>
              </Route>
              <Redirect to="/" />
            </Switch>
          </Main>
        </Col>
      </Row>
      <footer>{isDesktop ? <MobNav /> : ''}</footer>
    </Container>
  );
};

export default App;
