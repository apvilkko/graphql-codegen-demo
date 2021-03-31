module.exports = function (api) {
  api.cache(true)
  return {
    extends: '../.babelrc',
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [],
  }
}
