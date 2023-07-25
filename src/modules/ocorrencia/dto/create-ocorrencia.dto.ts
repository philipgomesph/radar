export interface ICreateOcorrenciaDto {
  id?: number;
  name?: string;
  description?: string;
  lat: number;
  lng: number;
}

export class CreateOcorrenciaDto implements ICreateOcorrenciaDto {
  id?: number;
  name?: string;
  description?: string;
  lat: number;
  lng: number;
}
