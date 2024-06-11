import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';

import {
  authProvidersExtensionPoint,
  commonSignInResolvers,
  createProxyAuthProviderFactory,
} from '@backstage/plugin-auth-node';
import { createHolosProxyAuthenticator } from './authenticator';
import { oidcProxySignInResolvers } from './resolvers';

export const authModuleHolosProxyProvider = createBackendModule({
  pluginId: 'auth',
  moduleId: 'holos-proxy-provider',
  register(reg) {
    reg.registerInit({
      deps: {
        logger: coreServices.logger,
        providers: authProvidersExtensionPoint,
      },
      async init({ logger, providers }) {
        providers.registerProvider({
          providerId: 'holosProxy',
          factory: createProxyAuthProviderFactory({
            authenticator: createHolosProxyAuthenticator(logger),
            signInResolverFactories: {
              ...oidcProxySignInResolvers,
              ...commonSignInResolvers,
            },
          }),
        });
        logger.info('auth backend-module holos-proxy-provider initialized');
      },
    });
  },
});
