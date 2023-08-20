import './App.css';
import { navLinks } from './data/navLinks';
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from '@mantine/core';
import { NavBar } from './components/NavBar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <BrowserRouter>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    theme={{ colorScheme }}
                    withGlobalStyles
                    withCSSVariables
                >
                    <NavBar links={navLinks} />
                    <Routes>
                        <Route path="about" element={<h2>About</h2>} />
                        <Route path="projects" element={<h2>Projects</h2>} />
                        <Route path="skills" element={<h2>Skills</h2>} />
                        <Route path="" element={<h1>Home</h1>} />
                    </Routes>
                </MantineProvider>
            </ColorSchemeProvider>
        </BrowserRouter>
    );
}

export default App;
