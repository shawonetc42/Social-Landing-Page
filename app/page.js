// Home Page

import Community from "./Components/Community/Community";
import Discover from "./Components/Discover/Discover";
import Feature from "./Components/Feature/Feature";
import Hero from "./Components/Hero/Hero";
import Stories from "./Components/Stories/Stories";
import Update from "./Components/Update/Update";
import ScrollTop from "./Components/Utility/ScrollTop/ScrollTop";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Feature />
        <Discover />
        <Stories />
        <Community />
        <Update />
      </div>
      <ScrollTop />
    </main>
  );
}
