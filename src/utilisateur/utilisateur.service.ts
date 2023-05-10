import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur,UtilisateurDocument } from '../schema/utilisateur.schema';

@Injectable()
export class UtilisateurService {

  constructor(@InjectModel(Utilisateur.name) private readonly UtilisateurModel: Model < UtilisateurDocument > ) {}

  async create(createutilisateurDto: CreateUtilisateurDto): Promise < UtilisateurDocument > {
    const cmd = new this.UtilisateurModel(createutilisateurDto);
    console.log(cmd);
    return cmd.save();
  }

  async findAll(): Promise < UtilisateurDocument[] > {
    console.log(this.UtilisateurModel.find().exec());
    return this.UtilisateurModel.find().exec();
  }

  async findOne(id: string) {
    console.log(this.UtilisateurModel.findById(id));
    return this.UtilisateurModel.findById(id);
  }

  async update(id: string, updateutilisateurDto:UpdateUtilisateurDto ): Promise < UtilisateurDocument > {
    console.log(this.UtilisateurModel.findByIdAndUpdate(id, updateutilisateurDto));
    return this.UtilisateurModel.findByIdAndUpdate(id, updateutilisateurDto);
  }

  async remove(id: string) {
    console.log(this.UtilisateurModel.findByIdAndRemove(id));
    return this.UtilisateurModel.findByIdAndRemove(id);
  }
}