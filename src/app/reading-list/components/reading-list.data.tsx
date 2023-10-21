const enum ReadingTypes {
    BOOK = 'BOOK',
    BLOG = 'BLOG'
}

export type ReadingListDataType = {
        readingType: ReadingTypes,
        title: string,
        description: string,
        keywords: string[],
        link: string,
        completed: boolean,
}

export const ReadingListData: ReadingListDataType[] =  [
    {
        readingType: ReadingTypes.BLOG,
        title: 'System Design Case Study #1: Exploring Slack’s Real-time Messaging Architecture',
        description: 'An in depth study on Slack\s architecture and why certain services prefer alternative transfer protocols.',
        keywords: ['Architecture','Slack','Stateless','Stateful'],
        link: 'https://scaleyourapp.com/system-design-case-study-real-time-messaging-architecture/?utm_source=tldrwebdev&fbclid=IwAR3s2IHG-xrNXjGz5f4QARU8jspX65g_Mp1OkeZmAYa0CRJx_mwknRqLkko',
        completed: true
    },
    {
        readingType: ReadingTypes.BLOG,
        title: 'A Guide to Consistent Hashing',
        description: 'A blogpost explaining hashing and a new how to use distributed hashing with more complex systems',
        keywords: ['Hashing', 'Distributed', 'Hashmap'],
        link: 'https://www.toptal.com/big-data/consistent-hashing?fbclid=IwAR3PBcnTM2QOFJ8CHk4sUYFpKuBEvOfTKjgbAX_XK_915qrIPgYC3esb1bo',
        completed: true
    },
    {
        readingType: ReadingTypes.BOOK,
        title: 'Mastering API Architecture',
        description: 'Strategies for building and testing REST APIs that use API gateways to combine offerings at the microservice level. ',
        keywords: ['API', 'HTTP', 'gRPC'],
        link: 'https://www.toptal.com/big-data/consistent-hashing?fbclid=IwAR3PBcnTM2QOFJ8CHk4sUYFpKuBEvOfTKjgbAX_XK_915qrIPgYC3esb1bo',
        completed: false
    },
]
