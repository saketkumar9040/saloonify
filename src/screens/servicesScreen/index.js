import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import styles from "./style.js";

const services = [
  {
    id:1,
    type: "Hair Cut",
    time: "20 min",
    slot: "available",
    description: "best hair in the world",
    price: "Rs 150"
  },
  {
    id:2,
    type: "Shaving",
    time: "12 min",
    slot: "available",
    description: "This hair cut will bring your confidence back",
    price: "Rs 100"
  },
  {
    id:3,
    type: "Hair coloring",
    time: "50 min",
    slot: "booked",
    description: "The color of your passion",
    price: "Rs 350"
  },
  {
    id:4,
    type: "Hair Cut",
    time: "30 min",
    slot: "available",
    description: "Style with attitude",
    price: "Rs 200"
  },
  {
    id:5,
    type: "Hair Cut",
    time: "40 min",
    slot: "available",
    description: "This hair cut will bring your confidence back",
    price: "Rs 160"
  },
  {
    id:6,
    type: "Hair Cut",
    time: "35 min",
    slot: "available",
    description: "This hair cut will bring your confidence back",
    price: "Rs 130"
  },
];

const ServicesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <AntDesign name="closecircle" size={24} color="black" onPress={() => setModalVisible(false)} />
      </Modal>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, }}
        data={services}
        renderItem={({ item, index }) => {
          return (
            <>
              <View style={{ flex: 1, borderWidth: 1, borderColor: "#4c4c4c", margin: 10, borderRadius: 10, padding: 15, }}>
                <Text style={{ fontSize: 23, fontWeight: "700", marginTop: 10, }}>{item.type}</Text>
                <Text style={{ fontSize: 13, fontWeight: "700", marginTop: 10, alignSelf: "center" }}>{item.description}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                  <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "green" }}>{item.price}</Text>
                  <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "#D4AC0D" }}>{item.time}</Text>
                  {item.slot === "available" ? (

                    <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "green" }}>{item.slot}</Text>
                  ) : (
                    <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "red" }}>{item.slot}</Text>
                  )}
                </View>
              </View>
              {
                item.slot === "available" && (
                  <TouchableOpacity style={{ alignSelf: "center", backgroundColor: "#0096ff", paddingHorizontal: 30, padding: 2, elevation: 10, marginVertical: 10, }}>
                    <Text style={{ fontSize: 15, fontWeight: "700", color: "#ffffff" }}>Book</Text>
                  </TouchableOpacity>
                )
              }
            </>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default ServicesScreen;