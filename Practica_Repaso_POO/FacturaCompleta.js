/*•	Nombre del cliente
•	DNI del cliente
•	Dirección del cliente
•	Teléfono del cliente
•	email del cliente
El método getInfo incluirá los datos del cliente.
Crea una factura completa.
*/
class FacturaCompleta extends FacturaSimplificada{
    constructor(nombreEmpresa,CIF,direccion,telefono,fechaFacturacion,idFactura,
        descripcionVenta,importeConIVA,importeSinIVA,importeIVA,
        nombreCli,clienteDNI,direccionCliente,telefonoCliente,emailCliente){
            super(nombreEmpresa,CIF,direccion,telefono,fechaFacturacion,idFactura,
                descripcionVenta,importeConIVA,importeSinIVA,importeIVA);
                this.nombreCli=nombreCli;
                this.clienteDNI=clienteDNI;
                this.direccionCliente=direccionCliente;
                this.telefonoCliente=telefonoCliente;
                this.emailCliente=emailCliente;
    }

    getInfo(){
        return super.getInfo() +
        " Nombre Cliente : "+this.nombreCli + 
        " DNI Cliente : "+this.clienteDNI + 
        " Direccion Cliente: "+this.direccionCliente +
        " Telefono Cliente: "+this.telefonoCliente +
        " Email Cliente: "+this.emailCliente ;

    }
}