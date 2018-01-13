let pluginList = [
  require('lost'),
  require('autoprefixer')({browsers: ['> 2%', 'IE 10', 'iOS >= 7']})];

if (process.env.NODE_ENV === 'production') {
  pluginList.push(
    require('css-mqpacker')({ sort: true }),
    require('cssnano'));
}
if (process.env.NODE_ENV === 'development') {
  pluginList.push(
    require('cssnano')({
      normalizeWhitespace: { add: false },
      reduceIdents: false,
    }));
}

module.exports = {
  plugins: pluginList,
};
