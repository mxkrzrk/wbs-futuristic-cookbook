import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './components/Main/Main';
import BlogCard from './components/BlogCard/BlogCard';

const App = () => {
  return (
    <Container fluid>
      <div>header</div>
      <Row>
        <Col>
          <Main>
            <BlogCard />
            <BlogCard />
          </Main>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
