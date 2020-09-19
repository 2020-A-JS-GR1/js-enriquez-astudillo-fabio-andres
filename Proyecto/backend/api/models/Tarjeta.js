/**
 * Tarjeta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', 
  tableName: 'tarjeta',

  attributes: {

    numero_tarjeta: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 32
    },
    fecha_caducidad: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 8
    },
    
    //RELACIONES

    usuario: {
      model: 'Usuario',
      required: false
    }
  },

};

