import React from "react";
import Image from "next/image";

interface ImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
};

export default Img;
