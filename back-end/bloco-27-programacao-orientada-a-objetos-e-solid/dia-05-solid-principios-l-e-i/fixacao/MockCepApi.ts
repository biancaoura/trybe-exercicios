import ICepAPI from "./ICepAPI";

export default class MockCepApi implements ICepAPI{
  async getAddressByCEP(cep: string, num: number): Promise<string> {
    return `The mock address for "cep:${cep}, n°:${num}" is "mock address"`;
  }
  async getCepByAddress(address: string, num: number): Promise<string> {
    return `The mock cep for: "${address}, n°:${num}" is "mock cep"`;
  }
}