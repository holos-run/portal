import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';

export const authModuleHolosProxyProvider = createBackendModule({
  pluginId: 'auth',
  moduleId: 'holos-proxy-provider',
  register(reg) {
    reg.registerInit({
      deps: { logger: coreServices.logger },
      async init({ logger }) {
        logger.info('Hello World!');
      },
    });
  },
});
