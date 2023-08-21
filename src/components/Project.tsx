/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
    Badge,
    Card,
    Container,
    Group,
    Image,
    Text,
    createStyles,
    getStylesRef,
    rem,
    useMantineColorScheme,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Project as ProjectType } from '../data/projects';
import { imageMap } from '../data/imageDictionary';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    section: {
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },

    title: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
    },

    duration: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 300,
    },

    description: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 300,
    },

    tag: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 200,
    },

    carousel: {
        '&:hover': {
            [`& .${getStylesRef('carouselControls')}`]: {
                opacity: 1,
            },
        },
    },

    carouselControls: {
        ref: getStylesRef('carouselControls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
    },

    carouselIndicator: {
        width: rem(4),
        height: rem(4),
        transition: 'width 250ms ease',

        '&[data-active]': {
            width: rem(16),
        },

        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[7]
                : theme.colors.gray[4],
    },
}));

const Project = ({ project }: { project: ProjectType }) => {
    const { colorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';
    const { classes } = useStyles();

    const images = project.images.map((image) => (
        <Carousel.Slide key={image}>
            <Image
                src={imageMap.get(image)}
                key={image}
                height={350}
                fit="contain"
                sx={{ backgroundColor: isDark ? 'black' : 'whitesmoke' }}
            />
        </Carousel.Slide>
    ));

    const tags = project.languagesAndFrameworks.map((item) => (
        <Badge
            size="sm"
            key={item}
            mx="4px"
            variant="filled"
            color={isDark ? 'indigo' : 'blue'}
            className={classes.tag}
            fw={600}
        >
            {item}
        </Badge>
    ));

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Carousel
                    withIndicators
                    loop
                    classNames={{
                        root: classes.carousel,
                        controls: classes.carouselControls,
                        indicator: classes.carouselIndicator,
                    }}
                >
                    {images}
                </Carousel>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group position="apart" mt={20}>
                    <Text
                        component="h2"
                        my={0}
                        fz="md"
                        className={classes.title}
                    >
                        {project.name}
                    </Text>
                    <Badge size="sm" className={classes.duration}>
                        {project.startDate} - {project.endDate}
                    </Badge>
                </Group>

                <Text fz="sm" c="dimmed" mt={10}>
                    {project.description}
                </Text>
            </Card.Section>

            <Card.Section>
                <Container my="xs">{tags}</Container>
            </Card.Section>
        </Card>
    );
};

export default Project;
