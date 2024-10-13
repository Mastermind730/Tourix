import Login from "@/components/Login";
import { auth } from "@/config/FirebaseConfig";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  const user=auth.currentUser;
  console.log("user is:",user)
  return (
    <View
      style={{
        flex: 1,
        
      }}
    >
      {user?<Redirect href={"/myTrip"}/>:
      <Login/>}
    </View>
  );
}
