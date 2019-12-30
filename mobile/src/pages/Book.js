import React, { useState } from 'react'
import { View, Text, AsyncStorage, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

import api from '../services/api'

export default function Book ({ navigation }){
    const id = navigation.getParam('id')
    const [date, setDate] = useState('')

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user')

        await api.post(`/spots/${id}/booking`,
        { date },
        { headers:{ user_id } }
        )

        Alert.alert('Solicitação enviada',`Sua solicitação de reserva para ${date} foi enviada com sucesso!`)
        
        handleGoBack()
    }
    function handleGoBack(){
        navigation.navigate('List')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>DATA DE INTERESSE*</Text>
            <TextInput
                style={styles.input} 
                value={date}
                onChangeText={setDate}
                placeholder="Qual data você quer reservar?"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonTitle}>Solicitar reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button ,styles.cancelButton]}
                onPress={handleGoBack}
            >
                <Text style={styles.buttonTitle}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 30, 
        marginTop: 50,
    },

    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
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
    cancelButton:{
        backgroundColor: '#ccc',
        marginTop: 10,
    },
    buttonTitle:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
})
