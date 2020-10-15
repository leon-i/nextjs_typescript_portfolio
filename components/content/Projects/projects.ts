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
        description: 'Fullstack YouTube clone. Includes comments built with polymorphic associations, ' +
            'video/thumbnail upload, ' +
            'as well as video search by title/uploader.',
        skills: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL', 'AWS'],
        imgPath: '/viewtube.jpg',
        alt: 'viewtube-img',
        githubUrl: 'https://github.com/leon-i/ViewTube',
        liveUrl: 'https://viewtubeapp.herokuapp.com/#/'
    },
    {
        name: 'Creative-Runeterra',
        description: 'Single-page custom card creator for Legends of Runeterra. Includes custom user input detection to allow for inline styling and resizable/movable user-uploaded images.',
        skills: ['React', 'Redux', 'TypeScript'],
        imgPath: '/creative_runeterra.jpg',
        alt: 'creative-runeterra-img',
        githubUrl: 'https://github.com/leon-i/LoR_Cardmaker',
        liveUrl: 'https://creative-runeterra.netlify.app/#/'
    },
    {
        name: 'Divekicker',
        description: 'Retro action-platformer/infinite runner. Features include custom physics, sprites, and animations.',
        skills: ['HTML5 Canvas', 'JavaScript'],
        imgPath: '/divekicker.jpg',
        alt: 'divekicker-img',
        githubUrl: 'https://github.com/leon-i/Divekicker',
        liveUrl: 'https://leon-i.github.io/Divekicker/'
    },
    {
        name: 'Streamlined',
        description: 'Service that provides the streaming location for a searched Movie/TV Show. Search coverage includes Netflix, Hulu, HBO, and Amazon Prime Video.',
        skills: ['React', 'Redux', 'Express.js', 'Node.js', 'MongoDB'],
        imgPath: '/streamlined.jpg',
        alt: 'streamlined-img',
        githubUrl: 'https://github.com/leon-i/Streamlined',
        liveUrl: 'http://streamlinedapp.herokuapp.com/#/'
    },
]