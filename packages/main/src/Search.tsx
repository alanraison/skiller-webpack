import React from 'react';

function Search() {
  return <div className="w-screen bg-white p-4 sticky top-0">
    <label className="text-xl relative block">
      <span className="
        material-icons
        text-gray-400
        block
        absolute
        top-1/2
        transform
        -translate-y-1/2
        pl-2
        pointer-events-none
      ">search</span>
      <input type="text" className="border border-gray-200 block rounded-full appearance-none w-full py-3 px-4 pl-10" />
    </label>
  </div>
}

export default Search;
