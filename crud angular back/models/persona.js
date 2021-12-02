const mongoose = require('mongoose');

const PersonaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
       require:true
    },
});

module.exports = mongoose.model('Persona', PersonaSchema);