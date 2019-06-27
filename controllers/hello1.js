export const helloa = {
    method: 'GET',
    path: '/helloa',
    handler: (request, h) => {

        return 'Hello World! A!';
    }
};

export const hellob = {
    method: 'GET',
    path: '/hellob',
    handler: (request, h) => {

        return 'Hello World! B!';
    }
};