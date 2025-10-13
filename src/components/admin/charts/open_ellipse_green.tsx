import Image from "next/image";

export default function OpenEllipseGreen({
  size = 130,          // controls width/height of the container
  bgColor = "#22c55e", // default: Tailwind green-500
  text = "4500",         // default text inside the circle
  textColor = "#ffffff", // color of the text
  imageSrc = "/images/green_ellipse.svg", // ellipse image
  imageSize = 90      // image size (height)
}) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* The main circle */}
      <div
        className="absolute rounded-full flex items-center justify-center shadow-md mr-4"
        style={{
          width: size * 0.4,
          height: size * 0.4,
          backgroundColor: bgColor,
          zIndex: 10,
        }}
      >
        <p
          className="text-sm font-semibold"
          style={{ color: textColor, padding: "2px 6px", borderRadius: "4px" }}
        >
          {text}
        </p>
      </div>

      {/* The ellipse image */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          width: size,
          height: imageSize,
          zIndex: 5,
        }}
      >
        <Image
          alt="open ellipse"
          src={imageSrc}
          fill
          style={{ objectFit: "contain" }}
          sizes={`${size}px`}
        />
      </div>
    </div>
  );
}
