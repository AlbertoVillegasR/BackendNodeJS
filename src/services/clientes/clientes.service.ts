import { STATUS } from "../../shareds/enums";
import { ResponseModel } from "../../shareds/response.model";

export namespace ClienteServices {
    export async function listar(params: any) {
        let resul: ResponseModel = new ResponseModel();
        try {
            resul.data = [
                { dni: "03825305", nombres: " Alberto", apellidos: "Villegas Coronado" },
                { dni: "72774824", nombres: "Alberto Aaron", apellidos: "Villegas Rosas" },
                { dni: "03899746", nombres: "Maria Magdalena", apellidos: "Rosas Gonzales" },
            ];

        } catch (error) {
            resul.status = STATUS.Error;
            resul.message = "Ha Ocurrido un error!";
        }
        return resul;
    }
}