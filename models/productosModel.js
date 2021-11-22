var pool = require('./bd');


async function getProductos() {

    var query = 'select * from productos';
    var rows = await pool.query(query);
    return rows;
}
// Eliminar
async function deleteProductosById(id) {
    var query = 'delete from productos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}
// Insertar
async function insertProducto(obj) {
    try {
        var query = "insert into productos set ?";
        var rows = await pool.query(query,[obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
// Traer lo que vaya a modificar por id
async function getProductoById(id) {
    var query = "select * from productos where id=?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

// Modificar
async function modificarProductoById(obj, id) {
    try {
        var query = "update productos set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

//BUSCAR
async function buscarProductos(busqueda){
    var query = "select * from productos where producto like ? OR descripcion like ? OR ingredientes like ?";
    var rows = await pool.query(query, ['%' + busqueda + '%', '%' + busqueda + '%', '%' + busqueda + '%']);
    return  rows;
}

module.exports = {getProductos, deleteProductosById, insertProducto, getProductoById, modificarProductoById, buscarProductos}