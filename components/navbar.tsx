import {FaMoon} from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="container flex justify-between items-center shadow-md p-5 min-w-full">
      <h1 className="font-bold">Where in the world?</h1>
      <button className="bg-blue-800 p-2 rounded-md hover:bg-blue-900 duration-500">
        <FaMoon className="text-white"/>
      </button>
    </div>
  );
}
