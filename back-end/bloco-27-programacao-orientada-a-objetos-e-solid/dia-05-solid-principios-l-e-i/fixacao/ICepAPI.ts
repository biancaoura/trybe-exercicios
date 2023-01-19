export default interface ICepAPI {
  getAddressByCEP(cep: string, num: number): Promise<string>;
  getCepByAddress(address: string, num: number): Promise<string>;
}