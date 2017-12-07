import runTests from '../tests_gen';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { ReduxCache } from 'apollo-cache-redux';

// runTests(InMemoryCache);
runTests(ReduxCache);
