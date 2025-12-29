/**
 * Helper to get initials from name
 */
export const getInitials = (name?: string): string => {
  if (!name) return "";
  const parts = name.trim().split(" ").filter(Boolean);

  const firstName = parts[0];
  if (!firstName) return "";

  if (parts.length === 1) {
    return firstName.substring(0, 2).toUpperCase();
  }

  const lastName = parts[parts.length - 1];
  // We know lastName is defined because length > 1
  return (firstName[0] + (lastName?.[0] ?? "")).toUpperCase();
};

/**
 * Helper to deterministically pick a style index (1-5) based on name
 */
export const getStyleIndex = (name?: string) => {
  if (!name) return "default";
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = (Math.abs(hash) % 5) + 1;
  return index;
};
