import axios from "axios";
import BASE_URL from "./index";

async function list() {
  try {
    const config = {
      method: "GET",
      url: `${BASE_URL}/v1/billing/plans`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.APP_SECRET}`,
      },
    };

    return await axios(config);
  } catch (e) {
    console.log({
      type: e.type,
      message: e.message,
    });
  }
}

async function create(data: createPlanInterface) {
  try {
    const config = {
      method: "POST",
      url: `${BASE_URL}/v1/billing/plans`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.APP_SECRET}`,
      },
    };

    return await axios(config);
  } catch (e) {
    console.log({
      type: e.type,
      message: e.message,
    });
  }
}

async function update(data: updateInterface, id: string) {
  try {
    const config = {
      method: "PATCH",
      url: `${BASE_URL}/v1/billing/plans/${id}`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.APP_SECRET}`,
      },
    };

    return await axios(config);
  } catch (e) {
    console.log({
      type: e.type,
      message: e.message,
    });
  }
}

export default { list, create, update };
