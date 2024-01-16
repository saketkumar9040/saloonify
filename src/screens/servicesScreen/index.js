import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import styles from "./style.js";

const services = [
  {
    id: 1,
    type: "Hair Cut",
    time: "20 min",
    status: "available",
    description: "best hair in the world",
    price: "Rs 150",
    timeSlots: [
      {
        timing: "9:00 Am",
        booked: false
      },
      {
        timing: "10:00 Am",
        booked: false
      },
      {
        timing: "11:00 Am",
        booked: false
      },
      {
        timing: "12:00 Pm",
        booked: false
      },
    ]
  },
  {
    id: 2,
    type: "Shaving",
    time: "12 min",
    status: "available",
    description: "This hair cut will bring your confidence back",
    price: "Rs 100",
    timeSlots: [
      {
        timing: "9:00 Am",
        booked: false
      },
      {
        timing: "10:00 Am",
        booked: false
      },
      {
        timing: "11:00 Am",
        booked: false
      },
      {
        timing: "12:00 Pm",
        booked: false
      },
    ]
  },
  {
    id: 3,
    type: "Hair coloring",
    time: "50 min",
    status: "booked",
    description: "The color of your passion",
    price: "Rs 350",
    timeSlots: [
      {
        timing: "9:00 Am",
        booked: false
      },
      {
        timing: "10:00 Am",
        booked: false
      },
      {
        timing: "11:00 Am",
        booked: false
      },
      {
        timing: "12:00 Pm",
        booked: false
      },
    ]
  },
  {
    id: 4,
    type: "Hair Cut",
    time: "30 min",
    status: "available",
    description: "Style with attitude",
    price: "Rs 200",
    timeSlots: [
      {
        timing: "9:00 Am",
        booked: false
      },
      {
        timing: "10:00 Am",
        booked: false
      },
      {
        timing: "11:00 Am",
        booked: false
      },
      {
        timing: "12:00 Pm",
        booked: false
      },
    ]
  },
  {
    id: 5,
    type: "Hair Cut",
    time: "40 min",
    status: "available",
    description: "This hair cut will bring your confidence back",
    price: "Rs 160",
    timeSlots: [
      {
        timing: "9:00 Am",
        booked: false
      },
      {
        timing: "10:00 Am",
        booked: false
      },
      {
        timing: "11:00 Am",
        booked: false
      },
      {
        timing: "12:00 Pm",
        booked: false
      },
    ]
  },
  {
    id: 6,
    type: "Hair Cut",
    time: "35 min",
    status: "available",
    description: "This hair cut will bring your confidence back",
    price: "Rs 130",
    timeSlots: [
      {
        timing: "9:00 Am",
        booked: false
      },
      {
        timing: "10:00 Am",
        booked: false
      },
      {
        timing: "11:00 Am",
        booked: false
      },
      {
        timing: "12:00 Pm",
        booked: false
      },
    ]
  },
];

const ServicesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedTimeSlots, setSelectedTimeSlots] = useState("");

  const bookingHandler = async (id, timeSlots) => {
    try {
      console.log(timeSlots)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <AntDesign name="closecircle" size={30} color="red" style={{ alignSelf: "center", marginVertical: 20, }} onPress={() => setModalVisible(false)} />
        <Text style={{fontSize:17,fontWeight:"800",margin:10,}}>Name</Text>
        <TextInput
          style={{borderWidth:1,borderColor:"#4c4c4c",marginHorizontal:10,paddingHorizontal:15,padding:5,}}
          value={name}
          placeholder='Enter your name'
          onChangeText={(e)=>{
            setName(e)
          }}
        />
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
                  {item.status === "available" ? (

                    <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "green" }}>{item.status}</Text>
                  ) : (
                    <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "red" }}>{item.status}</Text>
                  )}
                </View>
              </View>
              {
                item.status === "available" && (
                  <TouchableOpacity style={{ alignSelf: "center", backgroundColor: "#0096ff", paddingHorizontal: 30, padding: 2, elevation: 10, marginVertical: 10, }}
                    onPress={() => {
                      setModalVisible(true)
                      bookingHandler(item.id, item.timeSlots)
                    }}
                  >
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