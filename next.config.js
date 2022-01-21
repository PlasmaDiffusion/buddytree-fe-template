module.exports = {
  images: {
    domains: [
      'buddytree-image-store.s3.us-east-2.amazonaws.com',
      'buddytree-image-store.s3.amazonaws.com',
      'bt-topic.s3.us-east-2.amazonaws.com',
      's3.us-east-2.amazonaws.com',
      'i.ytimg.com',
      'img.youtube.com',
    ],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/profile/onboarding',
        destination: '/profile/onboarding/1',
        permanent: true,
      },
    ];
  },
};
