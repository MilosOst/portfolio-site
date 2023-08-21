import Project from './Project';
import { Project as ProjectType } from '../data/projects';
import { Container, SimpleGrid } from '@mantine/core';

const Projects = ({ projects }: { projects: ProjectType[] }) => {
    return (
        <Container size="xl" py="md" mt={20}>
            <SimpleGrid
                cols={3}
                spacing="lg"
                breakpoints={[{ maxWidth: 'md', cols: 1 }]}
            >
                {projects.map((project) => (
                    <Project project={project} key={project.name} />
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Projects;
