import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function ProductListByCategory() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, [categoryId]);

    return (
        <Container>
            <h2 className="mt-3 mb-4 text-center">Products in Category</h2>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {Array.isArray(products) && products.map(product => (
                    <Col key={product.id}>
                        <Card className='shadow' style={{width: "18rem",height:'500px'}}>
                            <Card.Img style={{height:"300px"}} variant="top" src={product.images} />
                            <Card.Body style={{height:"10rem"}}>
                                <Card.Title>{product.title}</Card.Title>
                                <Link to={'/cart'} className="btn btn-primary"  >
                                Add to Cart
                            </Link>
                            </Card.Body>
                            {/* {`/products/${product.id}`} */}
                            
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductListByCategory;
