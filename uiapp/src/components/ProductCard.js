import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Card sx={{ maxWidth: 300, margin: 2 }}>
    <CardMedia component="img" height="200" image={product.image} alt={product.title} />
    <CardContent>
      <Typography variant="h6">{product.title}</Typography>
      <Typography variant="body2">${product.price}</Typography>
      <Button component={Link} to={`/products/${product.id}`} variant="contained" sx={{ mt: 1 }}>
        View Details
      </Button>
    </CardContent>
  </Card>
);

export default ProductCard;
