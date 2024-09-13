import HomeComp from "@/components/Home";
import MenuBottom from "@/components/MenuBottom";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import { PageProvider } from "@/contexts/PageContext";

export default function Home() {
  return (
    <PageProvider>
      <main className="">
        {
          <MenuBottom />
        }
        <div className="flex flex-col items-center gap-32">
          <HomeComp id={'Home'} />
          <Projects id={'Projects'} />
          <AboutMe id={'AboutMe'} />
        </div>
      </main>
    </PageProvider>
  );
}
