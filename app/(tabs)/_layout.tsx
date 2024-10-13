import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';
export default function TabLayout() {


  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name="myTrip"  
        options={{
            tabBarLabel:"My Trip",
            tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color={color} />
        }}
        />
        <Tabs.Screen name="discover" 
        options={{
            tabBarLabel:"Discover",

            tabBarIcon:({color})=><MaterialIcons name="travel-explore" size={24} color="black" />
        }}
        />
        <Tabs.Screen name="profile"  
        options={{
            tabBarLabel:"Profile",

            tabBarIcon:({color})=><Ionicons name="person-circle" size={24} color="black" />
        }}
        />
    </Tabs>
  )
}