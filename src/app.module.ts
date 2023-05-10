import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandeModule } from './commande/commande.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilisateurModule } from './utilisateur/utilisateur.module';

@Module({
  imports: [
  CommandeModule,
   UtilisateurModule,
   MongooseModule.forRoot('mongodb+srv://root:root@cluster0.hujasar.mongodb.net/?retryWrites=true&w=majority'),
   CommandeModule,
   UtilisateurModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
