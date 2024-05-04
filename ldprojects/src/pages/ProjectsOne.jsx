import { useEffect, useState } from "react";

import Container from "../components/grid/Container";

import HeroSection from "../components/sections/HeroSection";
import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";

import TaskListHolder from "../components/projects-one/task-list/TaskListHolder";

import heroBackgroundImage from "../assets/bacground-05.jpg";

const ProjectsOne = () => {
    return (
        <>
            <HeroSection heroBackgroundImage={heroBackgroundImage}>
                ProjectsOne Page
            </HeroSection>

            <Container containerWidth="lg">
                <Heading modifierClass="center">Description</Heading>
                <Content textAlignment="center" spacing="minimal">
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
        </>
    );
};

export default ProjectsOne;
