import { FooterHero } from "./components/footerhero";
import { Hero } from "./components/hero";
import { NavbarLand } from "./components/navbarLand"


export default function Home() {
  return (
    <div>
      <NavbarLand/>
      <Hero/>
      <FooterHero/>
    </div>
  );
}
