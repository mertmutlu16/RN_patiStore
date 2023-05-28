import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ECEFF1',
        margin:10,
        borderRadius:10,
        
    },
    image:{
        height:Dimensions.get('window').height/4,
        resizeMode:'contain',
        margin:10,
        borderRadius:10,

        
    },
    title:{
        fontSize:21,
        margin:5,
        fontWeight:'bold',
        color:'black',
    },
    price:{
        margin:5,
       fontSize:16,
    },
    inStock:{
        margin:5,
        marginTop:0,
        color:'red',
    },
})