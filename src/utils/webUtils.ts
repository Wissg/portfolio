export const getBaseUrl = (): string => {
  // Check if NEXT_PUBLIC_APP_URL environment variable is defined
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  // Check if VERCEL_URL environment variable is defined
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Default to localhost if no environment variable is defined
  return 'http://localhost:3000';
};
