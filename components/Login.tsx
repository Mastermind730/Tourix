import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function Login() {
  return (
    <View>
      <Image
        source={require("./../assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 400,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Plan your perfect getaway with our AI-powered travel planner, offering
          personalized itineraries and destination recommendations. Simplify
          your travel experience with real-time updates and curated suggestions
          tailored to your preferences.
        </Text>

        <View style={styles.button}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            Sign in with Google
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY, // Set background color for visibility
    borderRadius: 99,
    marginTop: '20%',
    alignItems: 'center', // Center text horizontally
  },
});
