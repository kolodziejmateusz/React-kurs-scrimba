import { IoPersonSharp } from "react-icons/io5";

/**
 * Challenge: Create a flexible Avatar component!
 *
 * Check the slides for notes on how the component
 * should be used.
 *
 * Each of the 3 different avatars should have a
 * wrapper div with the classes below:
 *
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 *
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 *
 * Check the hints.md file if you are really stuck.
 *
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

type AvatarProps = {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
};

export default function Avatar({ src, alt, children }: AvatarProps) {
  const colorClasses = ["navy", "pink", "red", "blue", "green"];
  const randomClass =
    colorClasses[Math.floor(Math.random() * colorClasses.length)];

  return (
    <>
      {src && (
        <div className="avatar">
          <img src={src} alt={alt} />
        </div>
      )}
      {children && (
        <div className={`avatar avatar-letters ${randomClass}`}>{children}</div>
      )}
      {!children && !src && (
        <div className={`avatar ${randomClass}`}>
          <IoPersonSharp />
        </div>
      )}
    </>
  );
}
