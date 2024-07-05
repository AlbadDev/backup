import path from 'path';
import { fileURLToPath } from 'url';

// Convert `__filename` and `__dirname` in an ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  images: {
    domains: [
      "127.0.0.1",
      "s3-alpha-sig.figma.com",
      "35.179.15.165:8000",
      "shorturl.at",
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  }
  // env: {
  //   NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  //   // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  //   // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  //   // GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  // },
};

export default nextConfig;



// import path from 'path';
// import { fileURLToPath } from 'url';

// // Convert `__filename` and `__dirname` in an ES module context
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const nextConfig = {
//   images: {
//     domains: [
//       "127.0.0.1",
//       "s3-alpha-sig.figma.com",
//       "35.179.15.165:8000",
//       "shorturl.at",
//     ],
//   },
//   webpack: (config, { isServer }) => {
//     config.resolve.alias['@'] = path.join(__dirname, 'src');
//     return config;
//   },
// };

// export default nextConfig;


