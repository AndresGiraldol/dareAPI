import { ClientPolicie } from '../policies/policies.model';

export interface ClientModel {
    id: string,
    name: string,
    email: string,
    role: string,
    policies?: ClientPolicie[],
}