import React,{useState} from 'react';
import { TextInput, Button } from 'react-native-paper';
import {View, Text} from 'react-native';
import Header from './Header'
import IonIcon from 'react-native-vector-icons/Ionicons'

export default Search = () => {
    const [city,setCity] = useState('')
    const [cities,setCities] = useState([])
    const fetchCities = ( text ) =>{
        setCity(text)
        fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b126fd6a200a59db759f96cb3f0e7ca3")
        .then(item=>item.json())
        .catch((error) => console.warn("fetch error:", error))
        .then(cityData=>{
            console.log(cityData)
        })
    }
    return (
        <View style={{flex:1}}>
            <Header name="SearchScreen"/>
            <TextInput
            label="Ciudad"
            theme={{colors:{primary:"#00aaff"}}}
            value={city}
            onChangeText={(text)=>fetchCities(text)}/>

            <Button 
            icon="content-save" 
            mode="contained" 
            theme={{colors:{primary:"#00aaff"}}}
            style={{margin:20}}
            onPress={() => console.log('Pressed')}>
                <Text style={{color:"white"}}> Press me </Text>
            </Button>
        </View>
    );
};