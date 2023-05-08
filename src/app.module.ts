import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandeModule } from './commande/commande.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  CommandeModule,
   
   MongooseModule.forRoot('mongodb+srv://root:root@cluster0.hujasar.mongodb.net/?retryWrites=true&w=majority'),
   CommandeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
