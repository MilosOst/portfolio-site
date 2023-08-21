import {
    Header,
    createStyles,
    rem,
    useMantineColorScheme,
    Group,
    ActionIcon,
    Container,
    Title,
} from '@mantine/core';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconMoonStars,
    IconSun,
} from '@tabler/icons-react';

const useStyles = createStyles(() => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    title: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
    },
}));

const NavBar = () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';
    const { classes } = useStyles();

    return (
        <Header height={rem(60)} mb={40} className={classes.root}>
            <Container className={classes.header} size="xl">
                <Title className={classes.title}>Portfolio</Title>

                <Group spacing={5}>
                    <a href="https://github.com/MilosOst">
                        <ActionIcon
                            variant="default"
                            color={isDark ? 'yellow' : 'blue'}
                            title="Github"
                            size="lg"
                        >
                            <IconBrandGithub size="1.4rem"></IconBrandGithub>
                        </ActionIcon>
                    </a>

                    <a href="https://www.linkedin.com/in/milos-ostojic-282a01251/">
                        <ActionIcon
                            variant="filled"
                            color="blue"
                            title="LinkedIn"
                            size="lg"
                        >
                            <IconBrandLinkedin size="1.4rem"></IconBrandLinkedin>
                        </ActionIcon>
                    </a>

                    <a
                        href={'mailto:ostojicmilos10@gmail.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ActionIcon
                            variant="default"
                            color="blue"
                            title="Contact Me"
                            size="lg"
                        >
                            <IconMail size="1.4rem"></IconMail>
                        </ActionIcon>
                    </a>

                    <ActionIcon
                        variant="outline"
                        color={isDark ? 'gray' : 'dark'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                        size="lg"
                    >
                        {isDark ? (
                            <IconSun size="1.4rem" />
                        ) : (
                            <IconMoonStars size="1.4rem" />
                        )}
                    </ActionIcon>
                </Group>
            </Container>
        </Header>
    );
};

export default NavBar;
