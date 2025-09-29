import './Badge.css'

type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return <div className="badge">{children}</div>;
}
