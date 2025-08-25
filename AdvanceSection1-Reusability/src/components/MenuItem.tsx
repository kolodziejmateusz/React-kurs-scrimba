type MenuItemProps = {
  children: React.ReactNode;
  open?: boolean;
  toggle?: () => void;
};

export default function MenuItem({ children, open, toggle }: MenuItemProps) {
  console.log("MenuItem");
  console.log(open);
  console.log(toggle);
  console.log("------------");
  return <div className="menu-item">{children}</div>;
}
