import { Box, Paper, Typography, Button, Grid, TextField } from "@mui/material";
import BoxComponents from "../../components/BoxComponents/BoxComponents";


export default function EventDetailView({
    evento,
    editingEvento,
    handleOpenEdit,
    handleSaveChanges,
    handleInputs,
    editIsOpen
}) {


    const image = evento ? `http://localhost:8000${evento.eventoimage}` : "";

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
                                    <BoxComponents label="Fecha de inicio" data={evento.fecha_inicio} />
                                    <BoxComponents label="Fecha de fin" data={evento.fecha_fin} />
                                    <BoxComponents label="Aforo" data={evento.aforo} />
                                    <BoxComponents label="Organizador" data={evento.razon_social} />
                                    <BoxComponents label="Ubicación" data={evento.salasnombre} />
                                </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", p: 6, justifyContent: "end" }}>
                                {editIsOpen ? (
                                    <>
                                        <Button variant="contained" onClick={handleOpenEdit} sx={{ mr: 2 }}>Cancelar</Button>
                                        <Button variant="contained" onClick={handleSaveChanges}>Guardar</Button>
                                    </>
                                ) : (
                                    <Button variant="contained" onClick={handleOpenEdit}>Editar</Button>
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