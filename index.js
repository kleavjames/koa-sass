const sassMiddleware = require('node-sass-middleware');

module.exports = function (options) {
  const sass = sassMiddleware(options);

  return (ctx, next) => {
    return new Promise((resolve, reject) => {
      sass.call(sass, ctx.req, ctx.res, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(next());
        }
      });
    });
  };
  
};