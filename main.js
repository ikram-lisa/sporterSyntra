// import "./style.scss";

import Sporter from "./classes/Sporter.js";

const sprt1 = new Sporter("david", 42);
const sprt2 = new Sporter("Ikram", 27);
const sprt3 = new Sporter("Kristien", 30);

sprt1.train("swimmin", 1, 60);
sprt1.train("swimmin", 1, 60);
sprt1.train("swimmin", 1, 60);
sprt1.train("cyclin", 20, 45);
sprt1.train("cyclin", 20, 45);
sprt1.train("swimmin", 1, 60);

sprt2.train("swimmin", 1, 60);
sprt2.train("swimmin", 1, 60);

sprt3.train("swimmin", 1, 60);
console.log(sprt1.getTotalDistance());
console.log(sprt2.getTotalDistance());
console.log(sprt3.getTotalDistance());
