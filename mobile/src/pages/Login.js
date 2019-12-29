import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import api from '../services/api'
import logo from '../assets/logo.png'

export default function Login ({ navigation }){
    const [email, setEmail] = useState('')
    const [techs, setTechs] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user){
                navigation.navigate('List')
            }
        })
    },[])

    async function handleSubmit(){
        const response = await api.post('/users',{
            email
        })

        const { _id } = response.data

        await AsyncStorage.setItem('user', _id)
        await AsyncStorage.setItem('techs', techs)

        navigation.navigate('List')
    }

    return (
    <View style={styles.container}>
        <Image source={logo} />
        
        <View style={styles.form}>
            <Text style={styles.label}>SEU EMAIL*</Text>
            <TextInput
                style={styles.input} 
                value={email}
                onChangeText={setEmail}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Text style={styles.label}>TECNOLOGIAS*</Text>
            <TextInput
                style={styles.input} 
                value={techs}
                onChangeText={setTechs}
                placeholder="Tecnologias de interesse"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="words"
                autoCorrect={false}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonTitle}>Encontrar spots</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button:{
        backgroundColor: '#f05a5b',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    buttonTitle:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
})
