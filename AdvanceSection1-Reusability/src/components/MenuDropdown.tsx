export default function MenuDropdown({ children }: { children: React.ReactNode }) {
  return (
    // <div className="menu-dropdown">
    //   {children.map((item) => (
    //     <div className="menu-item" key={item}>
    //       {item}
    //     </div>
    //   ))}
    // </div>
    <div className="menu-dropdown">{children}</div>
  );
}
