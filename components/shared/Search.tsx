import { Icon } from "@iconify/react";

const Search = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray px-2 py-2.5 rounded-lg flex flex-row justify-between items-center">
        <Icon
          icon="pepicons-pop:dots-y"
          style={{ fontSize: "16px", color: "var(--black-75)" }}
        />
        <input
          placeholder="Search Anything"
          className="placeholder:text-black-75 placeholder:text-xs bg-gray ml-2"
        />
        <Icon
          icon="iconamoon:search-fill"
          style={{ fontSize: "18px", color: "black" }}
        />
      </div>
    </div>
  );
};
export default Search;
