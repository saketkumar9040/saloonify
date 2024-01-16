import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from "./style.js";

const services = [
  {
    type: "Hair Cut",
    time: "20 min",
    slot: "available",
    description: "best hair in the world",
    price: "Rs 150"
  },
  {
    type: "Shaving",
    time: "12 min",
    slot: "available",
    description: "This hair cut will bring your confidence back",
    price: "Rs 100"
  },
  {
    type: "Hair coloring",
    time: "50 min",
    slot: "booked",
    description: "The color of your passion",
    price: "Rs 350"
  },
  {
    type: "Hair Cut",
    time: "30 min",
    slot: "available",
    description: "Style with attitude",
    price: "Rs 200"
  },
  {
    type: "Hair Cut",
    time: "40 min",
    slot: "available",
    description: "This hair cut will bring your confidence back",
    price: "Rs 160"
  },
  {
    type: "Hair Cut",
    time: "35 min",
    slot: "available",
    description: "This hair cut will bring your confidence back",
    price: "Rs 130"
  },
];

const ServicesScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={services}
        renderItem={({ item, index }) => {
          return (
            <>
              <View style={{ flex: 1, borderWidth: 1, borderColor: "#4c4c4c", margin: 10, borderRadius: 10, padding: 15, }}>
                <Text style={{ fontSize: 23, fontWeight: "700", marginTop: 10, }}>{item.type}</Text>
                <Text style={{ fontSize: 13, fontWeight: "700", marginTop: 10, alignSelf: "center" }}>{item.description}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                  <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "green" }}>{item.price}</Text>
                  {item.slot === "available" ? (

                    <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "green" }}>{item.slot}</Text>
                  ) : (
                    <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "red" }}>{item.slot}</Text>
                  )}
                </View>
              </View>
              <TouchableOpacity style={{alignSelf:"center",backgroundColor:"#0096ff"}}>
                <Text>Book</Text>
              </TouchableOpacity>
            </>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default ServicesScreen;