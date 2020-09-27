/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', 
  tableName: 'usuario',

  attributes: {

    email: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 32
    },
    nombre: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 64
    },
    password: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 16
    },
    
    //RELACIONES

    tarjetas: {
      collection: 'Tarjeta',
      via: 'usuario'
    },
    facturas: {
      collection: 'Factura',
      via: 'usuario'
    },
    roles: {
      collection: 'Rol',
      via: 'usuarios'
    }
  },

};

