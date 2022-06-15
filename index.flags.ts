import Koa from "koa";

const app = new Koa();
app.use(async (ctx) => {
    ctx.body = `Hello ${process.env.NODE_ENV === 'production' ? "Prod" : "Dev"}!\n`;
});

app.listen(3333, () => console.log("listening"));