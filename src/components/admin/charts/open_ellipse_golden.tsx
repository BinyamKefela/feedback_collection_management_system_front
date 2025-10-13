import Image from "next/image";

export default function OpenEllipseGolden({
  size = 100,          // controls width/height of the container
  bgColor = "#FEC007", // default: Tailwind green-500
  text = "1500",         // default text inside the circle
  textColor = "#ffffff", // color of the text
  imageSrc = "/images/golden_ellipse.svg", // ellipse image
  imageSize = 80       // image size (height)
}) {
  return (
    <div
      className="relative flex justify-center -mt-5"
      style={{ width: size, height: size }}
    >
      {/* The main circle */}
      <div
        className="absolute rounded-full flex items-center justify-center shadow-md mr-2.5 mt-9"
        style={{
          width: size * 0.6,
          height: size * 0.6  ,
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
