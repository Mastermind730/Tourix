import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let&apos;s Sign You In</Text>
      <Text style={styles.subtitle}>Welcome Back</Text>
      <Text style={styles.subtitle}>You&apos;ve been missed</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor={Colors.GRAY}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 25,
    paddingTop: 80,
    backgroundColor: Colors.WHITE,
    height: "100%",
  },
  title: {
    fontFamily: "Outfit-Bold", // Ensure the correct font family
    fontSize: 30,
    // color: Colors.BLACK,
  },
  subtitle: {
    fontFamily: "Outfit",
    fontSize: 24,
    color: Colors.GRAY,
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 30,
  },
  label: {
    fontFamily: "outfit",
    fontSize: 18,
    // color: Colors.BLACK,
    marginBottom: 8,
  },
  input: {
    fontFamily: "outfit",
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 8,
    backgroundColor: Colors.GRAY,
    
  },
});
