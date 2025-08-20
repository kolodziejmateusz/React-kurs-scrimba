export default function MenuDropdown({ children }: { children: string[] }) {
  return (
    <div className="menu-dropdown">
      {children.map((item) => (
        <div className="menu-item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
