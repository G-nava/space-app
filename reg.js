
const detectRegex = path => new RegExp('^'+ path.replace(/\//g, '\\/').replace(/:\w+/g, '.+') + '$');


const r = '/post/2'

const ruta =[
    {path: '/post/:id'}

]; 


console.log(r.match(/^\/post\/.+$/));