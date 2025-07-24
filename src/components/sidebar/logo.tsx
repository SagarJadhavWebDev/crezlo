import Link from "next/link";
interface LogoProps {
  imageUrl: string;
  label: string;
}
export default function Logo({ imageUrl, label }: LogoProps) {
  return (
    <Link className="block" href="/">
      <img
        src={
          imageUrl ??
          "https://app.crezlo.com/_next/static/media/cq-light.ffbf1233.png"
        }
        // src={pathname==="/" || pathname?.includes("features")? lightLogo.src : theme === "dark" ? lightLogo.src : lightLogo.src}
        style={{
          objectFit: "cover",
        }}
        width={150}
        height={150}
      />
    </Link>
  );
}
