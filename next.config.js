module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'commondatastorage.googleapis.com',
          port: '',
          pathname: '/gtv-videos-bucket/sample/images/**',
        },
        {
          protocol: 'https',
          hostname: 'fx-lms.onrender.com',
          port: '',
          pathname: '/user-images/**',
        },
        {
          protocol: 'https',
          hostname: 'fx-lms.onrender.com',
          port: '',
          pathname: '/courses/**',
        },
      ],
    },
  }