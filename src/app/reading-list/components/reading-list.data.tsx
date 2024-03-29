const enum ReadingTypes {
    BOOK = 'BOOK',
    BLOG = 'BLOG',
    WEBSITE = 'WEBSITE'
}

export type ReadingListDataType = {
        key: string,
        readingType: ReadingTypes,
        title: string,
        description: string,
        keywords: string[],
        link: string,
        completed: boolean,
}
export const ReadingListIntroduction = 'Here I\'ve collated a list of different reading materials that I\'ve been interested in reading over time. There are links available to the content and a nice little note for those I\'ve been able to read.'

export type ReadingListCompleteDataObject = { data : ReadingListDataType[]}
// https://roadmap.sh/backend
const ReadingListData: ReadingListCompleteDataObject = { data:  [
    {
        key: '0',
        readingType: ReadingTypes.WEBSITE,
        title: 'Roadmap for becoming a developer',
        description: 'A good reference point for different things that can be learnt to improve skills as a developer',
        keywords: ['Learning','Developer','References'],
        link: 'https://scaleyourapp.com/system-design-case-study-real-time-messaging-architecture/?utm_source=tldrwebdev&fbclid=IwAR3s2IHG-xrNXjGz5f4QARU8jspX65g_Mp1OkeZmAYa0CRJx_mwknRqLkko',
        completed: false
    },
    {
        key: '1',
        readingType: ReadingTypes.BLOG,
        title: 'System Design Case Study #1: Exploring Slack’s Real-time Messaging Architecture',
        description: 'An in depth study on Slack\s architecture and why certain services prefer alternative transfer protocols.',
        keywords: ['Architecture','Slack','Stateless','Stateful'],
        link: 'https://scaleyourapp.com/system-design-case-study-real-time-messaging-architecture/?utm_source=tldrwebdev&fbclid=IwAR3s2IHG-xrNXjGz5f4QARU8jspX65g_Mp1OkeZmAYa0CRJx_mwknRqLkko',
        completed: true
    },
    {
        key: '2',
        readingType: ReadingTypes.BLOG,
        title: 'A Guide to Consistent Hashing',
        description: 'A blogpost explaining hashing and a new how to use distributed hashing with more complex systems',
        keywords: ['Hashing', 'Distributed', 'Hashmap'],
        link: 'https://www.toptal.com/big-data/consistent-hashing?fbclid=IwAR3PBcnTM2QOFJ8CHk4sUYFpKuBEvOfTKjgbAX_XK_915qrIPgYC3esb1bo',
        completed: true
    },
    {
        key: '3',
        readingType: ReadingTypes.BOOK,
        title: 'Mastering API Architecture',
        description: 'Strategies for building and testing REST APIs that use API gateways to combine offerings at the microservice level. ',
        keywords: ['API', 'HTTP', 'gRPC'],
        link: 'https://www.toptal.com/big-data/consistent-hashing?fbclid=IwAR3PBcnTM2QOFJ8CHk4sUYFpKuBEvOfTKjgbAX_XK_915qrIPgYC3esb1bo',
        completed: false
    },
    {
        key: '4',
        readingType: ReadingTypes.BLOG,
        title: 'Export default and export differences',
        description: 'Strategies for building and testing REST APIs that use API gateways to combine offerings at the microservice level. ',
        keywords: ['Export', 'Default', 'Typescript'],
        link: 'https://medium.com/@heshramsis/understanding-the-difference-between-export-default-and-export-with-named-exports-in-javascript-f0569c221a3#:~:text=In%20summary%2C%20export%20default%20and,multiple%20values%20as%20named%20exports',
        completed: true
    },
] }

export default ReadingListData
