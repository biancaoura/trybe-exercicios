import IAgenda from './interfaces/IAgenda';
import IFutebol from './interfaces/IFutebol';
import Quadra from './Quadra';
import normasDeUso from './normas/normasDeUso';

export default class QuadraFutebol extends Quadra{
  public regrasFutebol: IFutebol = normasDeUso.futebol;

  public reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);

    return {
      protocolo,
      data,
      regras: this.regrasFutebol as IFutebol,
    }
  }
}