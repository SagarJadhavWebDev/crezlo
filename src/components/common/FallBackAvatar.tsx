import React, { useState } from "react";
import { getFullImageUrl, getInitialsFromEmail } from "../../utils";
interface FallBackAvatarProps {
  email: string | any;
  profilePicture: string | any;
  size: number;
}
export const FallBackAvatar: React.FC<FallBackAvatarProps> = ({ email, profilePicture, size = 40 }) => {
  const [imageError, setImageError] = useState(false);
  const styles = {
    width: size,
    height: size,
    borderRadius: "50%",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: size * 0.4,
    fontWeight: "bold",
    overflow: "hidden",
  };

  return profilePicture && !imageError ? (
    <img src={getFullImageUrl(profilePicture)} alt="Profile" style={{ ...styles, objectFit: "cover" }} onError={() => setImageError(true)} />
  ) : (
    <div style={styles} className="bg-indigo-500 ">
      {getInitialsFromEmail(email ?? "C")}
    </div>
  );
};
