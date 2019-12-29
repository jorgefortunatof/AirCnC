import React, { useState, useEffect } from 'react'
import { Image, ScrollView, View, AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native'
import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List ({navigation}){
    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            setTechs(storageTechs.split(',').map(tech => tech.trim()))
        })
    }, [])

    function logOut(){
        AsyncStorage.clear()
        navigation.navigate('Login')
    }

return (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={() => logOut()}
        >
            <Image style={styles.logo} source={logo} />
        </TouchableOpacity>

        <ScrollView >
            {techs.map(tech => <SpotList key={tech} tech={tech} />)}
        </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
    },

    logo:{
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,
    }
})