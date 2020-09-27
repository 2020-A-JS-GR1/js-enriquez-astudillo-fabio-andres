/**
 * Comic.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  
  datastore: 'default', 
  tableName: 'comic',

  attributes: {
    titulo: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 128
    },
    autor: {
      type: 'string',
      required: true,
      minLength: 2,
      maxLength: 128
    },
    genero: {
      type: 'string',
      required: true,
      isIn: ['DC','Marvel','Manga']
    },
    img: {
      type: 'string'
    },
    precio: {
      type: 'number',
      required: true,
    },
    estado: {
      type: 'string',
      isIn: ['Disponible', 'Agotado', 'Descontinuado'],
      defaultsTo: 'Disponible'
    },

    //RELACIONES

    detalles: {
      collection: 'Detalle',
      via: 'comic'
    }
  },

};

