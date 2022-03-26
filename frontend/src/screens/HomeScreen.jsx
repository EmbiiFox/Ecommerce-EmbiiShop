import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // console.log("hello");
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{product.name}</h3> */}
            <Product
              product={product}
              name={product.name}
              id={product._id}
              image={product.image}
              description={product.description}
              brand={product.brand}
              category={product.category}
              price={product.price}
              countInStock={product.countInStock}
              rating={product.rating}
              numReviews={product.numReviews}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
