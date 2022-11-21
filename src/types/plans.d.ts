declare interface IcreatePlanInterface {
    billing_cycles: string[];
    name: string;
    payment_preferences: object;
    product_id: string;
    description: string;
    quantity_supported: boolean;
    status: 'CREATED' | 'ACTIVE' | 'INACTIVE';
    taxes: object,
}