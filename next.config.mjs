/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "img.clerk.com" },
			{ hostname: "links.papareact.com" },
			{ hostname: "cloudflare-ipfs.com" },
			{ hostname: "i.kym-cdn.com" },
			{ hostname: "lh3.googleusercontent.com" },
			{ hostname: "firebasestorage.googleapis.com" },
			{ hostname: "avatars.githubusercontent.com" },
			{ hostname: "cdn.jsdelivr.net" },
		],
	},
};

export default nextConfig;
