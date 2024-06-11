import { OidcProxyResult } from './types';

/**
 * Available sign-in resolvers for the auth provider.
 *
 * @public
 */
export declare namespace oidcProxySignInResolvers {
    /**
     * singInWithoutCatalogUser signs the user in without requiring a pre-existing
     * User entity in the catalog.  Refer to
     * https://backstage.io/docs/auth/identity-resolver/#sign-in-without-users-in-the-catalog
     */
    const signInWithoutCatalogUser: import("@backstage/plugin-auth-node").SignInResolverFactory<OidcProxyResult, unknown>;

    /**
     * emailMatchingUserEntityProfileEmail matches the id token email claim to
     * the catalog User entity spec.profile.email field.
     */
    const emailMatchingUserEntityProfileEmail: import("@backstage/plugin-auth-node").SignInResolverFactory<OidcProxyResult, unknown>;
}
