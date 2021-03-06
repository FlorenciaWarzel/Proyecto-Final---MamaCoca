var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var productosModel = require('./../models/productosModel');
var cloudinary = require ('cloudinary').v2;

/* GET home page. */
router.get('/', async function (req, res, next) {

  var productos = await productosModel.getProductos();
  productos = productos.splice(0);
  productos = productos.map(producto => {
    if (producto.img_id) {
      const imagen = cloudinary.url(producto.img_id, {
        width: 400,
        crop: 'fill'
      });
      return {
        ...producto,
        imagen
      }

    } else {
      return {
        ...producto,
        imagen: '/images/noimage.png'
      }
    }
  });


  res.render('index',{
    productos
  });
});



router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje;

  // console.log(req.body);

  var obj = {
    to: 'programacion.florenciawarzel@gmail.com',
    subject: 'Contacto desde la Web',
    html: nombre + " " + apellido + " Se conectó a través del Sitio Web 'Mamá Coca' y quiere más info a este correo: " + email + " .<br> Además, hizo el siguiente comentario: " + mensaje + " . <br> Su teléfono de contacto es " + telefono
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transporter.sendMail(obj);

  res.render('index', {
    message: 'Su mensaje ha sido enviado. ¡Muchas Gracias!',
  });
});

module.exports = router;
