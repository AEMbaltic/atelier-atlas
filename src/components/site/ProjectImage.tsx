import { type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string };

/**
 * All editorial imagery uses placeholder Unsplash photography.
 * Every <img> rendered through this component is flagged with data-replace="true"
 * so the client can swap real photography in later.
 */
export function ProjectImage({ className, ...props }: Props) {
  return (
    <img
      {...props}
      data-replace="true"
      loading="lazy"
      className={className}
    />
  );
}
