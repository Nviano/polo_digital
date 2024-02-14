import { useState, useEffect } from "react";
import { host } from "../../const/host";
import { inventaryStates } from "../../const/inventaryStates";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import BoxComponents from "../../components/BoxComponents/BoxComponents";
export default function InventaryDetails() {
  const [inventaryObj, setInventaryObj] = useState(null);
  const [editingInventary, setEditingInventary] = useState(inventaryObj);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchInventaryObj() {
      try {
        const response = await fetch(`${host}/gestion/inventario/${id}`);
        const inventaryObj = await response.json();
        setInventaryObj(inventaryObj[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchInventaryObj();
  }, [inventaryObj, id]);

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  function handleInputs(e) {
    setEditingInventary({ ...inventaryObj, [e.target.name]: e.target.value });
  }

  async function fetchUpdateInventary() {
    if (editingInventary.estado === "Nuevo") {
      editingInventary.estado = "1";
    } else if (editingInventary.estado === "Usado") {
      editingInventary.estado = "0";
    }

    const dataInventary = {
      nombre: editingInventary.nombre,
      marca: editingInventary.marca,
      referencia: editingInventary.referencia,
      estado: editingInventary.estado,
      idinventario: id,
      clienteid: editingInventary.razon_social,
    };

    try {
      const response = await fetch(`${host}/gestion/inventario/${id}`, {
        method: "POST",
        body: JSON.stringify(dataInventary),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const respuesta = await response.json();
      if (response.ok) {
        toast.success(respuesta.message);
        setInventaryObj(editingInventary);
        setIsEditing(!isEditing);
      } else toast.error(respuesta.message);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  }

  return (
    <>
      {inventaryObj && (
        <Grid container display="flex" justifyContent="center" p={6}>
          <Grid item md={12}>
            <Paper elevation={6} sx={{ p: 2, textAlign: "center" }}>
              <Grid
                item
                sx={{ display: "flex", flexDirection: "column", p: 6 }}
              >
                <Grid
                  item
                  sx={{
                    display: "flex",
                    p: 2,
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <img src="https://picsum.photos/300" alt="imagen" />
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", p: 2, textAlign: "center" }}
                  >
                    {inventaryObj.nombre}
                  </Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    pt: 6,
                    justifyContent: "space-around",
                  }}
                >
                  <BoxComponents
                    label="Referencia"
                    data={inventaryObj.referencia}
                  />
                  <BoxComponents label="Marca" data={inventaryObj.marca} />
                  <BoxComponents
                    label="Estado"
                    data={inventaryStates[inventaryObj.estado]}
                  />
                  <BoxComponents
                    label="Cliente asignado"
                    data={inventaryObj.razon_social}
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", p: 6, justifyContent: "end" }}>
                <Button variant="contained" onClick={handleEdit}>
                  Editar
                </Button>
              </Box>
              {isEditing && (
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    p: 2,
                  }}
                >
                  <Box
                    component="form"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      p: 2,
                    }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      name="nombre"
                      label="Nombre"
                      defaultValue={inventaryObj.nombre}
                      fullWidth
                      onChange={(e) => handleInputs(e)}
                    />
                    <TextField
                      id="outlined-multiline-static"
                      name="referencia"
                      label="Referencia"
                      defaultValue={inventaryObj.referencia}
                      fullWidth
                      onChange={(e) => handleInputs(e)}
                    />
                    <TextField
                      id="outlined-multiline-static"
                      name="marca"
                      label="Marca"
                      defaultValue={inventaryObj.marca}
                      fullWidth
                      onChange={(e) => handleInputs(e)}
                    />
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      value={inventaryObj.estado}
                      onChange={(e) => handleInputs(e)}
                      name="estado"
                      label="Estado"
                      defaultValue={inventaryObj.estado}
                      fullWidth
                    >
                      {Object.entries(inventaryStates).map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                          {value}
                        </MenuItem>
                      ))}
                    </Select>
                    <TextField
                      id="outlined-multiline-static"
                      name="razon_social"
                      label="Cliente Asignado"
                      defaultValue={inventaryObj.razon_social}
                      fullWidth
                      onChange={(e) => handleInputs(e)}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      p: 2,
                      justifyContent: "end",
                      gap: 2,
                    }}
                  >
                    <Button variant="contained" onClick={handleEdit}>
                      Cancelar
                    </Button>
                    <Button variant="contained" onClick={fetchUpdateInventary}>
                      Guardar
                    </Button>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
}
