import { MessageBox } from '../utils/MessageBox';

export class ValidationsInventario {
    static validarInventario(form: any) {
        let letras = /^[aA-zZ\s]+$/;

        if(!form.cantidad) {
            MessageBox.messageError('El campo cantidad es obligatorio');
            return false;
        }
      
        if(!form.proveedor) {
            MessageBox.messageError('El campo proveedor es obligatorio');
            return false;
        }

        if(!form.variedad) {
            MessageBox.messageError('El campo variedad es obligatorio');
            return false;
        }

        if(form.cantidad < 0) {
            MessageBox.messageError('La cantidad no puede ser menor o igual a 0');
            return false;
        }  

        if(!form.proveedor.match(letras)) {
            MessageBox.messageError('El campo proveedor debe ser solo letras');
            return false;
        }
        
        return true;
    }
}
