import axios from "axios";
import BASE_URL from "./index";

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

    return axios(config)
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

    return axios(config)
  } catch (e) {
    return e;
  }
};

export default {
  create,
  get,
};
