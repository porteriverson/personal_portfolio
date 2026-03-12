/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vxxoyghhxvuwltfkegva.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/portfolio-photos/**',
      },
    ],
  },
};

export default nextConfig;
