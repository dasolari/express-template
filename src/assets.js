let manifest;

try {
  // eslint-disable-next-line global-require,import/no-unresolved
  manifest = require('../build/assets/manifest.json');
} catch (err) {
  // noop
}

export default function assetsBuilder(developmentMode) {
  function assetPath(path) {
    return (!developmentMode && manifest && manifest[path]) || `/assets/${path}`;
  }
  return function assets(req, res, next) {
    res.locals.assetPath = assetPath;
    return next();
  };
}
