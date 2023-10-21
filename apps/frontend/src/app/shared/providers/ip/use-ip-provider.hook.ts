import axios from 'axios';
import { onCleanup } from 'solid-js';
import { createStore } from 'solid-js/store';

import { memoize } from '../../utils';
import { IpProviderConfig } from '../../user-config';
import { IpInfoApiResponse } from './ip-info-api-response.model';

export const useIpProvider = memoize((config: IpProviderConfig) => {
  const [ipVariables, setIpVariables] = createStore({
    ip_address: '',
    city: '',
    country: '',
    latitude: '',
    longitude: '',
    is_loading: true,
    is_refreshing: false,
  });

  refresh();
  const interval = setInterval(() => refresh(), 60 * 1000);
  onCleanup(() => clearInterval(interval));

  async function refresh() {
    // Use https://ipinfo.io as provider for IP-related info.
    const { data } = await axios.get<IpInfoApiResponse>(
      'https://ipinfo.io/json',
    );

    setIpVariables({
      ip_address: data.ip,
      city: data.city,
      country: data.country,
      latitude: data.loc.split(',')[0],
      longitude: data.loc.split(',')[1],
      is_loading: false,
      is_refreshing: false,
    });
  }

  return {
    variables: ipVariables,
    commands: {
      refresh,
    },
  };
});