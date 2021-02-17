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
      sys {
        id
      }
      title
      categories
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
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify({ query }),
      }
    )
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
    <Row>
      <Header />
    </Row>
      <Row>
        <Col>
          <Main>
            {articles && articles.map((article) => <BlogCard key={article.sys.id} {...article} />)}
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
