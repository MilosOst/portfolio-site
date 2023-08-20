import {
    Header,
    createStyles,
    rem,
    useMantineColorScheme,
    Text,
    Group,
    ActionIcon,
    Container,
} from '@mantine/core';
import {
    IconBrandGithub,
    IconBrandLinkedin,
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
}));

const NavBar = () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';
    const { classes } = useStyles();

    return (
        <Header height={rem(60)} mb={40} className={classes.root}>
            <Container className={classes.header} size="xl">
                <Text>Milos Ostojic</Text>

                <Group spacing={5}>
                    <a href="https://github.com/MilosOst">
                        <ActionIcon
                            variant="outline"
                            color={isDark ? 'yellow' : 'blue'}
                            title="Github"
                        >
                            <IconBrandGithub size="1.1rem"></IconBrandGithub>
                        </ActionIcon>
                    </a>

                    <a href="https://www.linkedin.com/in/milos-ostojic-282a01251/">
                        <ActionIcon
                            variant="outline"
                            color={isDark ? 'yellow' : 'blue'}
                            title="LinkedIn"
                        >
                            <IconBrandLinkedin size="1.1rem"></IconBrandLinkedin>
                        </ActionIcon>
                    </a>

                    <ActionIcon
                        variant="outline"
                        color={isDark ? 'yellow' : 'blue'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                        sx={{ marginLeft: '2rem' }}
                    >
                        {isDark ? (
                            <IconSun size="1.1rem" />
                        ) : (
                            <IconMoonStars size="1.1rem" />
                        )}
                    </ActionIcon>
                </Group>
            </Container>
        </Header>
    );
};

export default NavBar;
