var _this = this;
var adrian = {
    nombre: 'Adrian',
    apellido: 'Eguez',
    casado: 0,
    sueldo: 11.2,
    estado: 'BN',
    imprimirUsuario: function (mensaje) {
        // if(this.sueldo){
        //
        // }else{
        //     return
        // }
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return sueldo + sueldo * impuesto;
    },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
