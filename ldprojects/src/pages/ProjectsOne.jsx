import { useEffect, useState } from "react";

import Container from "../components/grid/Container";

import HeroSection from "../components/sections/HeroSection";
import Heading from "../components/partials/Heading";
import TaskForm from "../components/partials/TaskForm";
import TaskList from "../components/partials/TaskList";
import Content from "../components/partials/Content";

import heroBackgroundImage from "../assets/bacground-05.jpg";

const ProjectsOne = () => {
    // const [tasks, setTasks] = useState([]);
    const [tasks, setTasks] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue == null) return [];

        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(title) {
        if (tasks.some((task) => task.title === title)) {
            return true; // taskExists
        }

        setTasks((currentTasks) => [
            ...currentTasks,
            { id: crypto.randomUUID(), title, completed: false },
        ]);

        return false; // !taskExists
    }

    function toggleTask(id, completed) {
        setTasks((currentTasks) => {
            return currentTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed };
                }

                return task;
            });
        });
    }

    function deleteTask(id) {
        setTasks((currentTasks) => {
            return currentTasks.filter((task) => task.id !== id);
        });
    }

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
                <TaskForm addTask={addTask} />
                <TaskList
                    tasks={tasks}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            </Container>
        </>
    );
};

export default ProjectsOne;
