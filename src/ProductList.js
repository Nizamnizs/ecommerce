import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
  
<div className='mt-5'>
        <Container className='mt-5 mb-5'>
        <h2 className="mt-0 mb-4 md-3 text-center">All Products</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              <Card className='shadow' >
                
                <CardBody style={{width: "18rem",height:'500px',}}>
                <Link to={`/products/${product.id}`} style={{textDecoration:"none"}}>
                <Card.Img style={{ width: '100%', height: '300px' }} variant="top" src={product.images} />
                  <CardTitle className='mt-3'>{product.title}</CardTitle>
                  <CardText className='mt-3'>Price: ${product.price}</CardText>
                  <Button  className="md-3 btn-primary">  Add to Cart</Button>
                  
                  </Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
</div>
  );
}

export default ProductList;
