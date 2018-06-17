import { InjectionToken } from '@angular/core';
import { ConnectionStatusConfig } from '../models/connection-status-config';

export const CONNECTION_STATUS_CONFIG = new InjectionToken<ConnectionStatusConfig>('ConnectionStatusConfig');
