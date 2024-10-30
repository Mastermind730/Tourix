import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Href, useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("./../assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 500,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>AI Travel Planner</Text>

        <Text style={styles.description}>
          Plan your perfect getaway with our AI-powered travel planner, offering
          personalized itineraries and destination recommendations. Simplify
          your travel experience with real-time updates and curated suggestions
          tailored to your preferences.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/auth/sign-in" as Href)} // Ensure the path is a string
          // onPress={()=>router.push("/")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
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
    padding: 20, // Added padding for better spacing
  },
  title: {
    fontSize: 25,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontFamily: "outfit",
    fontSize: 17,
    marginTop: 15,
    textAlign: "center",
    color: Colors.GRAY,
    // padding: 10,
  },
  button: {
    padding: 14,
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "20%",
    alignSelf: "center", // Centering the button horizontally
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: "center",
    fontFamily: "outfit",
    fontSize: 18,
  },
});
