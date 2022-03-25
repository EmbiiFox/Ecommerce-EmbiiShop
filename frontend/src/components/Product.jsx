import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const Product = (props) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${props.id}`}>
        <Card.Img variant="top" src={props.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${props.id}`}>
          <Card.Title as="div">
            <strong>{props.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={props.rating} text={`${props.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">{props.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
