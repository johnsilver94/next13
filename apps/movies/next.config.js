/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    deviceSizes: [640, 720, 1080, 1280, 1440, 1920, 2048, 2560, 3840],
		imageSizes: [48, 320, 480, 720, 1080, 1280, 1440, 1920],
    domains: ["image.tmdb.org"],
  },
}

module.exports = nextConfig
