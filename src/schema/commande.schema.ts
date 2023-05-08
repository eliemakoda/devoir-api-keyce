import { Prop,Schema,SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommandeDocument = Commande & Document;

@Schema()
export class Commande {
  @Prop()
  id_utilisateur: string;
  @Prop()
  id_produit: string;
  @Prop()
  nom_produit: string;
  @Prop()
  qte_commande: string;
  @Prop()
  prix_unitaire: string;
  @Prop()
  montant_total: string;
  @Prop({ default: Date.now })
  date_ajout: Date;
}

export const CommandeSchema = SchemaFactory.createForClass(Commande);