import { Controller, Get, HttpCode, HttpStatus, ParseIntPipe, Param, Post, Body, Delete } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";
import { get } from "http";


@Controller("/postagem") 
export class PostagemController {
    constructor(private readonly postagemService: PostagemService){} // injecao de dependencia

    @Get() // rota
    @HttpCode(HttpStatus.OK) // status
    findAll(): Promise<Postagem[]>{ 
        return this.postagemService.findAll(); 
    }

    @Get("/:id")
    findBYId(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.findById(id);
    }

    @Post()
    create(@Body()postagem: Postagem): Promise<Postagem>{
        return this.postagemService.create(postagem);
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){       
        return this.postagemService.delete(id);
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemService.findByTitulo(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem>{
        return this.postagemService.update(postagem);
    }

}