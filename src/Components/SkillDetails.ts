export type skill = {
    name: string,
    level: string,
    years: number,
    image?: string | undefined,
    highContrast?: boolean,
    invert?: boolean
}
export type skillList = {
    Languages: skill[],
    Frameworks_Libraries: skill[],
    Tools: skill[]

}
export const skills: skillList = {
    Languages: [
        {
            name: "TypeScript",
            years: 2,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201"
        },
        {
            name: "JavaScript",
            years: 2,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },

        {
            name: "Python",
            years: 3,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
        },
        {
            name: "SQL",
            years: 3,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
        },
        {
            name: "Rust",
            years: 1,
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/220px-Rustacean-orig-noshadow.svg.png"
        },
        {
            name: "PHP",
            years: 1,
            level: "Beginner",
            image: " https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
        },
        {
            name: "java",
            years: 3,
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png"
        },
        {
            name: "C",
            years: 1,
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
        },
        {
            name: "C#",
            years: 2,
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1024px-C_Sharp_Logo_2023.svg.png"
        },
        {
            name: "C++",
            years: 1,
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
        },

        {
            name: "Verilog",
            years: 1,
            level: "Beginner",
            image: "https://m.media-amazon.com/images/I/41yQQYkOtaL.png"
        },
    ],
    Frameworks_Libraries: [
        {
            name: "React.JS",
            years: 2,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        },
        {
            name: "Vite.JS",
            years: 2,
            level: "Intermediate",
            image: "https://vitejs.dev/logo-with-shadow.png"
        },
        {
            name: "Redux.JS",
            years: 2,
            level: "Intermediate",
            image: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
        },
        {
            name: "Konva.JS",
            years: 2,
            level: "Intermediate",
            image: "https://konvajs.org/android-chrome-192x192.png"
        },
        {
            name: "OpenLayers.JS",
            years: 2,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/67/OpenLayers_logo.svg"
        },
        {
            name: "Electron.JS",
            years: 2,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg"
        },
        {
            name: "Express.JS",
            years: 2,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            invert: true
        },
        {
            name: "THREE.JS",
            years: 1,
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1024px-Three.js_Icon.svg.png",
            invert: true
        },
        {
            name: "Flask",
            years: 1,
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
            invert: true
        }


    ],
    Tools: [
        {
            name: "Node.JS",
            years: 2,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png",
            highContrast: true

        },
        {
            name: "SQLite",
            years: 2,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
            highContrast: true

        },
        {
            name: "Linux",
            years: 5,
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png"
        },
        {
            name: "Unreal Engine 5",
            years: 1,
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg",
            invert: true
        },
        {
            name: "Git",
            years: 5,
            level: "Intermediate",
            image: "https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png",
        }

    ]

}