var Copier = require('./Copier.js');


const src = { a: 'b', c: { d: 'e', f: ['g', { h: 'i' }] } };

const app = new Copier(src);


let clone = app.copy();
console.log(clone);
console.log(clone == src);

app.get()
    .then(resolve => console.log(resolve));

app.delete()
    .catch(err => console.log(err));

