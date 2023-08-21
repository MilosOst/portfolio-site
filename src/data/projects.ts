export interface Project {
    name: string;
    description: string;
    languagesAndFrameworks: string[];
    images: string[];
    startDate: string;
    endDate: string;
}

export const projectList: Project[] = [
    {
        name: 'Basketball Training App',
        description:
            'Worked with a friend to build a Basketball training app to be used by his coach and his organization. Users can schedule trainings using a fixed selection of drills and view trainings scheduled on a given day. The frontend was developed using SwiftUI, while the backend was built using .NET and PostgreSQL.',
        languagesAndFrameworks: ['SwiftUI', '.NET', 'PostgreSQL'],
        images: [
            'training-drill-selection',
            'training-duplicate',
            'training-view',
            'training-creation',
        ],
        startDate: 'Jul 2023',
        endDate: 'Present',
    },
    {
        name: 'Mange',
        description:
            'Mange is an iOS app that is a mix between a dish review and social media app. Users can review dishes they ate at restaurants, find restaurants nearby follow other users. The stack is SwiftUI for the frontend, with Express.js and MongoDB for the backend.',
        languagesAndFrameworks: [
            'Swift',
            'SwiftUI',
            'Express.JS',
            'Typescript',
            'MongoDB',
            'Amazon S3',
        ],
        images: [
            'mange-feed',
            'mange-profile',
            'mange-restaurant',
            'mange-list',
        ],
        startDate: 'Nov 2022',
        endDate: 'Present',
    },
    {
        name: 'Tetris',
        description:
            'Worked in a group of 4 using JavaFX to build an improved version of Tetris, including powerups and colorblind support. This project also featured an Agile workflow, including user stories, sprints, code reviews and pull requests. It was also an introduction to testing using JUnit.',
        languagesAndFrameworks: ['Java', 'JavaFX', 'Git'],
        images: ['tetris-menu', 'tetris-gameplay', 'tetris-colorblind'],
        startDate: 'Oct 2022',
        endDate: 'Dec 2022',
    },
];
