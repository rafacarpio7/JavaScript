/*•	Nombre de la empresa
•	CIF de la empresa
•	Dirección de la empresa
•	Teléfono de la empresa
•	Fecha de la factura
•	Identificador de la factura
•	Descripción de la venta
•	Importe de la venta con IVA
•	Importe de la venta sin IVA
•	Importe del IVA
Los datos de la empresa vendrán heredados de la clase Información de la empresa.
Esta clase tendrá dos métodos: Importe (devolverá el importe total, con IVA) y  getInfo que devolverá información sobre la factura. 
Crea 2 facturas simplificadas diferentes.
*/

class FacturaSimplificada{
    constructor(nombreEmpresa,CIF,direccion,telefono,fechaFacturacion,idFactura,
                descripcionVenta,importeConIVA,importeSinIVA,importeIVA){
        this.nombreEmpresa=nombreEmpresa;
        this.CIF=CIF;
        this.direccion=direccion;
        this.telefono=telefono;
        this.fechaFacturacion=fechaFacturacion;
        this.idFactura=idFactura;
        this.descripcionVenta=descripcionVenta;
        this.importeConIVA=importeConIVA;
        this.importeSinIVA=importeSinIVA;
        this.importeIVA=importeIVA;
    }

    importe(){
        return this.importeConIVA;
    }

    getInfo(){
        return "Nombre Empresa: "+this.nombreEmpresa + 
        " CIF : "+ this.CIF +
        " Direccion : "+this.direccion + 
        " Telefono : "+this.telefono + 
        " Fecha de facturacion: "+this.fechaFacturacion +
        " ID Factura: "+this.idFactura +
        " Descripcion Venta: "+this.descripcionVenta +
        " Importe con IVA : "+this.importeConIVA +
        " Importe sin IVA: "+this.importeSinIVA +
        " Importe del IVA: "+this.importeIVA;

    }

    

}