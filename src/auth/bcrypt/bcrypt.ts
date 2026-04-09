import { Injectable } from "@nestjs/common";
import { SrvRecord } from "dns";

@Injectable()
export class Bcrypt {
    async criptografarSenha(senha: string): Promise<string> {

        let saltos: number = 10;
        return await Bcrypt.hash(senha, saltos);
        

    }
    static hash(senha: string, saltos: number): string | PromiseLike<string> {
        throw new Error("Method not implemented.");
    }
        async compararSenhas(senhadigitada: string, senhabanco: string): Promise<boolean> {

            return await Bcrypt.compare(senhadigitada, senhabanco);

        }
    static compare(senhadigitada: string, senhabanco: string): boolean | PromiseLike<boolean> {
        throw new Error("Method not implemented.");
    }
   
    }

     