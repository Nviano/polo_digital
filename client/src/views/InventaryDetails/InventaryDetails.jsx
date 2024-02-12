import { useState, useEffect } from "react";
import { host } from "../../const/host"
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import BoxComponentsInventary from "../../components/BoxComponentsInventary/BoxComponentsInventary";
export default function InventaryDetails() {

    const [inventaryObj, setinventaryObj] = useState(null);
    const [editingInventary, seteditingInventary] = useState(inventaryObj);
    const [isEditing, setisEditing] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        async function fetchInventaryObj() {
            try {
                const response = await fetch(`${host}/gestion/inventario/${id}`,);
                const inventaryObj = await response.json();
                setinventaryObj(inventaryObj[0]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchInventaryObj();
    }, [inventaryObj]);

    function handleEdit() {
        isEditing ? setisEditing(false) : setisEditing(true)
    }

    function handleInputs(e) {
        seteditingInventary({ ...inventaryObj, [e.target.name]: e.target.value });
    }

    async function fetchUpdateInventary() {
        if (editingInventary.estado === "Activo") {
            editingInventary.estado = "1"
        } else if (editingInventary.estado === "Inactivo") {
            editingInventary.estado = "0"
        }

        const dataInventary = {
            nombre: editingInventary.nombre,
            marca: editingInventary.marca,
            referencia: editingInventary.referencia,
            estado: editingInventary.estado,
            idinventario: id,
            clienteid: editingInventary.razon_social
        }

        try {
            const response = await fetch(`${host}/gestion/inventario/${id}`, {
                method: "POST",
                body: JSON.stringify(dataInventary),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const respuesta = await response.json()
            if (response.ok) {
                toast.success(respuesta.message)
                setinventaryObj(editingInventary)
            }
            else toast.error(respuesta.message)

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <Toaster />
            {inventaryObj && (<Grid container display="flex" justifyContent="center" p={6}>
                <Grid item md={12}>
                    <Paper elevation={6} sx={{ p: 2, textAlign: "center" }}>
                        <Grid item sx={{ display: "flex", flexDirection: "column", p: 6 }}>
                            <Grid item sx={{ display: "flex", p: 2, alignItems: "center", justifyContent: "space-around" }}>
                                <img src="https://via.placeholder.com/300" alt="imagen" />
                                <Typography>{inventaryObj.nombre}</Typography>
                            </Grid>
                            <Grid item sx={{ display: "flex", pt: 6, justifyContent: "space-around" }}>
                                <BoxComponentsInventary label="Referencia" DataInventary={inventaryObj.referencia} />
                                <BoxComponentsInventary label="Marca" DataInventary={inventaryObj.marca} />
                                <BoxComponentsInventary label="Estado" DataInventary={inventaryObj.estado ? "Activo" : "Inactivo"} />
                                <BoxComponentsInventary label="Cliente asignado" DataInventary={inventaryObj.razon_social} />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", p: 6, justifyContent: "end" }}>
                            <Button variant="contained" onClick={handleEdit}>Editar</Button>
                        </Box>
                        {isEditing && (<Box sx={{ display: "flex", p: 2, justifyContent: "space-around" }}>
                            <Box sx={{ display: "flex", p: 2, justifyContent: "space-around" }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    name="nombre"
                                    label="Nombre"
                                    defaultValue={inventaryObj.nombre}
                                    onChange={(e) => handleInputs(e)} />
                                <TextField
                                    id="outlined-multiline-static"
                                    name="referencia"
                                    label="Referencia"
                                    defaultValue={inventaryObj.referencia}
                                    onChange={(e) => handleInputs(e)} />
                                <TextField
                                    id="outlined-multiline-static"
                                    name="marca"
                                    label="Marca"
                                    defaultValue={inventaryObj.marca}
                                    onChange={(e) => handleInputs(e)} />
                                <TextField
                                    id="outlined-multiline-static"
                                    name="estado"
                                    label="Estado"
                                    defaultValue={inventaryObj.estado ? "Activo" : "Inactivo"}
                                    onChange={(e) => handleInputs(e)} />
                                <TextField
                                    id="outlined-multiline-static"
                                    name="razon_social"
                                    label="Cliente Asignado"
                                    defaultValue={inventaryObj.razon_social}
                                    onChange={(e) => handleInputs(e)} />
                            </Box>
                            <Box sx={{ display: "flex", p: 2, justifyContent: "end" }}>
                                <Button variant="contained" onClick={handleEdit}>Cancelar</Button>
                                <Button variant="contained" onClick={fetchUpdateInventary}>Guardar</Button>
                            </Box>
                        </Box>)}
                    </Paper>
                </Grid>
            </Grid>)}
        </>
    )
}