import axios from "axios";
import BASE_URL from "./index";

declare interface IcreateOrder {
  intent: "CAPTURE" | "AUTHORIZE",
  purchase_units: object[],
  application_context: object,
}

const create = async (data: IcreateOrder) => {
  try {
    const config = {
      method: "POST",
      url: `${BASE_URL}/v2/checkout/orders;`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.APP_SECRET}`,
      },
      data: data,
    };

    return await axios(config)
  } catch (e) {
    return e;
  }
};

const get = async (id: any) => {
  try {
    const config = {
      method: "GET",
      url: `${BASE_URL}/v2/checkout/orders/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.APP_SECRET}`,
      },
    };

    return await axios(config)
  } catch (e) {
    return e;
  }
};

declare interface IAuthorizePayment {
  "PayPal-Auth-Assertion": string,
  "PayPal-Client-Metadata-Id": string,
  "PayPal-Request-Id": string
  "Prefer": string
}

const authorize = async (id: any, payment_source: string, headers: IAuthorizePayment) => {
  try {
    const config = {
      method: "PATCH",
      url: `/v2/checkout/orders/${id}/authorize`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.APP_SECRET}`,
        "PayPal-Auth-Assertion": headers["PayPal-Auth-Assertion"],
        "PayPal-Client-Metadata-Id": headers["PayPal-Client-Metadata-Id"],
        "PayPal-Request-Id": headers["PayPal-Request-Id"],
        "Prefer": headers.Prefer,
      },
    }
    return await axios(config)
  } catch (e) {
    return e;
  }
}

declare interface ICapturePayment {
  "PayPal-Auth-Assertion": string,
  "PayPal-Client-Metadata-Id": string,
  "PayPal-Request-Id": string
  "Prefer": string
}

const capture_payment = async (id: any, headers: ICapturePayment) => {
  try {
    const config = {
      method: "POST",
      url: `/v2/checkout/orders/${id}/capture`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.APP_SECRET}`,
        "PayPal-Auth-Assertion": headers["PayPal-Auth-Assertion"],
        "PayPal-Client-Metadata-Id": headers["PayPal-Client-Metadata-Id"],
        "PayPal-Request-Id": headers["PayPal-Request-Id"],
        "Prefer": headers.Prefer,
      },
    }
    return await axios(config)
  } catch (e) {
    return e;
  }
}

export default {
  create,
  get,
  authorize,
  capture_payment,
};
