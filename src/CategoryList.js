import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  


  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <Container>
      <h2 className="mt-3 mb-4 text-center align-items">Categories</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {categories.map(category => (
          <Col key={category.id}>
            <Link to={`/categories/${category.id}/products`} className="text-decoration-none">
              <Card className='shadow'>
                <Card.Img variant="top" style={{height:"300px"}} src={category.image} alt={category.name} />
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryList;
