export default function LiveIndicator() {
  return (
    <div className="relative inline-flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />

      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
      </span>

      <span className="sr-only">Live</span>
    </div>
  );
}
