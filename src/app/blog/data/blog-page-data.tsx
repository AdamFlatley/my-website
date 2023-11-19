
import { BlogTicketProps } from '../components/blog-ticket'
import graphql from './images/graphql.png'
import API from './images/API.png'
import APIFull from './images/API-full.png'

export type AllBlogTicketData = {
    data:  BlogTicketProps[]}

//when adding a blog href make sure to use blog/slug
const BlogTicketData: AllBlogTicketData = {
    data:  [
        {
            key: '0',
            title: 'GraphQL complexity limits',
            description: 'Why are they so complex?',
            href: 'blog/graphql-complexity',
            topic: 'GraphQl',
            image: graphql.src
        },
        {
            key: '1',
            title: 'GraphQL gateways',
            description: 'Join the federation',
            href: 'blog/graphql-gateways',
            topic: 'GraphQl',
            image: graphql.src
        },
        {
            key: '2',
            title: 'gRPC vs HTTP',
            description: 'Which to use and when?',
            href: 'blog/grpc-vs-http',
            topic: 'API',
            image: API.src
        }, 
        {
            key: '3',
            title: 'gRPC vs HTTP',
            description: 'Which to use and when?',
            href: 'blog/grpc-vs-http',
            topic: 'API',
            image: APIFull.src
        },      ]   
}

export default BlogTicketData
