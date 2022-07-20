
const detectRegex = path => new RegExp('^'+ path.replace(/\//g, '\\/').replace(/:\w+/g, '.+') + '$');


const r = '/post/5'

const ruta =[
    {path: '/post/:id'}

]; 
   
 
console.log(r.match(/^\/post\/.+$/));

console.log(detectRegex('/post/name/:id/:id/:id'));