import Image from "next/image";

export default function CustomImage({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}) {
  return (
    <figure>
      <Image src={src} alt={alt} width={width} height={height} />
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
