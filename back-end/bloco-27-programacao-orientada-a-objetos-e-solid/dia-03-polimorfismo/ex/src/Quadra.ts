import IAgenda from './interfaces/IAgenda';

export default abstract class Quadra{
  protected abstract reservar<T>(data: Date): IAgenda<T>;
}
