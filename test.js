const assert = require('chai').assert;
const request = require('supertest');
const app = require('../app');

describe('GET /api/events', function() {
    it('responds with JSON', function(done) {
        request(app)
            .get('/api/events')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
