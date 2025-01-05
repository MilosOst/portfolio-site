export interface Project {
    name: string;
    description: string;
    languagesAndFrameworks: string[];
    images: string[];
    startDate: string;
    endDate: string;
    link?: string;
}

export const projectList: Project[] = [
    {
        name: "PizzApocalypse",
        description: "Worked in a group of 10+ CS, Art, and Music students to develop a 3D FPS video game. The game has the player play as an overworked pizza delivery driver who has to delivery pizzas to customers before they lose their patience, otherwise they will start to chase and attack the player. The game is built in C# using Unity, and was the course long project for an Intro to Video Game Design course.",
        languagesAndFrameworks: ["Unity", "C#", "Trello"],
        images: ["pizzApocalypse-hud", "pizzApocalypse-menu"],
        startDate: "Sep 2024",
        endDate: "Dec 2024",
        link: "https://team-pizzapocalypse.itch.io/pizzapocalypse"
    },
    {
        name: "KaufList",
        description: "KaufList is a simple grocery list app I developed to make grocery shopping easier. This is also my first personal iOS app that I have published on the App Store, and has received a modest 100+ downloads so far. It is built using the Swift language using Apple's UIKit and CoreData frameworks.",
        languagesAndFrameworks: ["Swift", "UIKit", "CoreData"],
        images: [
            "kaufList-1",
            "kaufList-2",
            "kaufList-3",
            "kaufList-4"
        ],
        startDate: "May 2024",
        endDate: "Jun 2024",
        link: "https://apps.apple.com/ca/app/kauflist-grocery-list/id6504136693"
    },
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
        endDate: 'Sep 2023',
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
        endDate: 'Feb 2023',
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
