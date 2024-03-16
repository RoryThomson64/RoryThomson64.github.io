export type skill = {
    name: string,
    level: string,
    image?: string | undefined,
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
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201"
        },
        {
            name: "JavaScript",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },

        {
            name: "Python",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
        },
        {
            name: "SQL",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
        },
        {
            name: "Rust",
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/220px-Rustacean-orig-noshadow.svg.png"
        },
        {
            name: "PHP",
            level: "Beginner",
            image: " https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
        },



        {
            name: "java",
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png"
        },
        {
            name: "C",
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
        },
        {
            name: "C#",
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1024px-C_Sharp_Logo_2023.svg.png"
        },
        {
            name: "C++",
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
        },

        {
            name: "Verilog",
            level: "Beginner",
            image: "https://m.media-amazon.com/images/I/41yQQYkOtaL.png"
        },
    ],
    Frameworks_Libraries: [
        {
            name: "React.JS",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        },
        {
            name: "Vite.JS",
            level: "Intermediate",
            image: "https://vitejs.dev/logo-with-shadow.png"
        },
        {
            name: "Redux.JS",
            level: "Intermediate",
            image: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
        },
        {
            name: "Konva.JS",
            level: "Intermediate",
            image: "https://konvajs.org/android-chrome-192x192.png"
        },
        {
            name: "OpenLayers.JS",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/67/OpenLayers_logo.svg"
        },
        {
            name: "Electron.JS",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg"
        },
        {
            name: "Express.JS",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
        },
        {
            name: "THREE.JS",
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1024px-Three.js_Icon.svg.png"
        },
        {
            name: "Flask",
            level: "Beginner",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg"
        }


    ],
    Tools: [
        {
            name: "Node.JS",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png"
        },
        {
            name: "SQLite",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg"
        },
        {
            name: "Linux",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png"
        },
        {
            name: "Unreal Engine 5",
            level: "Intermediate",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg"
        },
        {
            name: "Git",
            level: "Intermediate",
            image: "https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png"
        }

    ]

}