import React from 'react'
import GithubLogo from '../../../images/GitHub-Emblem.png'
import GQLLogo from '../../../images/graphql-logo.png'
import JavaLogo from '../../../images/Java-Logo.png'
import SpringBootLogo from '../../../images/spring-boot-logo.png'
import TSLogo from '../../../images/Typescript_logo.svg.png'

export const TechStrip = () => {
    return (
    <div className="display flex flex-direction column justify-around">
        <a href='https://github.com/AdamFlatley' target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo.src} alt="Github Logo" />
        </a>
        <img src={GQLLogo.src} alt="GraphQL Logo" />
        <img src={JavaLogo.src} alt="Java Logo" />   
        <img src={SpringBootLogo.src} alt="Spring Boot Logo" />
        <img src={TSLogo.src} alt="TypeScript Logo" />
    </div>

)
}