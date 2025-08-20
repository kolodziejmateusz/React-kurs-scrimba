

export default function MenuDropdown({ items } : { items : string[]}) {
  return (
    <div className="menu-dropdown">
      {items.map((item) => (
        <div className="menu-item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
