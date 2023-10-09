import React from 'react'
import GithubLogo from '../../../images/GitHub-Emblem.png'
import GQLLogo from '../../../images/graphql-logo.png'

export const TechStrip = () => {


    return (
    <div>
        <p>tech strip here</p>
        <img src={GithubLogo.src} alt="Github Logo" />
        <img src={GQLLogo.src} alt="GraphQL Logo" />
    </div>
)
}