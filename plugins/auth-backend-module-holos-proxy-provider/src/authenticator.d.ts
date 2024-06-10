/** @public */
export declare const oidcProxyAuthenticator: import("@backstage/plugin-auth-node").ProxyAuthenticator<{
    oidcIdTokenHeader: string;
    tokenValidator: (token: string) => Promise<import("./types").IDTokenInfo>;
}, {
    idToken: import("./types").IDTokenInfo;
}, {
    idToken: import("./types").IDTokenInfo;
}>;
