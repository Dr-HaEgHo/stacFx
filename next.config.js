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
          protocol: 'http',
          hostname: 'fx-lms.onrender.com',
          port: '',
          pathname: '/user-images/**',
        },
        {
          protocol: 'http',
          hostname: 'fx-lms.onrender.com',
          port: '',
          pathname: '/courses/**',
        },
        {
          protocol: 'http',
          hostname: 'fx-lms-1.onrender.com',
          port: '',
          pathname: '/user-images/**',
        },
        {
          protocol: 'http',
          hostname: 'fx-lms-1.onrender.com',
          port: '',
          pathname: '/courses/**',
        },
      ],
    },
  }