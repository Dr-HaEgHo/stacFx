module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'commondatastorage.googleapis.com',
          port: '',
          pathname: '/gtv-videos-bucket/sample/images/**',
        },
      ],
    },
  }