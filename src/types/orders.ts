interface CreateOrderRequest {
  intent: OrderIntent;
  purchase_units: PurchaseUnit[];
  application_context?: ApplicationContext;
}

type OrderIntent = "CAPTURE" | "AUTHORIZE";

interface PurchaseUnit {
  reference_id?: string;
  amount: Amount;
  payee?: Payee;
  payment_instruction?: PaymentInstruction;
  description?: string;
  custom_id?: string;
  invoice_id?: string;
  soft_descriptor?: string;
  items?: Item[];
  shipping?: Shipping;
}

interface Amount {
  currency_code: string;
  value: string;
  breakdown?: AmountBreakdown;
}

interface AmountBreakdown {
  item_total?: Money;
  shipping?: Money;
  handling?: Money;
  tax_total?: Money;
  insurance?: Money;
  shipping_discount?: Money;
  discount?: Money;
}

interface Money {
  currency_code: string;
  value: string;
}

interface Payee {
  email_address?: string;
  merchant_id?: string;
}

interface PaymentInstruction {
  platform_fees?: PlatformFee[];
  disbursement_mode?: "INSTANT" | "DELAYED";
}

interface PlatformFee {
  amount: Money;
  payee?: Payee;
}

interface Item {
  name: string;
  unit_amount: Money;
  quantity: string;
  description?: string;
  sku?: string;
  category?: "DIGITAL_GOODS" | "PHYSICAL_GOODS" | "DONATION";
  tax?: Money;
  url?: string;
  image_url?: string;
}

interface Shipping {
  name?: ShippingName;
  type?: "SHIPPING" | "PICKUP";
  address?: Address;
}

interface ShippingName {
  full_name?: string;
}

interface Address {
  address_line_1: string;
  address_line_2?: string;
  admin_area_2: string;
  admin_area_1: string;
  postal_code: string;
  country_code: string;
}

interface ApplicationContext {
  brand_name?: string;
  locale?: string;
  landing_page?: "LOGIN" | "BILLING" | "NO_PREFERENCE";
  shipping_preference?:
    | "GET_FROM_FILE"
    | "NO_SHIPPING"
    | "SET_PROVIDED_ADDRESS";
  user_action?: "CONTINUE" | "PAY_NOW";
  payment_method?: PaymentMethod;
  return_url?: string;
  cancel_url?: string;
}

interface PaymentMethod {
  payer_selected?: "PAYPAL" | "PAYPAL_CREDIT";
  payee_preferred?: "UNRESTRICTED" | "IMMEDIATE_PAYMENT_REQUIRED";
}
