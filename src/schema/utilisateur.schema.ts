import { Prop,Schema,SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UtilisateurDocument = Utilisateur & Document;
//la table des utilisateurs
@Schema()
export class Utilisateur {
  @Prop()
  id_utilisateur: string;
  @Prop()
  nom: string;
  @Prop()
  email: string;
  @Prop({ default: Date.now })
  date_inscription: Date;
}

export const UtilisateurSchema = SchemaFactory.createForClass(Utilisateur);