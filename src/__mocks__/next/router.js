module.exports = {
  useRouter() {
    return {
      push: jest.fn(),
      locale: 'en',
      locales: ['en'],
      defaultLocale: 'en',
    };
  },
};
