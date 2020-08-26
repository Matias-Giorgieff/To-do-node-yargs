const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por crear'
};

const completado = {
    alias: 'c',
    demand: true,
    desc: 'Marca como completado o pendiente la tarea'
};
const { demand } = require('yargs')

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Listado de tareas', {})
    .command('borrar', 'Borrar un registro', {
        descripcion
    })
    .help()
    .argv


module.exports = { argv }