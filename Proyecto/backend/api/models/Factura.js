/**
 * Factura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', 
  tableName: 'factura',

  attributes: {

    numero_factura: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 16
    },
    fecha: {
      type: 'string',
      required: true,
    },
    subtotal: {
      type: 'number',
      required: true
    },
    impuestos: {
      type: 'number',
      required: true
    },
    precio_total: {
      type: 'number',
      required: true
    },

    //RELACIONES
    detalles: {
      collection: 'Detalle',
      via: 'factura'
    },
    usuario: {
      model: 'Usuario',
      required: false
    }
  },

};

