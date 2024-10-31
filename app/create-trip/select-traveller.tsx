import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { FlatList } from 'react-native-gesture-handler'
import { SelectTravellersList } from '@/constants/Options'

type Props = {}

const SelectTraveller = (props: Props) => {
    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle: ''
        })
    })
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:"100%"
    }}>
      <Text style={
        {
           fontSize:35,
           fontFamily:"outfit-bold",
           marginTop:20 
        }
      }>Who's Travelling</Text>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:"outfit-bold",
            fontSize:20,

        }}>
            Choose your travellers
        </Text>
        <FlatList
            data={SelectTravellersList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={{
                    padding: 15,
                    marginVertical: 8,
                    backgroundColor: '#f9f9f9',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#e0e0e0'
                }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.icon} {item.title}</Text>
                    <Text style={{ color: '#555' }}>{item.desc}</Text>
                    <Text style={{ color: '#888' }}>People: {item.people}</Text>
                </View>
            )}
        />
      </View>
    </View>
  )
}

export default SelectTraveller