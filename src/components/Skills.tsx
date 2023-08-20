import {
    Container,
    Image,
    SimpleGrid,
    Title,
    createStyles,
} from '@mantine/core';
import SwiftLogo from '../assets/swift-logo.svg';
import TypescriptLogo from '../assets/typescript-logo.svg';
import JavascriptLogo from '../assets/javascript-logo.svg';
import CSharpLogo from '../assets/csharp-logo.svg';
import PythonLogo from '../assets/python-logo.svg';
import HTMLLogo from '../assets/html-logo.svg';
import CSSLogo from '../assets/css-logo.svg';
import JavaLogo from '../assets/java-logo.svg';
import CLogo from '../assets/c-logo.svg';

export const useStyles = createStyles((theme) => ({
    root: {
        borderRadius: '1rem',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        boxShadow: '1px 1px 4px 1px #cfcfcf',

        [theme.fn.smallerThan('sm')]: {
            margin: '1rem',
        },
    },
}));

const Skills = () => {
    const { classes } = useStyles();

    return (
        <Container size="md" py="md" mt={20} className={classes.root}>
            <Title>Languages</Title>

            <SimpleGrid
                cols={9}
                spacing="lg"
                mt={40}
                breakpoints={[{ maxWidth: 'md', cols: 3 }]}
            >
                {/* <IconBrandSwift color="#ff5832" size="3rem" /> */}
                <Image radius="lg" src={SwiftLogo} alt="Swift" />
                <Image radius="lg" src={CSharpLogo} alt="C#" />
                <Image radius="lg" src={TypescriptLogo} alt="Typescript" />
                <Image radius="lg" src={JavascriptLogo} alt="Javascript" />
                <Image radius="lg" src={HTMLLogo} alt="HTML" />
                <Image radius="lg" src={CSSLogo} alt="CSS" />
                <Image radius="lg" src={PythonLogo} alt="Python" />
                <Image radius="lg" src={JavaLogo} alt="Java" />
                <Image radius="lg" src={CLogo} alt="C" />
            </SimpleGrid>
        </Container>
    );
};

export default Skills;
