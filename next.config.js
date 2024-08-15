/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['https://marandahighschool.ac.ke','https://images.unsplash.com','https://media.istockphoto.com',"https://plus.unsplash.com"],
    },
}

module.exports = nextConfig
