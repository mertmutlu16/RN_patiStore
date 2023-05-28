import React from "react";
import {View,Text,TextInput,StyleSheet, SafeAreaView, FlatList} from 'react-native';
import store_data from './store_data.json';
import ProductCard from "./components/ProductCards/ProductCard";

const App=()=>{
  return(
    <SafeAreaView style={styles.container}>
      <View>
       
      <Text style={styles.title}>PATIKASTORE</Text>
      {/*HATA VAR!!!
        EN ALTTAKİ ÜRÜN BİLGİLERİ EKRAN TAM GÖZÜKMÜYOR!        
      */}

      <FlatList 
        ListHeaderComponent={ ()=>
          <TextInput
              style={styles.inputBox}
              placeholder="ARA..." />
        }
          numColumns={2}
          data={store_data}
          renderItem={({item})=> <ProductCard productInfo={item} />}
          keyExtractor={item => item.id}

        
        />  
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1.5,
  },
  title:{
    fontWeight:'bold',
    color:'#800080',
    fontSize:30,
    margin:5,
  },
  inputBox: {
    borderRadius:5,
    backgroundColor:'#ECEFF1',
    margin: 10,
    padding:10,
  },

})

export default App;