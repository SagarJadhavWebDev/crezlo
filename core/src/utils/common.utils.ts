export const getFullImageUrl = (imagePath: string | any): string | null => {
  const baseUrl = process.env.NEXT_PUBLIC_AWS_URL as string;
  return imagePath ? `${baseUrl}${imagePath}` : null;
};

export const getInitialsFromEmail = (email) => {
  if (!email) return "";

  const localPart = email.split("@")[0]; // "sagar" or "sagar.jadhav"
  const parts = localPart.split("."); // ["sagar"] or ["sagar", "jadhav"]

  const firstInitial = parts[0]?.charAt(0).toUpperCase() || "";
  const lastInitial = parts[1]?.charAt(0).toUpperCase() || "";

  return lastInitial ? `${firstInitial}${lastInitial}` : `${firstInitial}`;
};


export const getIframeDocument = () => {
  const iframe = document.getElementById("preview-frame");
  if (iframe) {
    return iframe?.contentDocument || iframe?.contentWindow?.document;
  }
  return document;
};