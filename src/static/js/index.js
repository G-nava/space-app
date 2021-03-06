import Dashboard from './views/Dashboard.js';
import Settings from './views/Settings.js';
import PostsView from './views/PostsView.js';
import Posts from './views/Posts.js';

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]] ;
    }));
    // return {};
};

const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
};

const router = async ()=>{
    // console.log(pathToRegex('/posts/:id'));     
    const routes = [
        {   path : "/", view: Dashboard},
        {   path : '/posts', view: Posts},  // view: ()=> console.log('Posts')
        {   path : '/posts/:id', view: PostsView},  // view: ()=> console.log('Posts')
        {   path : '/settings', view: Settings }
        
    ];

    //Test each route for potential match
    const matchRoutes = routes.map(route => {
        return { // return an object
            route:  route,
            result: location.pathname.match(pathToRegex(route.path))
            // isMatch: location.pathname === route.path //boolean
            /*
            Toma la ruta solicitada o actual en HTML y la compara
            con el objeto routes
            */
        };
    });
    
    let match = matchRoutes.find(routeMatch => routeMatch.result !== null);
    // match find that one that is true
    if(!match){
        match = {
            route: routes[0], // if there is not a match, it goes to index aka dashboard 
            result: [location.pathname]            
        };
    }

    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();
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