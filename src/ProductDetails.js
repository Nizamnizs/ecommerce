import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from './reduxcart/cartSlice';
import { useDispatch } from 'react-redux';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container className="mt-3 mb-5 shadow">
      <Row>
        <Col md={6}>
          <Image style={{height:'500px'}} src={product.images}  />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <div className="details">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>Price: ${product.price}</strong></p>
          </div>
          <Link to={'/cart'} className="btn btn-primary"  >
                                Add to Cart
                            </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
