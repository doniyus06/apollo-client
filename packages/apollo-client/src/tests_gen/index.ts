import runApolloClient from './ApolloClient';
import runClient from './client';
import runFetchMore from './fetchMore';
import runGraphQLSubscription from './graphqlSubscriptions';
import runMutationResults from './mutationResults';
import runOptimistic from './optimistic';
import runSubscribeToMore from './subscribeToMore';

function runTests(implementation: any) {
  runApolloClient(implementation);
  // runClient(implementation);
  // runFetchMore(implementation);
  // runGraphQLSubscription(implementation);
  // runMutationResults(implementation);
  // runOptimistic(implementation);
  // runSubscribeToMore(implementation);
}

export default runTests;
