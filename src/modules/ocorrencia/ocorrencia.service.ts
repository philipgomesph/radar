import { Injectable } from '@nestjs/common';
import {
  CreateOcorrenciaDto,
  ICreateOcorrenciaDto,
} from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class OcorrenciaService {
  constructor(private prisma: PrismaService) {}

  async create(data: ICreateOcorrenciaDto) {
    const ocorrencia = await this.prisma.ocorrenciaModel.create({
      data: {
        name: data.name,
        description: data.description,
        lat: data.lat,
        lng: data.lng,
      },
    });
    return ocorrencia;
  }

  findAll() {
    return this.prisma.ocorrenciaModel.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} ocorrencia`;
  }

  update(id: number, updateOcorrenciaDto: UpdateOcorrenciaDto) {
    return `This action updates a #${id} ocorrencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} ocorrencia`;
  }
}
