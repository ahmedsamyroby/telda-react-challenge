type CastCardProps = {
  image: string;
  name: string;
  character: string;
};

export default function CastCard({ image, name, character }: CastCardProps) {
  return (
    <div className="flex flex-col items-center w-40 min-w-40 text-center">
      <img
        alt={"Photo of " + name}
        src={image}
        className="w-36 h-36 object-cover rounded-md mb-4"
      />
      <p className="text-lg leading-5 text-primary-typography mb-2">{name}</p>
      <p className="text-sm text-secondary-typography font-semibold">
        {character}
      </p>
    </div>
  );
}
