import Container from "../components/grid/Container";
import Row from "../components/grid/Row";

import HeroSection from "../components/sections/HeroSection";
import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";

import TaskListHolder from "../components/projects-one/task-list/TaskListWrapper";
import FilterProductsWrapper from "../components/projects-one/filter-product-list/FilterProductsWrapper";
import ProductWithOptions from "../components/projects-one/product-options/ProductWithOptions";
import GuessColorGame from "../components/projects-one/guess-color-game/GuessColorGame";

import heroBackgroundImage from "../assets/images/bacground-05.jpg";

const ProjectsOne = () => {
    return (
        <>
            <HeroSection heroBackgroundImage={heroBackgroundImage}>
                ProjectsOne Page
            </HeroSection>

            <Container containerWidth="lg">
                <Heading modifierClass="center">Description</Heading>
                <Content textAlignment="center" spacing="none">
                    <p>
                        These projects are inspired by tasks and solutions found
                        on the Web Dev Cody and Web Dev Simplified YouTube
                        channels
                    </p>
                </Content>
            </Container>

            <Container containerWidth="sm">
                <Heading level={2}>Task List</Heading>

                <Content maxWidth="none">
                    <p>
                        The task list is largely based on the Web Dev Simplified
                        Todo list project. Added a warning if the input field
                        for tasks is empty. If the task has already been added,
                        a warning will appear. Also, the first letter will be
                        capitalized.
                    </p>
                </Content>

                <TaskListHolder />
            </Container>

            <Container containerWidth="sm">
                <Heading level={2}>URL search parameters</Heading>

                <Content maxWidth="none">
                    <p>
                        In this section we have a list of products that can be
                        filtered. The first approach is classic and we use
                        usestate. The second is without useState, but
                        useSearchParams, which allows us to place the state in
                        the URL. The benefits of this approach are manifold.
                        Besides going back to the old days in web development,
                        the URL can be copied and shared, and put in personal
                        bookmarks etc.
                    </p>
                </Content>

                <Row>
                    <FilterProductsWrapper />
                </Row>
            </Container>

            <Container containerWidth="sm">
                <Heading level={2}>Product With Options</Heading>

                <Content maxWidth="none">
                    <p>
                        Choose from several product options. Quite similar to
                        the previous project above, only that in the first
                        example useState and useEffect are used in addition to
                        useSearchParams.
                    </p>
                </Content>

                <Row>
                    <ProductWithOptions />
                </Row>
            </Container>

            <Container containerWidth="sm">
                <Heading level={2}>Guess Color Game</Heading>

                <Content maxWidth="none">
                    <p>
                        Attempt to guess the color. Once correctly guessed, it
                        will take a few seconds for the game to reset the colors
                        both in the field and on the buttons.
                    </p>
                    <p>
                        Although I have initially created a solution with
                        useEffect, which is commented out in the code, I
                        ultimately opted to utilize only useState.
                    </p>
                </Content>

                <GuessColorGame />
            </Container>
        </>
    );
};

export default ProjectsOne;
