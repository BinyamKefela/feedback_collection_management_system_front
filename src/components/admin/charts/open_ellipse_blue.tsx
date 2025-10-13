import Image from "next/image";

export default function OpenEllipseBlue({
  size = 150,          //    controls width/height of the container
  bgColor = "#131C98", // default: Tailwind green-500
  text = "5000",         // default text inside the circle
  textColor = "#ffffff", // color of the text
  imageSrc = "/images/blue_ellipse.svg", // ellipse image
  imageSize = 100       // image size (height)
}) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* The main circle */}
      <div
        className="absolute rounded-full flex items-center justify-center shadow-md mr-0.5 "
        style={{
          width: imageSize * 0.6,
          height: imageSize * 0.6,
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
