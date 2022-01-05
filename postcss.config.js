module.exports = (ctx) => {
  const { env } = ctx;

  console.log('\nPostCSS', { env });

  return {
    plugins: [require('autoprefixer')],
  };
};
