import { Link } from "react-router-dom";
import { BuzzPay } from "./icons/BuzzPay";
import {
  PopiconsCartDuotone,
  PopiconsShareDuotone,
  PopiconsLeftSidebarTopNavDuotone,
  PopiconsLogoutDuotone,
  PopiconsBulbDuotone,
  PopiconsFaceSmileDuotone,
} from "@popicons/react";
import { localStorageKeys } from "../constants";
import useStore from "../state/store";

export function Navbar() {
  const { cart } = useStore();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            <PopiconsLeftSidebarTopNavDuotone className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <Link to="../profile">
                <PopiconsFaceSmileDuotone className="w-4 h-4" /> Profile
              </Link>
            </li>
            <li>
              <Link to="../share">
                <PopiconsShareDuotone className="w-4 h-4" /> Share with a
                co-worker
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  window.localStorage.removeItem(localStorageKeys.nwcUrl);
                }}
              >
                <PopiconsBulbDuotone className="w-4 h-4" /> About BuzzPay
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  window.localStorage.removeItem(localStorageKeys.nwcUrl);
                }}
              >
                <PopiconsLogoutDuotone className="w-4 h-4" /> Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 justify-center">
        <BuzzPay className="w-24 h-6 mt-2" />
      </div>
      <div className="flex-none">
        <Link to="../items">
          <button className="btn btn-square btn-ghost relative">
            <PopiconsCartDuotone className="w-6 h-6" />
            {cart.length > 0 && (
              <div className="badge badge-info absolute -top-2 -right-2">
                {cart.length}
              </div>
            )}
          </button>
        </Link>
      </div>
    </div>
  );
}
