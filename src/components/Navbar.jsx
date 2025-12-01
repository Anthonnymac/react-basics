import Pic from "../assets/react.svg";

export function Navbar() {
  return (
    <>
    <div className="navbar">
      <img src={Pic}  alt="" />

      <ul>
        <li> <a href="">Home</a></li>
        <li> <a href="">About</a></li>
        <li> <a href="">Blog</a></li>
        <li> <a href="">Contact</a></li>
      </ul>

    </div>

    </>
  );
}


