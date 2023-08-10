import React from "react";
import { View, Text } from 'react-native'
import { useRoute } from "@react-navigation/native";

export default function TelaProduto() {
    const route = useRoute()
    const produto = route.params.card //Os dados do produto estão nessa variavel
    console.log(produto)
    

    return (
        <View>
           <Text>HEllo</Text> 
        </View>
    )
}