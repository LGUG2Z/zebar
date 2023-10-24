import { z } from 'zod';

import { ActiveWindowProviderConfigSchema } from './providers/active-window-provider-config.model';
import { BatteryProviderConfigSchema } from './providers/battery-provider-config.model';
import { CpuProviderConfigSchema } from './providers/cpu-provider-config.model';
import { DateTimeProviderConfigSchema } from './providers/date-time-provider-config.model';
import { GlazewmProviderConfigSchema } from './providers/glazewm-provider-config.model';
import { IpProviderConfigSchema } from './providers/ip-provider-config.model';
import { MemoryProviderConfigSchema } from './providers/memory-provider-config.model';
import { NetworkProviderConfigSchema } from './providers/network-provider-config.model';
import { SystemTrayProviderConfigSchema } from './providers/system-tray-provider-config.model';
import { WeatherProviderConfigSchema } from './providers/weather-provider-config.model';
import { Prettify } from '../../../utils';

export const ProviderConfigSchema = z.union([
  ActiveWindowProviderConfigSchema,
  BatteryProviderConfigSchema,
  CpuProviderConfigSchema,
  DateTimeProviderConfigSchema,
  GlazewmProviderConfigSchema,
  IpProviderConfigSchema,
  MemoryProviderConfigSchema,
  NetworkProviderConfigSchema,
  SystemTrayProviderConfigSchema,
  WeatherProviderConfigSchema,
]);

export type ProviderConfig = Prettify<z.infer<typeof ProviderConfigSchema>>;