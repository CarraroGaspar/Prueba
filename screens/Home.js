import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import Button from '../components/Button'

export default function Home({ navigation }) {
    return <View style={{display:"flex", flex: 1}}>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Child")}><Text>Child</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Activity")}><Text>Activity</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Assignment")}><Text>Assignment</Text></TouchableOpacity>
        <Button style={{backgroundColor:"yellow"}}><Text>Gaspar</Text></Button>
    </View>
}