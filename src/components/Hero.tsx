import { Box, Container, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    about: {
        textAlign: 'left',
        padding: '1rem 1.5rem',
    },

    name: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
    },

    description: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 300,
    },

    image: {
        border: '1px solid black',
        boxShadow: '1px 1px 4px 1px #cfcfcf',
    },
}));

const Hero = () => {
    const { classes } = useStyles();

    return (
        <Container size="sm" className={classes.container}>
            <Box className={classes.about}>
                {/* <Text component="h2" size="l" className={classes.name}>
                    Milos Ostojic
                </Text> */}
                <Text component="h4" fz="md" my={0} className={classes.description}>
                    Hi there, I&apos;m Milos Ostojic, a 3rd year CS Student at
                    UTM with a passion for software development. I love learning
                    new technologies and frameworks, with my current focus being
                    iOS development.
                </Text>
            </Box>
        </Container>
    );
};

export default Hero;
