const page404 = require('../pages/404')
const controller = {}


controller.index = (req, res)=>{
    res.send('Hello from the controller...')
    // res.render();
}
controller.info = (req, res)=>{
    // res.sendFile(__dirname,'./pages/404.js')
//main-section
    res.render(page404, document.getElementById('main-section'));
}

module.exports = controller; 