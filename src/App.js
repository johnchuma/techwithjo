import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/homePage";
import AboutMe from "./pages/aboutMe";
import StoriesPage from "./pages/storiesPage";
import ReadStory from "./pages/readContent";
import EventsPage from "./pages/eventsPage";
import HowToPage from "./pages/howToPage";
import ReadContent from "./pages/readContent";
// import { generateSitemap } from "react-sitemap-generator";
// import { getSlugs } from "./controllers/contentsController";
import AddContent from "./pages/addContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/addContent" element={<AddContent />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/howTo" element={<HowToPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/read/:uuid" element={<ReadContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const generateSitemapWithSlugs = async () => {
//   const slugs = await getSlugs();
//   generateSitemap({
//     url: "https://www.techwithjo.com",
//     routes: [
//       "/",
//       "/aboutMe",
//       "/stories",
//       "/howTo",
//       "/events",
//       {
//         path: "/read/:uuid",
//         slugs: { uuid: slugs }, 
//         priority: 1,
//         changefreq: "never",
//       },
//     ],
//     output: "./public",
//     options: {
//       "/addContent": { ignore: true }
//     },
//   });
// };

// generateSitemapWithSlugs();
