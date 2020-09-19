/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default', //nombre de la conexion
  tableName: 'epn_usuario', // nombre tabla
  attributes: {

    cedula: { 
      type: 'string',
      required: true,
      columnName: 'epn_cedula',
      unique: true,
      minLength: 10,
      maxLength: 25
    },
    
    nombre: { 
      type: 'string',
      required: true,
      minLength: 3,
    },
    
    correo: { 
      type: 'string',
      isEmail: true
    },
    
    estadoCivil: { 
      type: 'string',
      isIn: ['Soltero', 'Casado', 'Viudo', 'Union Libre', 'Divorciado'],
      defaultsTo: 'Soltero'
    }
    
  },
};

