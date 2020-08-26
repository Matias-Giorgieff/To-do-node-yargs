const fs = require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');





let listadoToDo = [];

const guardarDB = (listado) => {
    let data = JSON.stringify(listado);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    });
}

const cargarDB = () => {
    try {
        listadoToDo = require('../db/data.json');
    } catch (error) {
        console.log(error);
    }
}


const crear = descripcion => {
    cargarDB();
    /* Esto es lo mismo que poner descripcion = descripcion(parametro) */
    let toDo = {
        descripcion,
        completado: false
    }
    listadoToDo.push(toDo);
    guardarDB(listadoToDo);
    return toDo;
}

const getListado = () => {
    cargarDB()
    return listadoToDo;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB(listadoToDo);
        return true;
    } else {
        return false;
    }
}

const borrar = (desc) => {
    cargarDB();
    /* Regresa todos los elementos que no sean iguales al de desc */
    let nuevoListado = listadoToDo.filter(tarea => tarea.descripcion !== desc);
    /* let index = listadoToDo.findIndex(tarea => tarea.descripcion === desc); */
    if (listadoToDo.length === nuevoListado.length) {
        /* listadoToDo.splice(index, 1); */
        return false;
    } else {
        listadoToDo = nuevoListado;
        guardarDB(listadoToDo);
        return true;
    }

}


module.exports = { crear, getListado, actualizar, borrar }