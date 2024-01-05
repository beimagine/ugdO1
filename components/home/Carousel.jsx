import Image from "next/image";
import Link from "next/link";
import data from "@/data/data";

const Carousel = ({ params, images }) => {
  return (
    <div>
      {data.map((image, index) => {
        return (
          <div
            key={"landing-carousel-image-" + index}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "400px",
              aspectRatio: "3/4",
              background: image.bg,
            }}
          >
            <Link href={`${params.params.locales}/courses/${image.path}`}>
              <Image src={image.image} fill />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
