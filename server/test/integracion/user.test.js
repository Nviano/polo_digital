//Test de integración de clientes:

//Test 1
test("Obtiene 400 cuando no se inserta nada", async () => {
    const respuesta = await fetch(`http://localhost:8000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const json = await respuesta.json()
    expect(respuesta.status).toBe(400);
    expect(json.message).toBe("Error al recibir el body")  
    
  });

//Test 2
test("Obtiene 404 cuando el email es incorrecto", async () => {
    const respuesta = await fetch(`http://localhost:8000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "fdsaf",
        password: "b56432512"
      }),
    });

    const json = await respuesta.json()
    expect(respuesta.status).toBe(404);
    expect(json.message).toBe("Email incorrecto")  
    
  });

  //Test 3
test("Obtiene 401 cuando la password es incorrecta", async () => {
    const respuesta = await fetch(`http://localhost:8000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "israel@hotmail.com",
        password: "b56432512"
      }),
    });

    const json = await respuesta.json()
    expect(respuesta.status).toBe(401);
    expect(json.message).toBe("Password incorrecta")
    
  });

    //Test 4
test("Obtiene 201 cuando el login es correcto", async () => {
    const respuesta = await fetch(`http://localhost:8000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "israel@hotmail.com",
        password: "1234"
      }),
    });

    const json = await respuesta.json()
    expect(respuesta.status).toBe(201);
    expect(respuesta).toBe(respuesta)
    
  });

  //Añadir un usuario nuevo-----------------------------------------------

  //Test 1
  test("Obtiene 400 cuando no se inserta nada", async () => {
    const respuesta = await fetch(`http://localhost:8000/user/registro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const json = await respuesta.json()
    expect(respuesta.status).toBe(400);
    expect(json.message).toBe("Error al recibir el body")  
    
  });

  //Test 2
  test("Obtiene 409 cuando el usuario ya esta registrado", async () => {
    const respuesta = await fetch(`http://localhost:8000/user/registro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: "laila",
        email: "israel@hotmail.com",
        password: "1234",
        apellidos: "987654321",
        DNI: "32",
        telefono:"677877877",
        clientesid:"Releevant"

      }),
    });
    const json = await respuesta.json();
    expect(respuesta.status).toBe(409);
    expect(json.message).toBe(`Usuario con email israel@hotmail.com ya registrado `)
  });

//Test 3
  test("Obtiene 201 cuando el usuario se registra correctamente", async () => {
    const respuesta = await fetch(`http://localhost:8000/user/registro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: "laila",
        email: "jairo@hotmail.com",
        password: "1234",
        apellidos: "987654321",
        DNI: "32",
        telefono:"677877877",
        clientesid:"Releevant"

      }),
    });
    const json = await respuesta.json();
    expect(respuesta.status).toBe(201);
    expect(json.message).toBe(`Usuario registrado con éxito`)
  });

