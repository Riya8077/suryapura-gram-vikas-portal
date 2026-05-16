import Image from "next/image";

type FarmerCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function FarmerCard({
  title,
  description,
  image,
}: FarmerCardProps) {
  return (
    <article className="group relative overflow-hidden bg-black">
      
      <div className="relative h-[350px] overflow-hidden">
        
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          
          <h3 className="text-2xl font-bold">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/80">
            {description}
          </p>

          <button className="mt-5 border border-white/30 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black">
            और जानें
          </button>
        </div>
      </div>
    </article>
  );
}