import {expect} from 'chai';
import {getRoutes} from '../../src/routes/get-routes';
import {dummyEndPoint1, dummyEndpoint2} from './controllers/controller1';
import {dummyEndpoint3} from './controllers/controller2';

describe('Get Routes', () => {
    let actual,
        givenPath,
        expectedRoutes;

    beforeEach(() => {
        givenPath = ('../../test/unit/controllers');
        expectedRoutes = [dummyEndPoint1, dummyEndpoint2, dummyEndpoint3];

        actual = getRoutes(givenPath);
    });

    it('should build an array of routes from the given path', () => {
        expect(actual).to.eql(expectedRoutes);
    });
});