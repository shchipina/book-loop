export const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded shadow p-4 bg-[#2A2A28]">
      <div className="bg-gray-300  opacity-40 h-[300px] w-full rounded mb-4" />
      <div className="mt-4">
        <div className="h-4 bg-gray-300  opacity-40 rounded mb-2"></div>
        <div className="h-4 bg-gray-300  opacity-40 rounded mb-2"></div>
      </div>
      <div className="flex justify-between gap-3 mt-4 pt-4 border-t border-gray-300">
        <div className="h-[40px] bg-gray-300 opacity-40 rounded w-full"></div>
        <div className="h-[40px] bg-gray-300 opacity-40 rounded w-[60px]"></div>
      </div>
    </div>
  );
};
