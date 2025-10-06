// import Menu from "./Menu";
// import MenuButton from "./MenuButton";
// import MenuDropdown from "./MenuDropdown";
// import MenuItem from "./MenuItem";

// type CompoundMenu = typeof Menu & {
//   Button: typeof MenuButton;
//   Dropdown: typeof MenuDropdown;
//   Item: typeof MenuItem;
// };

// const CompoundMenu = Menu as CompoundMenu;

// CompoundMenu.Button = MenuButton;
// CompoundMenu.Dropdown = MenuDropdown;
// CompoundMenu.Item = MenuItem;

// export default CompoundMenu;

import Banner from "./Banner";
import BannerTitle from "./BannerTitle";
import BannerText from "./BannerText";

type CompoundBanner = typeof Banner & {
  Title: typeof BannerTitle;
  Text: typeof BannerText;
};

const CompoundBanner = Banner as CompoundBanner;

CompoundBanner.Title = BannerTitle;
CompoundBanner.Text = BannerText;

export default CompoundBanner;
