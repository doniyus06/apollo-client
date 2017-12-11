import { QueryManager } from '../../src/core/QueryManager';

import { mockSingleLink, MockedResponse } from './mockLinks';

import { DataStore } from '../../src/data/store';
// import { InMemoryCache as Cache } from 'apollo-cache-inmemory';
// import { ReduxCache as Cache } from 'apollo-cache-redux';
import { NullCache as Cache } from 'apollo-cache-null';

// Helper method for the tests that construct a query manager out of a
// a list of mocked responses for a mocked network interface.
export default (...mockedResponses: MockedResponse[]) => {
  return new QueryManager({
    link: mockSingleLink(...mockedResponses),
    store: new DataStore(new Cache({ addTypename: false })),
  });
};
