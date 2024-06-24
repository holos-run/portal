import { KeyLike } from 'jose';
import { IDTokenInfo } from './types';
export declare function createTokenValidator(iss: string, aud: string, providedJwks?: KeyLike | Uint8Array): (token: string) => Promise<IDTokenInfo>;
