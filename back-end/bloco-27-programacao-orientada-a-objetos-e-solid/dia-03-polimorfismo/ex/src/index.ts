import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();

clube.adicionarQuadra(quadraFutebol);

const quadraFut = clube.buscarQuadra<QuadraFutebol>(0);
console.log(quadraFut);
const reservaFut = quadraFut.reservar(new Date('2024/01/10'));
console.log(reservaFut);

const quadraTenis = new QuadraTenis();

clube.adicionarQuadra(quadraTenis);

const quadraTen = clube.buscarQuadra<QuadraTenis>(1);
console.log(quadraTen);
const reservaTen = quadraTen.reservar(new Date('2023/05/23'));
console.log(reservaTen);