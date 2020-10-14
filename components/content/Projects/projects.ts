export interface Project {
    name : string;
    description : string;
    skills: string[];
    imgPath : string;
    alt : string;
    githubUrl : string;
    liveUrl : string;
}

export const projects : Project[] = [
    {
        name: 'ViewTube',
        description: 'Fullstack YouTube clone. Features include comments built with polymorphic associations, ' +
            'video/thumbnail upload, ' +
            'as well as video search by title/uploader.',
        skills: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL', 'AWS'],
        imgPath: '/viewtube.jpg',
        alt: 'viewtube-img',
        githubUrl: '',
        liveUrl: ''
    },
    {
        name: 'Creative-Runeterra',
        description: 'Single-page custom card creator for Legends of Runeterra. Includes custom user input detection to allow for inline styling and resizable/movable user-uploaded images.',
        skills: ['React', 'Redux', 'TypeScript'],
        imgPath: '/creative_runeterra.jpg',
        alt: 'creative-runeterra-img',
        githubUrl: '',
        liveUrl: ''
    },
    {
        name: 'Divekicker',
        description: 'Retro action-platformer/infinite runner. Features include custom physics, sprites, and animations.',
        skills: ['HTML5 Canvas', 'JavaScript'],
        imgPath: '/divekicker.jpg',
        alt: 'divekicker-img',
        githubUrl: '',
        liveUrl: ''
    },
    {
        name: 'Streamlined',
        description: 'Service that provides the streaming location for a searched Movie/TV Show. Search coverage includes Netflix, Hulu, HBO, and Amazon Prime Video.',
        skills: ['React', 'Redux', 'Express.js', 'Node.js', 'MongoDB'],
        imgPath: '/streamlined.jpg',
        alt: 'streamlined-img',
        githubUrl: '',
        liveUrl: ''
    },
]