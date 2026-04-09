import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';



@Injectable()
export class Bcrypt {
    async criptografarSenha(senha: string): Promise<string> {

        let saltos: number = 10;
        return await bcrypt.hash(senha, saltos);
        

    }
    
        async compararSenhas(senhadigitada: string, senhabanco: string): Promise<boolean> {

            return await Bcrypt.compare(senhadigitada, senhabanco);

        }
    static compare(senhadigitada: string, senhabanco: string): boolean | PromiseLike<boolean> {
        throw new Error("Method not implemented.");
    }
   
    }

     