export default function ErrorDisplay({
  code = 500,
  message = "Something went wrong.",
}: {
  code?: number;
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen bg-secondary">
      <h1 className="text-4xl font-bold text-accent">{code}</h1>
      <h2 className="text-2xl font-bold text-secondary-typography">
        {message}
      </h2>
    </div>
  );
}
