import Link from "next/link";
import Image from "next/image";

type BrandLogoProps = {
  href?: string;
  small?: boolean;
};

export function BrandLogo({ href = "/", small = false }: BrandLogoProps) {
  const width = small ? 280 : 430;
  const height = small ? 58 : 88;

  return (
    <Link href={href} className="inline-flex" aria-label="Decision Desk home">
      <Image
        src="/images/brand/logo-trimmed.png"
        alt="Decision Desk"
        width={width}
        height={height}
        unoptimized
        priority
      />
    </Link>
  );
}
