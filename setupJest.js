const data = require('./__mocks__/fetchDataMock.js');

global.fetch = jest.fn().mockImplementation(() => Promise.resolve(Promise.resolve(data)));

