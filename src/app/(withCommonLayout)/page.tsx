import About from "@/Components/FrontPage/Home/About";
import Banner from "@/Components/FrontPage/Home/Banner";
import Blog from "@/Components/FrontPage/Home/Blog";
import BlogAndContact from "@/Components/FrontPage/Home/BlogAndContact";
import Footer from "@/Components/FrontPage/Home/Footer";
import Personal from "@/Components/FrontPage/Home/Personal";
import Projects from "@/Components/FrontPage/Home/Projects";
import Technology from "@/Components/FrontPage/Home/Technology";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Technology />
      <Projects />
      <BlogAndContact />
      <Blog />
      <Footer />
    </div>
  );
}
