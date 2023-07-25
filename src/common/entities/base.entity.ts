import { Timestamps } from './timestamp.entity';

export class BaseEntity extends Timestamps {
  id!: number;
}
