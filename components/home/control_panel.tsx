import { ChangeEvent } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

interface DropDownItemProps {
  regionName: string;
  setFilter: (filter: string) => void;
  toggleDropDown: () => void;
}

interface ControlPanelProps {
  regions: string[];
  dropdownActive: boolean;
  toggleDropDown: () => void;
  filter: string;
  setFilter: (filter: string) => void;
  searchInputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

function DropDownItem({
  regionName,
  setFilter,
  toggleDropDown,
}: DropDownItemProps) {
  function selectItem() {
    setFilter(regionName);
    toggleDropDown();
  }

  return (
    <button
      className="p-3 shadow-sm w-full text-left hover:bg-orange-500 rounded-sm hover:text-white"
      onClick={selectItem}
    >
      {regionName}
    </button>
  );
}

export default function ControlPanel({
  regions,
  dropdownActive,
  toggleDropDown,
  filter,
  setFilter,
  searchInputHandler,
}: ControlPanelProps) {
  return (
    <div
      className={`container flex md:flex-row flex-col items-center justify-between min-w-full`}
    >
      <div className="container flex items-center shadow-md pl-3 pt-2 pb-2 rounded-md md:w-2/5 w-full dark:bg-control-dark">
        <FaSearch className="fill-gray-400" />
        <input
          className="focus:outline-none p-2 w-full dark:bg-control-dark"
          placeholder="Search for a country..."
          onInput={searchInputHandler}
        />
      </div>
      <div className="container relative items-center md:w-2/5 w-full">
        <button
          className="dark:bg-control-dark container flex shadow-md p-2 pr-3 rounded-md items-center justify-between"
          onClick={toggleDropDown}
        >
          <p className="p-2">{`${
            filter === '' ? 'Filter by Region' : filter
          }`}</p>
          <FaChevronDown className={`${dropdownActive ? 'rotate-180':''} duration-200`} />
        </button>
        {dropdownActive ? (
          <div
            className={`absolute left-0 top-16 w-full shadow-md rounded-lg bg-white dark:bg-control-dark`}
          >
            {regions.map((region) => (
              <DropDownItem
                key={`${region}-dropdown`}
                regionName={region}
                setFilter={setFilter}
                toggleDropDown={toggleDropDown}
              />
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
