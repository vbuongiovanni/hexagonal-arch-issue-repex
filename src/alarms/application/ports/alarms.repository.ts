import { Alarm } from '../../domain/alarm';

// We are using abstract classes here instead of interfaces because we can use the abstract class
// as an injection token. This isn't possible with interfaces since it is purely a typescript construct.
// Note that the implementation is carried out by the port.
export abstract class AlarmRepository {
  abstract findAll(): Promise<Alarm[]>;
  abstract save(alarm: Alarm): Promise<Alarm>;
}
