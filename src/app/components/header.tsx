import React from "react";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";

type Item = {
  name: string;
  url: string;
};

const navList: Item[] = [
  {
    name: "產品列表",
    url: "/products",
  },
  {
    name: "產品認證",
    url: "/product-certification",
  },
];

const NavItem = ({name, url}: Item) => (
	<li>
		<Link className="text-xl" href={url}>
			{name}
		</Link>
	</li>
)



const Header = () => {
  return (
    <div className="flex align-middle px-5 py-3 bg-blue-800">
      <div>
        <h1 className="text-4xl">巨東科技</h1>
      </div>
      <nav className="flex align-middle">
        <ul className="flex align-middle">
          {
            navList.map(item => <NavItem key={item.url} {...item} />)
          }
        </ul>
      </nav>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
