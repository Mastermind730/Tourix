import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "@/config/FirebaseConfig";


export default function Index() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const signIn=():void=>{

    if(!(email?.length>0 && password?.length>0 )){
      ToastAndroid.show("Please enter all details!!",ToastAndroid.LONG);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode)
  });

  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Let&apos;s Sign You In</Text>
      <Text style={styles.subtitle}>Welcome Back</Text>
      <Text style={styles.subtitle}>You&apos;ve been missed</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          // placeholderTextColor={Colors.GRAY}
          onChangeText={(value)=>setEmail(value)}
          style={styles.input}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          secureTextEntry={true}
          // placeholderTextColor={Colors.GRAY}
          onChangeText={(value)=>setPassword(value)}

          style={styles.input}
        />
      </View>

      <TouchableOpacity
      onPress={signIn}
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
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-up")}
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
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 40,
    backgroundColor: Colors.WHITE,
    height: "100%",
  },
  title: {
    fontFamily: "outfit-Bold", // Ensure the correct font family
    fontSize: 30,
    marginTop: 30,
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
