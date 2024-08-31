type PlanStatus = "CREATED" | "INACTIVE" | "ACTIVE";
type PlanTenureType = "REGULAR" | "TRIAL";
type PlanPricingModel = "VOLUME" | "TIERED";
type PlanFrequencyInternalUnit = "DAY" | "WEEK" | "MONTH" | "YEAR";

interface CreatePlan {
  product_id: string;
  name: string;
  status?: PlanStatus;
  description?: string;
  billing_cycles: PlanBillingCycle[];
  quantity_supported?: boolean;
  payment_preferences: object;
  taxes?: PlanTax;
}

interface PlanBillingCycle {
  tenure_type: PlanTenureType;
  sequence: number;
  total_cycles: number;
  pricing_scheme?: PlanPricingScheme;
  frequency: {
    interval_unit: PlanFrequencyInternalUnit;
    interval_count?: number;
  };
}

interface PlanPricingScheme {
  pricing_model: PlanPricingModel;
  tiers: object[];
  fixed_price: object[];
}

interface PlanTax {
  inclusive: boolean;
  percentage: string;
}
