import { Testimonial } from '../models/Testimonial.js';

const guardarTestimonial = async (req, res)  => {
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(!nombre) {
        errores.push({'mensaje': 'Agrega tu Nombre'})
    }
    if(!correo) {
        errores.push({'mensaje': 'Tu Correo es Obligatorio'})
    }
    if(!mensaje) {
        errores.push({'mensaje': 'Un Testimonial no puede ir vacio'})
    }

    // revisar por erroes
    if(errores.length > 0 ){
        const testimoniales = await Testimonial.findAll();

        // muestra la vista con errores
        res.render('testimoniales', {
            errores,
            nombre, 
            correo, 
            mensaje,
            testimoniales,
            pagina: 'Testimoniales'
        });
    } else {
        // almacenalo en la BD

        try {
            await Testimonial.create({
                nombre, 
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }

};



export {
    guardarTestimonial
}