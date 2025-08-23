export default function MenuDropdown({
  children,
  open,
}: {
  children: React.ReactNode;
  open? : boolean;
}) {
  console.log(children);
  return open ? <div className="menu-dropdown">{children}</div> : null;
}
