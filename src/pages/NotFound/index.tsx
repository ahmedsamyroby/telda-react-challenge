export default function NotFound({
  message = "Page Not Found",
}: {
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen bg-secondary">
      <h1 className="text-4xl font-bold text-accent">404</h1>
      <h2 className="text-2xl font-bold text-secondary-typography">
        {message}
      </h2>
    </div>
  );
}
