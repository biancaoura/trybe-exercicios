const wake = () => 'Aconrdando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (fn) => console.log(fn());

doingThings(wake);
doingThings(breakfast);
doingThings(sleep);
