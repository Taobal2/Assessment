import React from 'react'
import GitHubBottom from './GitHubBottom'
import image1 from "../GitHubImages/co-authoring.png"
import image2 from "../GitHubImages/pr-checks.png"
import image3 from "../GitHubImages/syntax-highlighting.png"

const BottomBuild = () => {
    return (
        <div>
            <GitHubBottom image={image1} 
            text="Attribute commits with collaborators easily" content="Quickly add co-authors to your commit. Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution, and see the co-authors on github.com"/>
            <GitHubBottom chn image={image2} 
            text="Checkout branches with pull requests and view CI statuses" content="See all open pull requests for your repositories and check them out as if they were a local branch, even if they're from upstream branches or forks. See which pull requests pass commit status checks, too!"/>
            <GitHubBottom image={image3} 
            text= "Syntax highlighted diffs" content="The new GitHub Desktop supports syntax highlighting when viewing diffs for a variety of different languages."/>
        </div>
    )
}

export default BottomBuild
