import { Module } from '@nestjs/common';
import { PostagemController } from './postagem/controller/postagem.controller';
import { PostagemService } from './postagem/services/postagem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { TemaModule } from './tema/tema.module';
import { Tema } from './tema/entities/tema.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true
    }),

   TypeOrmModule.forFeature([Postagem, Tema]),
  ],
  controllers: [PostagemController],
  providers: [PostagemService],
})
export class AppModule {}