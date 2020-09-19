/**
 * Detalle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', 
  tableName: 'detalle',

  attributes: {

      numero_detalle: {
        type: 'number',
        required: true
      },
      cantidad: {
        type: 'number',
        required: true
      },
      precio_unitario: {
        type: 'number',
        required: true
      },
      precio_acumulado: {
        type: 'number',
        required: true
      },
  
      //RELACIONES
      factura: {
        model: 'Factura',
        required: true
      },
      comic: {
        model: 'Comic',
        required: true
      }
    },

};

