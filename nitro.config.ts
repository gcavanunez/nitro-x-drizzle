//https://nitro.unjs.io/config
export default defineNitroConfig({
  timing: true,
  srcDir: "src",
  routeRules: {
    "/api/v1/**": {
      cors: true,
      headers: {
        "access-control-allow-methods": "*",
        "access-control-allow-origin": "*",
      },
    },
  },
});
