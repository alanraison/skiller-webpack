import React from 'react';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

function Search({
  value,
  onChange,
}: SearchProps) {
  return <div className="w-screen bg-white p-4 sticky top-0">
    <div className="md:w-8/12 w-full mx-auto">
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
        <input
          type="text"
          className="border border-gray-200 block rounded-full appearance-none w-full py-3 px-4 pl-10"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </label>
    </div>
  </div>
}

export default Search;
