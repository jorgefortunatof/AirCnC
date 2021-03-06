import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import socketio from 'socket.io-client'
import { Image, ScrollView, View, AsyncStorage, StyleSheet, TouchableOpacity, Alert } from 'react-native'
=======
import { Image, ScrollView, View, AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native'
>>>>>>> 70bea99a1f20a3d1ef20783848319a41cf3bfa07
import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List ({navigation}){
    const [techs, setTechs] = useState([])

<<<<<<< HEAD

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.0.128:8085', {
                query:{user_id}
            })

            socket.on('booking_response', booking => {
                Alert.alert(`${booking.approved ? 'Reserva aprovada': 'Reserva rejeitada'}`,`Sua reserva em ${booking.spot.company} para ${booking.date} foi ${booking.approved ? 'aprovada': 'rejeitada'}`)
            })
        })
    }, [])

=======
>>>>>>> 70bea99a1f20a3d1ef20783848319a41cf3bfa07
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