/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URL: "mongodb://127.0.0.1:27017/hotelapp"
  }
}

module.exports = nextConfig
