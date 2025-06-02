import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Bhavesh',
    lastName:  'Budharaju',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Web Dev and Distributed Systems Enthusiast',
    avatar:    '/images/avatar.jpg',
    location:  'Bangalore/India',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Telugu','Hindi','Kannada']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>📬 Subscribe to {person.firstName}'s Tech Tales</>,
    description: <>I occasionally write about technology and computer science</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Bhavesh2k4',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/bhavesh-budharaju/',
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/Bhavesh_2k4/?hl=en',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:Bhavesh.oct2k4@gmail.com',
    },
    {
        name: 'CV/Resume',
        icon: 'download',
        link: 'https://drive.google.com/file/d/11koGdPN8_VPOUbJmh8NjoycgZ9udCnZX/view?usp=sharing',
    }
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website`,
    headline: <>Web Dev & Distributed Systems Enthusiast</>,
    subline: <>I'm <InlineCode>Bhavesh</InlineCode>, a computer science & Tech enthusiast exploring the digital universe from the tech hub of <InlineCode>Bangalore 🚀</InlineCode> .<br/>
For me, programming isn't just a career path - it's where logic meets creativity.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/Bhavesh2k4'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>👋 Hey there! I'm Bhavesh<br/>
        Currently decoding the matrix at PES University, Bangalore, where I'm pursuing my B.Tech in Computer Science. 🎓<br/>
        You know that dopamine rush when you finally crack a puzzle? That's basically my dose of happiness while coding! I can lose track of time crafting elegant solutions to tricky problems 💻✨
        When I'm not in my coding cave, I'm either:<br/>
        <br/>
        ✍️ Writing tech blogs (sharing the good, the bad, and the buggy!)<br/>
        🛠️ Building side projects that keep me up at night<br/>
        🎮 Battling it out in online games<br/>
        🎵 Performing Grammy-worthy concerts in my bathroom (audience: shampoo bottles) 🚿<br/>
        🎬 Binge-watching movies<br/>
        🏃‍♂️ Getting my sports fix<br/>
        🌍 Planning my next adventure (or dreaming about it!)</>
    },
    work: {
        display: false, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Lead Designer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'PES University',
                description: <><br/>Pursuing Computer Science and Engineering. <span className="ml-80"><InlineCode>2022-2026</InlineCode><InlineCode>CGPA: 9.05</InlineCode></span><br/>
                🏆 Secured MRD and CNR Awards (Top 5% and 20% of students in Academics in University)</>,
            },
            {
                name: 'CAJC',
                description: <><br/>Christ Academy CBSE School<br/>CBSE - Physcics,Chemistry,Maths,Computer Science <span className="ml-16"><InlineCode>2002-2022</InlineCode><InlineCode>percentage: 93%</InlineCode></span></>,
            },
            {
                name: 'SFS , Koramangala',
                description: <><br/>St. Francis School<br/>ICSE - 10th grade <span className="ml-64 pl-64"><span className="ml-80 pl-80"><InlineCode>2012-2020</InlineCode><InlineCode>percentage: 95%</InlineCode></span></span></>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <></>,
                images: [
                    {
                        src: '/images/projects/project-01/python.png',
                        alt: 'Python',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/c.png',
                        alt: 'C',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/JS.png',
                        alt: 'JS',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/cpp.png',
                        alt: 'CPP',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/go.webp',
                        alt: 'GO',
                        width: 3,
                        height: 3
                    }
                ]
            },
            {
                title: 'Web Development',
                description: <></>,
                images: [
                    {
                        src: '/images/projects/project-01/html.png',
                        alt: 'HTML',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/css.png',
                        alt: 'CSS',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/JS.png',
                        alt: 'JS',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/react.png',
                        alt: 'React',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/node.png',
                        alt: 'node',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/mysql.png',
                        alt: 'mysql',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/mongo.png',
                        alt: 'mongo',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/next.png',
                        alt: 'next',
                        width: 3,
                        height: 3
                    }
                ]
            },
            {
                title: 'Distributed Systems',
                description: <></>,
                images: [
                    {
                        src: '/images/projects/project-01/hadoop.png',
                        alt: 'hadoop',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/kafka.png',
                        alt: 'kafka',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/spark.png',
                        alt: 'spark',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/fluentd.png',
                        alt: 'fluentd',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/elastic.png',
                        alt: 'elastic',
                        width: 3,
                        height: 3
                    },
                ]
            },
            {
                title: 'Hosting and Version Control',
                description: <></>,
                images: [
                    {
                        src: '/images/projects/project-01/vercel.png',
                        alt: 'vercel',
                        width: 3,
                        height: 3
                    },
                    {
                        src: '/images/projects/project-01/git.png',
                        alt: 'git',
                        width: 3,
                        height: 3
                    },
                ]
            },
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'My tales on Tech and computer science...🚀',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Projects',
    title: 'My projects',
    description: `Projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
