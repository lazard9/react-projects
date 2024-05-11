import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import HeroSection from "../components/sections/HeroSection";
import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";

import TaskListHolder from "../components/projects-one/task-list/TaskListHolder";
import FilterProductList from "../components/projects-one/filter-product-list/FilterProductList";
import StateFromUrl from "../components/projects-one/state-from-url/StateFromUrl";
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
                    The task list is largely based on the Web Dev Simplified
                    Todo list project. Added a warning if the input field for
                    tasks is empty. If the task has already been added, a
                    warning will appear. Also, the first letter will be
                    capitalized.
                </Content>

                <TaskListHolder />
            </Container>

            <Container containerWidth="sm">
                <Heading level={2}>URL search parameters</Heading>

                <Content maxWidth="none">
                    In this section we have a list of products that can be
                    filtered. The first approach is classic and we use usestate.
                    The second is without useState, but useSearchParams, which
                    allows us to place the state in the URL. The benefits of
                    this approach are manifold. Besides going back to the old
                    days in web development, the URL can be copied and shared,
                    and put in personal bookmarks etc.
                </Content>

                <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                        <FilterProductList />
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                        <StateFromUrl />
                    </Col>
                </Row>
            </Container>

            <Container containerWidth="sm">
                <Heading level={2}>Guess Color Game</Heading>

                <Content maxWidth="none">
                    Try to guess the color. After you guess it will take a few
                    seconds to reset the colors in the field and buttons. Here I
                    made a solution with useEffect commented out in the code. I
                    only used useState.
                </Content>

                <GuessColorGame />
            </Container>
        </>
    );
};

export default ProjectsOne;
