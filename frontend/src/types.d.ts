export interface Station {
    id: int;
    name: string;
    status: string;
    adress: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    adress: string;
    transactions: any[];
}

interface Transaction {
    id: string;
    chargingSessionId: number;
    createdOn: string;
    kwhPrice: number;
    kwhTotal: number;
    overchargeHour: number;
    overchargeTotal: number;
    vat: number;
    total: number;
}