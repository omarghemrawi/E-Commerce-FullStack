import { assets } from "../assets/assets";
import PropTypes from "prop-types";
const Navbar = ({ setToken }) => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-pink-300 py-2 px-5 rounded-full text-white sm:px-7 sm:py-2 text-xs sm:text-sm "
      >
        LogOut
      </button>
    </div>
  );
};
Navbar.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Navbar;
