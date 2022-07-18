
const detectRegex = path => new RegEx('^'+ path.replace(/\//g, '\\/').replace(/:\w+/g, '.+') + '$');


const r = '/post/5'

const ruta =[
    {path: '/post/:id'}

]; 
   
 
console.log(r.match(/^\/post\/.+$/));