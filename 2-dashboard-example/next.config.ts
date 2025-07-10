import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", 
        hostname: "images.unsplash.com"
      ,
    },{
      protocol:"https",
      hostname:"raw.githubusercontent.com"
    }
      ]
    },
  /* config options here */
};

export default nextConfig;        ///test
            
        // This is a Next.js configuration file that sets up remote image patternsdddd.  