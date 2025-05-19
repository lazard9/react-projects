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
import DestinationsSingle from "./pages/DestinationsSingle";
// import DestinationsSingle, { destinationsLoader } from "./pages/DestinationsSingle";
import DestinationsNew from "./pages/DestinationsNew";
import DestinationsEdit from "./pages/DestinationsEdit";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const destinationsLoader = async ({ params }) => {
    const res = await fetch(`/api/destinations/${params.id}`);
    const data = await res.json();
    return data;
};

const addDestination = async (destinationData) => {
    // console.log(destinationData);

    await fetch("/api/destinations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(destinationData),
    });
    return;
};

const deleteDestination = async (id) => {
    await fetch(`/api/destinations/${id}`, {
        method: "DELETE",
    });
    return;
};

const editDestination = async (destinationData) => {
    // console.log(destinationData);

    await fetch(`/api/destinations/${destinationData.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(destinationData),
    });
    return;
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects-one" element={<ProjectsOne />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="destinations/:id" element={<DestinationsSingle deleteDestination={deleteDestination} />} loader={destinationsLoader} />
            <Route path="destinations/new" element={<DestinationsNew newDestination={addDestination} />} />
            <Route path="destinations/edit/:id" element={<DestinationsEdit updateDestination={editDestination} />} loader={destinationsLoader} />
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
