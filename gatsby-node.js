exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "https://mellado.me/*",
    toPath: "https://marcos.mellado.me/:splat",
    statusCode: "301!",
    isPermanent: true,
  });
};
