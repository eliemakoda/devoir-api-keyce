import {Module} from '@nestjs/common';
import {UtilisateurService} from './utilisateur.service';
import {UtilisateurController}from './utilisateur.controller';
import {Utilisateur,UtilisateurSchema} from '../schema/utilisateur.schema';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
   MongooseModule.forFeature([
      {
        name: Utilisateur.name,
        schema: UtilisateurSchema,
      },
   ])
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService]
})
export class UtilisateurModule {}