import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { host } from "../../const/host"
import EventDetailView from './EventDetailView';
import Skeleton from "../../components/ui/Skeleton/Skeleton";


export default function EventDetail() {
    const [evento, setEvento] = useState(null);
    const [editingEvento, setEditingEvento] = useState(evento);
    const [editIsOpen, setEditIsOpen] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        async function fetchEvento() {
            try {
                const response = await fetch(`${host}/gestion/eventos/${id}`);
                const data = await response.json();
                setEvento(data);
                setEditingEvento(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchEvento();
    }, [id]);

    function handleOpenEdit() {
        setEditIsOpen(!editIsOpen);
    }

    function handleInputs(e) {
        const { name, value } = e.target;
        setEditingEvento(prev => ({ ...prev, [name]: value }));
    }

    async function handleSaveChanges() {
        if (editingEvento) {
            try {
                const response = await fetch(`http://localhost:8000/gestion/eventos/${id}`, {
                    method: "POST",
                    body: JSON.stringify(editingEvento),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    setEvento(editingEvento);
                    setEditIsOpen(false);
                    console.log("editado")
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    return evento ? (
        <EventDetailView
            evento={evento}
            editingEvento={editingEvento}
            handleOpenEdit={handleOpenEdit}
            handleSaveChanges={handleSaveChanges}
            handleInputs={handleInputs}
            editIsOpen={editIsOpen}

        />
    ) : (
        <Skeleton />
    );
}