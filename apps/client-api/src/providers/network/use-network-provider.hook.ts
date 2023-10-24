import {
  NetworkProviderOptions,
  NetworkProviderOptionsSchema,
} from '../../user-config';
import { memoize } from '../../utils';

const DEFAULT = NetworkProviderOptionsSchema.parse({});

export const useNetworkProvider = memoize(
  (options: NetworkProviderOptions = DEFAULT) => {
    return {
      variables: {
        xx: '',
      },
      commands: {},
    };
  },
);