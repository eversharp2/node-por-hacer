const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea.'
}






const argv = require('yargs')



.command('Crear', 'Crea un elemento por hacer', {
    descripcion
})


.command('actualizar', 'Actualiza el estado actual de una tarea', {
    descripcion,
    completado
})

.command('Borrar', 'Borra una tarea', {
    descripcion
})

.help()
    .argv;

module.exports = {
    argv
}