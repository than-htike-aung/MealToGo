import React from 'react'
import styled from 'styled-components/native'

import {Card} from "react-native-paper";
import { StyleSheet,  } from 'react-native';

const Title = styled.Text`
  padding:16px;
  color:blue;
`;


const RestaurantInfoCardComponent = ({restaurant = {}}) => {

  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5lSD8Iv76sTXBrhx3llkH_wZwvzsqblo9eUlQcYt&s"
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4, 
    isClosedTemporarily,
  } = restaurant

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{uri:photos[0]}}/>
      {/* <Text style = {styles.title}>{name}</Text> */}
      <Title>{name}</Title>
    </Card>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: "white",
  
  },
  cover:{
    padding:20,
     backgroundColor:"white"
  },
  
})

export default RestaurantInfoCardComponent