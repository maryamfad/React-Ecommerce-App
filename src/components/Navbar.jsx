import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
	const [visible, setVisible] = useState(false);
	const { setShowSearch, getCartCount } = useContext(ShopContext);
	return (
		<div className="flex items-center justify-between py-5 font-medium">
			<Link to={"/"}>
				<img src={assets.logo} className="w-36" alt="logo" />
			</Link>
			<ul className="hidden sm:flex gap-5 text-sm text-gray-700">
				<NavLink to="/" className="flex flex-col items-center gap-1">
					<p>HOME</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
				</NavLink>
				<NavLink
					to="/collection"
					className="flex flex-col items-center gap-1"
				>
					<p>COLLECTION</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
				</NavLink>
				<NavLink
					to="/about"
					className="flex flex-col items-center gap-1"
				>
					<p>ABOUT</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
				</NavLink>
				<NavLink
					to="/contact"
					className="flex flex-col items-center gap-1"
				>
					<p>CONTACT</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
				</NavLink>
			</ul>
			<div className="flex items-center gap-6">
				<IoSearch
					onClick={() => setShowSearch(true)}
					className="w-5 cursor-pointer"
				/>
				<div className="group relative">
					<Link to={"/login"}>
						<FaRegUser className="w-5 cursor-pointer " />
					</Link>
					<div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
						<div className="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded">
							<p className="cursor-pointer hover:text-black ">
								My Profile
							</p>
							<p className="cursor-pointer hover:text-black ">
								Orders
							</p>
							<p className="cursor-pointer hover:text-black ">
								Logout
							</p>
						</div>
					</div>
				</div>
				<Link to="/cart" className="relative">
					<LuShoppingCart className="w-7 min-w-7" />
					<p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
						{getCartCount()}
					</p>
				</Link>
				<BiMenuAltRight
					onClick={() => setVisible(true)}
					className="w-5 cursor-pointer sm:hidden"
				/>
			</div>
			{/* Sidebar menu for small screens*/}
			<div
				className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
					visible ? "w-full" : "w-0"
				}`}
			>
				<div className="flex flex-col text-gray-500">
					<div
						onClick={() => setVisible(false)}
						className="flex items-center gap-4 p-3 cursor-pointer"
					>
						<IoIosArrowBack className="h-4 rotate-180" />
						<p>Back</p>
					</div>
					<NavLink
						onClick={() => setVisible(false)}
						className="py-2 pl-6 border"
						to={"/"}
					>
						HOME
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className="py-2 pl-6 border"
						to={"/collection"}
					>
						COLLECTION
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className="py-2 pl-6 border"
						to={"/about"}
					>
						ABOUT
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className="py-2 pl-6 border"
						to={"/contact"}
					>
						CONTACT
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
