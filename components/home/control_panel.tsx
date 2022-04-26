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
      className="p-3 shadow-sm w-full text-left hover:bg-cyan-600 hover:text-white bg-white"
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
}: ControlPanelProps) {
  return (
    <div className="container flex items-center justify-between min-w-full">
      <div className="container flex items-center shadow-md p-2 rounded-md w-2/5">
        <FaSearch className="fill-gray-400" />
        <input
          className="focus:outline-none p-2 w-full"
          placeholder="Search for a country..."
        />
      </div>
      <div className="container relative items-center w-2/5">
        <button
          className="container flex shadow-md p-2 rounded-md items-center justify-between"
          onClick={toggleDropDown}
        >
          <p className="p-2">{`${
            filter === '' ? 'Filter by Region' : filter
          }`}</p>
          <FaChevronDown />
        </button>
        {dropdownActive ? (
          <div className={`absolute left-0 top-16 w-full shadow-md rounded-lg`}>
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
