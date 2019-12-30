import React, { useEffect, useState } from 'react'
import { withNavigation } from 'react-navigation'
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import api from '../services/api'

function SpotList({ tech, navigation }){
    const [spots, setSpots] = useState([])

    useEffect(() => {
        async function loadSpots(){
            const response = await api.get('/spots', {
                params: { tech }
            })
            setSpots(response.data)
        }
        loadSpots()

    }, [])

    function prepareUrl(url){
        return url.replace('localhost', '192.168.0.128')
    }
    function handleNavigate(id){
        navigation.navigate('Book', { id })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.list}
                data={spots}
                keyExtractor={item => item._id}
                renderItem={ ({item}) => (
                    <View style={styles.listItem}>
                        <Image style={styles.thumbnail} source={{ uri: prepareUrl(item.thumbnail_url) }} />
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.price}>{item.price ? `R$ ${item.price}` : 'GRATUITO' }</Text>
                        <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>
                            <Text style={styles.buttonTitle}>Solicitar reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
    },
    title:{
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold: {
        fontWeight: 'bold',
    },
    list:{
        paddingHorizontal: 20,
    },
    listItem: {
        marginRight: 15,
    },

    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },

    company:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    },
    price: {
        fontSize: 15,
        color: '#999',
        marginTop: 5,
    },

    button:{
        backgroundColor: '#f05a5b',
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15,
    },
    buttonTitle:{
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
    },
})

export default withNavigation(SpotList)