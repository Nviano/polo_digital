import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { host } from "../../const/host"
import BoxComponentsEvent from "../../components/BoxComponentsEvent/BoxComponentsEvent"

export default function EventDetails() {
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

    const image = evento ? `http://localhost:8000${evento.eventoimage}` : "";

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
                console.log(editingEvento)
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
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    return (
        <>
            {evento && (
                <Grid container display="flex" justifyContent="center" p={6}>
                    <Grid item md={12}>
                        <Paper elevation={6} sx={{ p: 2, textAlign: "center" }}>
                            <Grid item sx={{ display: "flex", flexDirection: "column", p: 6 }}>
                                <Box item sx={{ display: "flex", flexDirection: "column", p: 2, alignItems: "center", justifyContent: "space-around", gap: 4 }}>
                                    <img src={image} alt="Evento" style={{ maxWidth: '800px' }} />
                                    <Typography variant="h5">{evento.eventosnombre}</Typography>
                                </Box>
                                <Grid item sx={{ display: "flex", pt: 6, justifyContent: "space-around" }}>
                                    <BoxComponentsEvent label="Fecha de inicio" DataEvent={evento.fecha_inicio} />
                                    <BoxComponentsEvent label="Fecha de fin" DataEvent={evento.fecha_fin} />
                                    <BoxComponentsEvent label="Aforo" DataEvent={evento.aforo} />
                                    <BoxComponentsEvent label="Organizador" DataEvent={evento.razon_social} />
                                    <BoxComponentsEvent label="Ubicación" DataEvent={evento.salasnombre} />
                                </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", p: 6, justifyContent: "end" }}>
                                {!editIsOpen ? (
                                    <Button variant="contained" onClick={handleOpenEdit}>Editar</Button>
                                ) : (
                                    <>
                                        <Button variant="contained" onClick={handleOpenEdit} sx={{ mr: 2 }}>Cancelar</Button>
                                        <Button variant="contained" onClick={handleSaveChanges}>Guardar</Button>
                                    </>
                                )}
                            </Box>
                            {editIsOpen && (
                                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '10px', p: 2 }}>
                                    <TextField label="Nombre del evento" variant="outlined" defaultValue={editingEvento.eventosnombre} fullWidth onChange={handleInputs} name="eventosnombre" />
                                    <TextField label="" type="text" defaultValue={editingEvento.fecha_inicio} fullWidth onChange={handleInputs} name="fecha_inicio" />
                                    <TextField label="" type="text" defaultValue={editingEvento.fecha_fin} fullWidth onChange={handleInputs} name="fecha_fin" />
                                    <TextField label="Aforo" type="number" defaultValue={editingEvento.aforo} fullWidth onChange={handleInputs} name="aforo" />
                                    <TextField label="Organizador" type="text" defaultValue={editingEvento.razon_social} fullWidth onChange={handleInputs} name="razon_social" />
                                    <TextField label="Ubicación" type="text" defaultValue={editingEvento.salasnombre} fullWidth onChange={handleInputs} name="salasnombre" />
                                </Box>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </>
    );
}
