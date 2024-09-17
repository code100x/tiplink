/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  env: {
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
    AWS_CMK_ARN: process.env.AWS_CMK_ARN,
    PROJECT_ID: process.env.PROJECT_ID,
    LOCATION_ID: process.env.LOCATION_ID,
    KEY_RING_ID: process.env.KEY_RING_ID,
    KEY_ID: process.env.KEY_ID,
  },
}

export default nextConfig
