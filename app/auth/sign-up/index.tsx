import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import { auth } from "@/config/FirebaseConfig";
import { Auth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

export default function Index() {
  const navigation = useNavigation();
  const router=useRouter();

  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const [fullName,setFullName]=useState<string>("");
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const signUp = (): void => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('User signed up:', user);
        // Do something with the user object
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error [${errorCode}]: ${errorMessage}`);
      });
  };


  return (
    <View
      style={{
        padding:25,
        paddingTop:50,
        backgroundColor:Colors.WHITE,
        height:"100%"
      }}
    >
       <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily:"outfit-bold",
          fontSize: 30,
          marginTop:30
        }}
      >
        Create New Account
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter Full Name"
          // placeholderTextColor={Colors.GRAY}

          style={styles.input}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          // placeholderTextColor={Colors.GRAY}

          style={styles.input}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          secureTextEntry={true}
          // placeholderTextColor={Colors.GRAY}
          style={styles.input}
        />
      </View>


      <View
        style={{
          padding: 20,
          marginTop: 50,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "outfit-bold",
          }}
        >
          Create Account
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-in")}
        style={{
          padding: 20,
          marginTop: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
            fontSize: 16,
            fontFamily: "outfit-medium",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

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
    fontFamily: "outfit-Bold", // Ensure the correct font family
    fontSize: 30,
    // color: Colors.BLACK,
  },
  subtitle: {
    fontFamily: "outfit",
    fontSize: 24,
    color: Colors.GRAY,
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 50,
  },
  label: {
    fontFamily: "outfit",
    fontSize: 18,
    // color: Colors.BLACK,
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    fontFamily: "outfit",
    fontSize: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 15,

    // backgroundColor: Colors.GRAY,
  },
});
