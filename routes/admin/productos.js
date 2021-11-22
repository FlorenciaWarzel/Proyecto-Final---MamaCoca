var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);



/* GET home page. */
router.get('/', async function (req, res, next) {

  // var productos = await productosModel.getProductos();
  var productos
  if (req.query.q === undefined){
    productos = await productosModel.getProductos();
  } else {
    productos = await productosModel.buscarProductos(req.query.q);
  }

  productos = productos.map(producto => {
    if (producto.img_id) {
      const imagen = cloudinary.image(producto.img_id, {
        width: 70,
        height: 70,
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
  })
  res.render('admin/productos', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    productos,
    is_search: req.query.q !== undefined,
    q: req.query.q
  });
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let producto = await productosModel.getProductoById(id);
  if(producto.img_id){
    await (destroy(producto.img_id));
  }

  await productosModel.deleteProductosById(id);
  res.redirect('/admin/productos')
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  
  var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

  try {    
    if (req.body.producto != "" && req.body.descripcion != "" && req.body.ingredientes != "") {
      await productosModel.insertProducto({
        ...req.body,
        img_id
      });
      res.redirect('/admin/productos')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo el nuevo producto'
    })
  }
});


router.get('/modificar/:id', async (req, res, next) => {
  var id = req = req.params.id;
  var producto = await productosModel.getProductoById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    producto
  });
});

router.post('/modificar', async (req, res, next) => {
  try {
      let img_id = req.body.img_original;
      let borrar_img_vieja = false;

      if(req.body.img_delete === "1") {
        img_id = null;
        borrar_img_vieja = true;
      } else {
        if(req.files && Object.keys(req.files).length > 0) {
          imagen = req.files.imagen;
          img_id = (await uploader(imagen.tempFilePath)).public_id;
          borrar_img_vieja = true; 
        }
      }

      if (borrar_img_vieja && req.body.img_original) {
        await (destroy(req.body.img_original));
      }



    var obj = {
      producto: req.body.producto,
      descripcion: req.body.descripcion,
      ingredientes: req.body.ingredientes,
      img_id
    }

    console.log(obj)
    await productosModel.modificarProductoById(obj, req.body.id);
    res.redirect('/admin/productos');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó el producto'
    })
  }
});


module.exports = router;