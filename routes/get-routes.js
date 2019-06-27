import requireDir from 'require-dir';

function getRoutesFromControllers(controllers) {
    const routes = [];
    Object.keys(controllers).map((controller) => {
        Object.keys(controllers[controller]).forEach((route) => {
            routes.push(controllers[controller][route]);
        });
    });
    return routes;
}

function requireAllControllers() {
    /* Example requireDir output:
       {
         controller1: require('./controllers/controller1.js'),
         controller2: require('./controllers/controller2.js')
       }
    */

    return requireDir('../controllers');
}

export function getRoutes() {
    const controllers = requireAllControllers();
    return getRoutesFromControllers(controllers);
}