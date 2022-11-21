declare interface createPlanInterface {
    billing_cycles: string[];
    name: string;
    payment_preferences: object;
    product_id: string;
    description: string;
    quantity_supported: boolean;
    status: createPlanStatusEnum;
    taxes: object,
}

declare enum createPlanStatusEnum {
    CREATED,
    ACTIVE,
    INACTIVE
}

declare interface updateInterface {

}