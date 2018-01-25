// import { InMemoryCache } from 'apollo-cache-inmemory';
// export default InMemoryCache;

import { ReduxCache } from 'apollo-cache-redux';
import {genStore} from "../core/common-test-stuff";

export function wrapReduxCache(config: any) {
    return new ReduxCache({ ...config, store: genStore(), })
}

