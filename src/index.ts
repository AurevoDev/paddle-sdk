import dotenv from "dotenv";
dotenv.config();

const { CLIENT_ID, APP_SECRET, BASE_URL } = process.env;

let API_BASE_URL: string = "";

function check_values() {
    if (!CLIENT_ID) {
        console.error("[ERROR]: `CLIENT_ID` env is missing.");
        process.exit(1)
    };

    if (!APP_SECRET) {
        console.error("[ERROR]: `APP_SECRET` env is missing.")
        process.exit(1)
    };

    if (process.env.NODE_ENV === "development") {
        console.warn("[WARN] Running on development environment.");
        API_BASE_URL = "https://api-m.sandbox.paypal.com";
    }

    API_BASE_URL = "https://api-m.paypal.com";
};

check_values();

export default {};