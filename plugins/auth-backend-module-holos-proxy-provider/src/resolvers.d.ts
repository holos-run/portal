import { OidcProxyResult } from './types';
/**
 * Available sign-in resolvers for the auth provider.
 *
 * @public
 */
export declare namespace oidcProxySignInResolvers {
    /**
     * Looks up the user by matching id token email claim to the
     * `openid.net/email` annotation of the backstage entity.
     *
     * Note, email addresses may be reused by different identities over time
     * within the scope of an issuer per the oidc specification.  Disable this
     * resolver if identities must be guaranteed unique over time.
     */
    const emailMatchingUserEntityAnnotation: import("@backstage/plugin-auth-node").SignInResolverFactory<OidcProxyResult, unknown>;
    /**
     * Looks up the user by matching the id token iss + sub to the
     * `openid.net/iss` and `openid.net/sub` annotations of the backstage entity.
     *
     * Note, this resolver method is the only method guaranteed by the oidc spec
     * to result in a unique resolution of an id token to a backstage entity over
     * time.  Email addresses may be reused within the scope of an issuer, subject
     * identifier may not be reused.
     */
    const idMatchingUserEntityAnnotation: import("@backstage/plugin-auth-node").SignInResolverFactory<OidcProxyResult, unknown>;
}
