import TopBar from "./Topbar";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="header-wrap">
      <TopBar />
      <NavBar />
    </div>
  );
}