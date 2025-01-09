/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    if (config.plugins) {
      config.plugins.push(
        new config.webpack.IgnorePlugin({
          resourceRegExp: /^(pino-pretty|encoding)$/,
        })
      );
    }
    
    return config;
  },
}

module.exports = nextConfig
