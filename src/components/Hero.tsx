import { Avatar, Box, Container, Text, createStyles } from '@mantine/core';
import placeholderImage from '../assets/placeholder.jpg';

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

    image: {
        border: '1px solid black',
        boxShadow: '1px 1px 4px 1px #cfcfcf',
    },
}));

const Hero = () => {
    const { classes } = useStyles();

    return (
        <Container size="sm" className={classes.container}>
            <Avatar
                size={120}
                src={placeholderImage}
                alt="Profile Image"
                className={classes.image}
                radius={40}
            />

            <Box className={classes.about}>
                <Text component="h2" size="l">
                    Milos Ostojic
                </Text>
                <Text size="m">
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