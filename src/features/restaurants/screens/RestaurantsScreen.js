import React from 'react'
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from 'react-native';
import {Searchbar} from 'react-native-paper';
import RestaurantInfoCardComponent from '../components/RestaurantInfoCardComponent'
const RestaurantsScreen = () => {
  return (
    
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar/>
        </View>
        <View style={styles.list}>
          <RestaurantInfoCardComponent/>
        </View>
      </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1, 
    marginTop: StatusBar.currentHeight
  },
  search:{
      padding: 16,
  }
});

  

export default RestaurantsScreen