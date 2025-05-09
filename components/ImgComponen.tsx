import React from "react";
import Image, { ImageProps } from "next/image";
type ImgProps = Omit<ImageProps, "src" | "priority" | "loading"> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: "lazy" | "eager" | undefined;
  priority?: boolean | undefined;
};
const ImgComponent: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading,
  priority,
  ...rest
}) => {
  return (
    <Image
      priority={priority}
      loading={loading}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...rest}
    />
  );
};

export default ImgComponent;
