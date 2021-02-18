const { app } = require('../app.js');
const { albums } = require('../data.js');

const supertest = require('supertest');

const request = supertest(app);

it('should respond with all albums',

    async (done) => {
        const expectation = {

            results: albums
        };

        const response = await request.get('/albums');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectation);
        done();
    });

it('should respond with the selected album',

    async (done) => {
        const expectation = {

            results: {
                id: 1,
                name: 'Channel Orange',
                image: 'channel-orange.jpg',
                description: 'The debut studio album by American R&B singer and songwriter Frank Ocean',
                category: 'Alternative R&B',
                price: 10,
            }
        };

        const response = await request.get('/albums/1');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectation);
        done();
    });