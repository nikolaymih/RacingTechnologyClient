import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
// import Product from "../../../interfaces/category.interface";
import {Link} from "react-router-dom";

const ShopSingleProduct = ({category}: { category: any }) => {
    return (
        <Card>
            <CardActionArea
                component={Link} to={`/shop/${category._id}`}
                sx={{
                    bgcolor: 'white',
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                }}
            >
                <CardMedia
                    component="img"
                    width="600"
                    height="400"
                    image={category.image}
                    alt="Product"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {category.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ShopSingleProduct;