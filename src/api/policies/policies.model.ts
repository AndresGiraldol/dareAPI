export interface ClientPolicie extends Object{
    id: string;
    amountInsured: string;
    inceptionDate: string;
}

export interface PolicieClientIndexed {
    [key: string]: ClientPolicie[];
}

export interface PolicieModel extends Array<Object> {
    id: string,
    amountInsured: string,
    email: string,
    inceptionDate: string,
    installmentPayment: boolean
}