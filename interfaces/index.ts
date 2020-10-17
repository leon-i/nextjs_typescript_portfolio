export interface Project {
    name : string;
    description : string;
    skills: string[];
    imgPath : string;
    alt : string;
    githubUrl : string;
    liveUrl : string;
}

export interface GithubResponse {
    name : string;
    description : string;
    avatarUrl : string;
    url : string;
    stars : number;
    forks : number;
    starsUrl : string;
    forksUrl : string;
}