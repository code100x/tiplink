/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
