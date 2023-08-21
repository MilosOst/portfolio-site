import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from '@mantine/core';
import { useState } from 'react';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { projectList } from './data/projects';

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ colorScheme }}
                withGlobalStyles
                withCSSVariables
            >
                <NavBar />
                <Hero />
                <Skills />
                <Projects projects={projectList} />
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
