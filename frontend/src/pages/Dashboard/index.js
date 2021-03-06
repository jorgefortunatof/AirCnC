<<<<<<< HEAD
import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import socketio from 'socket.io-client'
=======
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

>>>>>>> 70bea99a1f20a3d1ef20783848319a41cf3bfa07
import api from '../../services/api'

export default function Dashboard(){
    const [spots, setSpots] = useState([])
<<<<<<< HEAD
    const [requests, setRequests] = useState([])

    
    const user_id = localStorage.getItem('userId')
    const socket = useMemo(() => socketio('http://localhost:8085', {
        query: { user_id }
    }), [user_id])

    useEffect(() => {
        socket.on('booking_request', data => {
            setRequests([...requests, data])
        })
    }, [requests, socket])
=======
>>>>>>> 70bea99a1f20a3d1ef20783848319a41cf3bfa07

    useEffect(() => {
        async function loadSpots(){
            const user_id = localStorage.getItem('userId')
            const response = await api.get('/dashboard/spots', {
                headers: { user_id }
            })
            setSpots(response.data)
        }
        loadSpots()
    }, [])

<<<<<<< HEAD
    async function handleAccept(id){
        await api.post(`/bookings/${id}/approvals`)
        setRequests(requests.filter(request => request._id !== id))
    }
    async function handleReject(id){
        await api.post(`/bookings/${id}/rejections`)
        setRequests(requests.filter(request => request._id !== id))
    }

    return(
        <>
            <ul className="notifications">
                {requests.map(request => (
                    <li key={request._id}>
                        <strong>{request.user.email}</strong> esta solicitando uma reserva em 
                        <strong>{request.spot.company}</strong> para a data: <strong>{request.date}</strong>
                        <div>
                            <button onClick={() => handleAccept(request._id)} className="accept">Aceitar</button>
                            <button onClick={() => handleReject((request._id))} className="reject">Rejeitar</button>
                        </div>
                    </li>
                ))}
            </ul>
            <ul className="spot-list">
                {spots.map( spot => (
                    <li key={spot._id}>
                        <header style={{backgroundImage: `url('${spot.thumbnail_url}')`}} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$: ${spot.price}/dia` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>
            <Link to='/new'>
                <button className="btn">Cadastrar novo spot</button>
            </Link>
=======
    return(
        <>
        <ul className="spot-list">
            {spots.map( spot => (
                <li key={spot._id}>
                    <header style={{backgroundImage: `url('${spot.thumbnail_url}')`}} />
                    <strong>{spot.company}</strong>
                    <span>{spot.price ? `R$: ${spot.price}/dia` : 'GRATUITO'}</span>
                </li>
            ))}
        </ul>
        <Link to='/new'>
            <button className="btn">Cadastrar novo spot</button>
        </Link>
>>>>>>> 70bea99a1f20a3d1ef20783848319a41cf3bfa07
        </>
    )
}