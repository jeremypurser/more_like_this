const request = require('supertest');
const app = require('../server');

xdescribe('GET /movies', () => {
  test('should return an array', async () => {
    const response = await request(app).get('/movies');
    expect(response.body instanceof Array).toBe(true);
  });
});

xdescribe('GET /movies', () => {
  test('response array lenght === 12', async () => {
    const response = await request(app).get('/movies');
    expect(response.body.length).toBe(12);
  });
});
