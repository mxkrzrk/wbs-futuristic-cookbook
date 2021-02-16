import React, { useState } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './components/Main/Main';
import BlogCard from './components/BlogCard/BlogCard';
import Header from './components/Header/Header';
import MobNav from './components/MobNav/MobNav';

const query = `{
  articleCollection {
    items {
      title
      image {
        url
      }
      description {
        json
      }
    }
  }
}`;

const App = () => {
  const [articles, setArticles] = useState();

  useState(() => {
    fetch(`https://graphql.contentful.com/content/v1/spaces/4mgx4jgworh2/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer tsqaIdeBMRvcsfvYMEdH_h2AsxVlrT8MrhAeuCNsaEw',
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setArticles(data.data.articleCollection.items);
      })
      .catch((err) => console.log(err));
  }, []);

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
