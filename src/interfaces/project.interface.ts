export interface Project {
    coverImagePath: string,
    title: string,
     subtitle?: string,
    techStack: string[],
    description: string,
    year: string | number,
    githubLink?: string,
    liveLink?: string,
    branch?: string,
   
}

export interface ProjectSection {
    sectionTitle: string,
    sectionSubtitle?: string,
    entities: Project[];
}