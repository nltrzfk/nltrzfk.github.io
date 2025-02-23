
import createMDX from '@next/mdx'
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true
  }
};


const withMDX = createMDX({})

export default withMDX(nextConfig);
