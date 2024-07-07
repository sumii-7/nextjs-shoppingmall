/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lsorhfagfjkgholqszou.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
