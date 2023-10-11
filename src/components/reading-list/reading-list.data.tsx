enum ReadingType {
    BOOK = 'Book',
    BLOG = 'Blog',
    VIDEO = 'Video'    
}

type ReadingListObject = {
    title: String,
    readingType: ReadingType,
    read: Boolean,
    understood: Boolean,
    description: String,
    keywords: String[],
    link: String,
}

export const ReadingList: ReadingListObject[] = [
    {
    title: 'System Design Case Study #1: Exploring Slack’s Real-time Messaging Architecture',
    readingType: ReadingType.BLOG,
    read: false,
    understood: false,
    description: 'A walkthrough of the architecture that slack uses for it\'s low latency systems and the tradeoffs by being a stateful system',
    keywords: ['Slack', 'Stateful', 'Architecture'],
    link: 'https://scaleyourapp.com/system-design-case-study-real-time-messaging-architecture/?utm_source=tldrwebdev&fbclid=IwAR0MPvLhRazt1wz8VA34buMVT9VptniqL2iN20SoVRpVOCmRiJmgbKX0-Fo'
    },
    {
    title: 'A Guide to Consistent Hashing',
    readingType: ReadingType.BLOG,
    read: false,
    understood: false,
    description: 'An introduction to hashing and how it can speed up searching with indexing',
    keywords: ['Hashing', 'Hashmap'],
    link: 'https://www.toptal.com/big-data/consistent-hashing?fbclid=IwAR2nzSsT-LVM12KVoi9wtilrjqgDY0fGW8iT6BU-k_RMRV-ACDewSPPnDYso'
    }


]