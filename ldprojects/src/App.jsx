import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import ProjectsOne from "./pages/ProjectsOne";
import Destinations from "./pages/Destinations";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects-one" element={<ProjectsOne />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
