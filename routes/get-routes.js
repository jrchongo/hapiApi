import requireDir from 'require-dir';

export function getRoutes() {
    /* Returns each controller's exported contents as an object
        {
            controller1: require('./controllers/controller1.js'),
            controller2: require('./controllers/controller2.js')
        }
    */
    const files = requireDir('../controllers');
    const routes = [];

    // Extract all routes from each controller.
    Object.keys(files).map((controller) => {
        Object.keys(files[controller]).forEach((route) => {
            routes.push(files[controller][route]);
        });
    });

    return routes;
}