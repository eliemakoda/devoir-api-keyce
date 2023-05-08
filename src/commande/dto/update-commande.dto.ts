import { PartialType } from '@nestjs/mapped-types';
import { CreateCommandeDto } from './create-commande.dto';

export class UpdatecommandeDto extends PartialType(CreateCommandeDto) {}
