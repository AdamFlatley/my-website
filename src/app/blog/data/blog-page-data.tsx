
import { BlogTicketProps } from '../components/blog-ticket'
import graphql from './images/graphql.png'

export type AllBlogTicketData = {
    data:  BlogTicketProps[]}

const BlogTicketData: AllBlogTicketData = {
    data:  [
        {
            key: '0',
            title: 'GraphQL complexity limits',
            description: 'Why are they so complex?',
            href: 'href',
            topic: 'GraphQl',
            image: graphql.src
        },
        {
            key: '1',
            title: 'GraphQL gateways',
            description: 'Join the federation',
            href: 'href',
            topic: 'GraphQl',
            image: graphql.src
        },
    ]   
}

export default BlogTicketData
