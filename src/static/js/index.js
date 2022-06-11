// import Dashboard from './views/Dashboard';


// const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
};

const router = async ()=>{
    const routes = [
        {   path : "/",
            // view: Dashboard
            view: ()=> console.log('dashboard')
        },
        {
            path : '/posts',
            view: ()=> console.log('Posts')
        },
        {
            path : '/settings',
            view: ()=> console.log('settings')
        },
        
    ];

    //Test each route for potential match
    const matchRoutes = routes.map(route => {
        return { // return an object
            route:  route,
            isMatch: location.pathname === route.path //boolean
            /*
            Toma la ruta solicitada o actual en HTML y la compara
            con el objeto routes
            */
        };
    });
    
    let match = matchRoutes.find(routeMatch => routeMatch.isMatch);
    // match find that one that is true
    if(!match){
        match = {
            route: routes[0], // if there is not a match, it goes to index
            isMatch: true            
        };
    }
    
    console.log(match);
    // const view = new match.route.view();
    // document.querySelector("#app").innerHTML = await view.getHtml();
    //match.route.view() put all the routes wit true and false
};

window.addEventListener('popstate', router);


document.addEventListener('DOMContentLoaded',()=>{
    document.body.addEventListener('click', clickEvent => {
        /*Si el click que doy coincide con data-link busca el href*/
        if (clickEvent.target.matches('[data-link]')) {
            clickEvent.preventDefault();
            navigateTo(clickEvent.target.href);     
        }
    });
    router();
});