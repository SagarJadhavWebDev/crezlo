import { getCookie, setCookie } from "./cookieManager";

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
    // @ts-ignore
    return iframe?.contentDocument || iframe?.contentWindow?.document;
  }
  return document;
};

export const toggleUpgardeModal = () => {
  const isOpen = getCookie("upgrade_modal") === "true";
  if (isOpen) {
    setCookie("upgrade_modal", "false");
  } else {
    setCookie("upgrade_modal", "true");
  }
};
