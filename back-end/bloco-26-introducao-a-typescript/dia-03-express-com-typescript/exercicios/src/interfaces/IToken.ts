export default interface IToken {
  payload: {
    id: number;
    name: string;
    email: string;
    password: string;
  };
  iat: number;
  exp: number;
}