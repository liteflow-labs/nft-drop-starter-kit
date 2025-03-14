export default function LiveIndicator() {
  return (
    <div className="relative inline-flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />

      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      </span>

      <span className="sr-only">Live</span>
    </div>
  );
}
