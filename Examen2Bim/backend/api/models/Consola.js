/**
 * Consola.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  tableName: 'consola',

  attributes: {

    Nombre: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 2,
      maxLength: 32
    },
    Fabricante: {
      type: 'string',
      required: true,
      unique: false,
      minLength: 2,
      maxLength: 32
    },
    Generacion: {
      type: 'number',
      required: true,
      unique: false
    },
    tieneSoporte: {
      type: 'boolean',
      required: true,
      unique: false
    },
    videojuegos: {
      collection: 'Videojuego',
      via: 'consola'
    },
  }
};

