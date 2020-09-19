/**
 * RolUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', 
  tableName: 'rol-usuario',

  attributes: {
    
    //RELACIONES
    
    usuario: {
      model: 'Usuario',
      required: true
    },

    rol: {
      model: 'Rol',
      required: true
    }
  },

};

