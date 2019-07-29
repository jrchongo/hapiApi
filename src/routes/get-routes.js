import {readdirSync} from 'fs';
import {join} from 'path';

function getRoutesFromControllers(controllers) {
    const routes = [];
    Object.keys(controllers).map((controller) => {
        Object.keys(controllers[controller]).forEach((route) => {
            routes.push(controllers[controller][route]);
        });
    });

    return routes;
}

function requireAllControllers(relativePath) {
    const controllerPath = join(__dirname, relativePath);
    const fileNames = readdirSync(controllerPath);
    const controllers = fileNames.map((file) => {
        return require(`${controllerPath}/${file}`);
    });

    return controllers;
}

export function getRoutes(path) {
    const controllers = requireAllControllers(path);
    const routes = getRoutesFromControllers(controllers);

    return routes;
}