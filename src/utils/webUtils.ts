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

export const getTheme = (
	theme: string | undefined,
	systemTheme: "light" | "dark" | undefined
): "light" | "dark" => {
	if (theme === "light" || (theme === "system" && systemTheme === "light")) {
		return "light";
	} else if (
		theme === "dark" ||
		(theme === "system" && systemTheme === "dark")
	) {
		return "dark";
	} else {
		// Default to light theme if none of the conditions match
		return "light";
	}
};
