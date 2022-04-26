import {FaMoon} from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="container flex justify-between items-center shadow-md p-4 min-w-full">
      <h1 className="font-bold ml-10">Where in the world?</h1>
      <button className="bg-blue-800 mr-10 p-4 rounded-md hover:bg-blue-900 duration-500 hover:scale-[1.05]">
        <FaMoon className="text-white"/>
      </button>
    </div>
  );
}
