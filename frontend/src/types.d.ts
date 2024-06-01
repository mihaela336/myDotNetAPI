export interface ChargingSession {
    id: number;
    stationId: number;
    userId: string;
    sessionStart:string;
    sessionEnd: string;
    chargingTime: string;
    kwhDelivered: number;

    
}

export interface PaymentPlan {
    id: number;
    planType: string;
}
export interface Station {
    id: int;
    name: string;
    status: string;
    adress: string;
}

export interface Transaction {
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

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    adress: string;
    transactions: any[];
}

export interface Vehicle {
    id: number;
    userId: string;
    addedOn: string;
    producer: string;
    model: string;

}



