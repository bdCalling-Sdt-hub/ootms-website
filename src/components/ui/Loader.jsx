import React from "react";

function TowerLoader() {
  return (
    <div class="flex-col gap-4 w-full flex items-center justify-center">
      <div class="w-12 h-12 border-4 border-transparent text-[#2B4257] text-4xl animate-spin flex items-center justify-center border-t-[#2B4257] rounded-full">
        <div class="w-8 h-8 border-4 border-transparent text-[#2B4257] text-2xl animate-spin flex items-center justify-center border-t-[#2B4257] rounded-full"></div>
      </div>
    </div>
  );
}

export default TowerLoader;
