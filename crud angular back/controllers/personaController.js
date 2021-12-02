
const persona=require('../models/persona');

exports.crearPersona = async (req, res) => {

    try {
        let persona;

        // Creamos nuestro persona
        persona = new persona(req.body);

        await persona.save();
        res.send(persona);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPersona = async (req, res) => {

    try {

        const personas = await Persona.find();
        res.json(personas)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPersona = async (req, res) => {

    try {
        const { nombre, apellido, sexo, cedula } = req.body;
        let persona = await Persona.findById(req.params.id);

        if(!persona) {
            res.status(404).json({ msg: 'No existe la persona' })
        }

        persona.nombre = nombre;
        persona.apellido = apellido;
        persona.sexo = sexo;
        persona.cedula = cedula;

        persona = await Persona.findOneAndUpdate({ _id: req.params.id },persona, { new: true} )
        res.json(persona);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerPersona = async (req, res) => {

    try {
        let persona = await Persona.findById(req.params.id);

        if(!persona) {
            res.status(404).json({ msg: 'No existe la persona' })
        }
       
        res.json(persona);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarPersona = async (req, res) => {

    try {
        let persona = await Persona.findById(req.params.id);

        if(!persona) {
            res.status(404).json({ msg: 'No existe la persona' })
        }
       
        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Persona  eliminada con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}