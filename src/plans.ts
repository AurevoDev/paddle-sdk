import axios from "axios";
import BASE_URL from "./index";

async function listPlans() {
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

async function createPlan(data: createPlanInterface) {
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

async function updatePlan(data: updateInterface, id: string) {
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

export default { listPlans, createPlan, updatePlan };
