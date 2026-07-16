const Shimmer = () => {
  return (
    <div>
      <div className="space-y-3">
        {/* Poster */}
        <div className="relative w-[228px] h-[348px] overflow-hidden rounded-xl bg-gray-200">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer h-72 bg-red" />
        </div>

        {/* Title */}
        <div className="relative h-5 overflow-hidden rounded bg-gray-200">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>

        {/* Rating */}
        <div className="relative h-4 w-24 overflow-hidden rounded bg-gray-200">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
      </div>

      
    </div>
  );
};

export default Shimmer;
