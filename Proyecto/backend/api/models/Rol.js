/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', 
  tableName: 'rol',

  attributes: {

    nombre: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 16
    },
    permiso: {
      type: 'number',
      required: true
    },
    //RELACIONES
    usuarios: {
      collection: 'Usuario',
      via: 'roles'
    }
  },

};

