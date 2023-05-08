import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdatecommandeDto } from './dto/update-commande.dto';
import { Commande,CommandeDocument } from '../schema/commande.schema';

@Injectable()
export class CommandeService {

  constructor(@InjectModel(Commande.name) private readonly commandeModel: Model < CommandeDocument > ) {}

  async create(createcommandeDto: CreateCommandeDto): Promise < CommandeDocument > {
    const cmd = new this.commandeModel(createcommandeDto);
    console.log(cmd);
    return cmd.save();
  }

  async findAll(): Promise < CommandeDocument[] > {
    console.log(this.commandeModel.find().exec());
    return this.commandeModel.find().exec();
  }

  async findOne(id: string) {
    console.log(this.commandeModel.findById(id));
    return this.commandeModel.findById(id);
  }

  async update(id: string, updatecommandeDto:UpdatecommandeDto ): Promise < CommandeDocument > {
    console.log(this.commandeModel.findByIdAndUpdate(id, updatecommandeDto));
    return this.commandeModel.findByIdAndUpdate(id, updatecommandeDto);
  }

  async remove(id: string) {
    console.log(this.commandeModel.findByIdAndRemove(id));
    return this.commandeModel.findByIdAndRemove(id);
  }
}