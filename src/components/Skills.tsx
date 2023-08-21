import { Container, Image, SimpleGrid, createStyles } from '@mantine/core';
import SwiftLogo from '../assets/languageLogos/swift-logo.svg';
import TypescriptLogo from '../assets/languageLogos/typescript-logo.svg';
import JavascriptLogo from '../assets/languageLogos/javascript-logo.svg';
import CSharpLogo from '../assets/languageLogos/csharp-logo.svg';
import PythonLogo from '../assets/languageLogos/python-logo.svg';
import HTMLLogo from '../assets/languageLogos/html-logo.svg';
import CSSLogo from '../assets/languageLogos/css-logo.svg';
import JavaLogo from '../assets/languageLogos/java-logo.svg';
import CLogo from '../assets/languageLogos/c-logo.svg';

export const useStyles = createStyles((theme) => ({
    root: {
        boxShadow: '1px 1px 4px 1px #cfcfcf',
        borderRadius: '1rem',

        [theme.fn.smallerThan('sm')]: {
            margin: '1rem',
        },
    },
}));

const Skills = () => {
    const { classes } = useStyles();

    return (
        <Container size="sm" py="sm" mt={20} className={classes.root}>
            <SimpleGrid
                cols={9}
                spacing="lg"
                sx={{ alignItems: 'center', justifyContent: 'center' }}
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
