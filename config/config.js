import dot from "dotenv";

dot.config();

export const appConfig={
    port:process.env.PORT||3000,
    mongo_url:process.env.MONGO_URL
} 