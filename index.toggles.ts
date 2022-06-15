import Koa from "koa";
import { initialize, isEnabled } from "unleash-client";

const unleash = initialize({
    appName: "technodrinks",
    customHeaders: {
        Authorization: '56907a2fa53c1d16101d509a10b78e36190b0f918d9f122d'
    },
    environment: process.env.NODE_ENV || "development",
    instanceId: "Wk6yKNfcGkfcY1ibShL6",
    url: "https://app.unleash-hosted.com/demo/api/",
});

const app = new Koa();
app.use(async (ctx) => {
    ctx.body = `Hello ${isEnabled("beer") ? "Techno-Drinks" : "Sherbrooke"}!\n`;
});

app.listen(3333, () => console.log("listening"));

unleash.on("synchronized", () => console.log(`Synchronized. beer: ${isEnabled("beer")}`));