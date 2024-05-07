/** @type {import('next').NextConfig} */
const nextConfig = {
      output: 'standalone',

      // An exported build output, out directory, that only includes static HTML/CSS/JS. Useful for self-hosting without a Node.js server.
      // output: 'export',
 
      // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
      // trailingSlash: true,

      // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
      // skipTrailingSlashRedirect: true,

      // Optional: Change the output directory `out` -> `dist`
      // distDir: 'dist',
};

export default nextConfig;
