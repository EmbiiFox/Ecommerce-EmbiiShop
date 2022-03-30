import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";
const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  // useEffect(() => {
  //   // console.log("hello");
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get("/api/products");
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;
