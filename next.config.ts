/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ugsqqbopiurqmwxivwgs.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/portfolio-pics/**',
      },
    ],
  },
};

export default nextConfig;