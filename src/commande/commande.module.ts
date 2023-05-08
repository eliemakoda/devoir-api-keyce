import {Module} from '@nestjs/common';
import {CommandeService} from './commande.service';
import {CommandeController}from './commande.controller';
import {Commande,CommandeSchema} from '../schema/commande.schema';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
   MongooseModule.forFeature([
      {
        name: Commande.name,
        schema: CommandeSchema,
      },
   ])
  ],
  controllers: [CommandeController],
  providers: [CommandeService]
})
export class CommandeModule {}