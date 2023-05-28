import React from "react";
import{View,Text,Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard=({productInfo})=>{

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:productInfo.imgURL}}  />
            <Text style={styles.title}>{productInfo.title}</Text>
            <Text style={styles.price}>{productInfo.price}</Text>
            {productInfo.inStock === false  && <Text style={styles.inStock}>STOKTA YOK</Text>}
        </View>
    )
}


export default ProductCard;