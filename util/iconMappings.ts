import React, { ReactElement, ReactNode } from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'
import { IconType } from 'react-icons/lib';
export enum Icons {
    GITHUB = "GITHUB",
    LINKEDIN = "LINKEDIN",
    FACEBOOK = "FACEBOOK",
    TWITTER = "TWITTER",
}

type LinkProperties = {
    icon: IconType,
    url: string
}

const iconMappings:Record<Icons, LinkProperties> = {
    GITHUB: {
        icon: AiFillGithub,
        url: "https://github.com/biratkk"
    },
    LINKEDIN: {
        icon: AiFillLinkedin,
        url: "https://www.linkedin.com/in/birat-koirala/"
    },
    FACEBOOK: {
        icon: AiFillFacebook,
        url: "https://www.facebook.com/birat.koirala.3/"
    },
    TWITTER: {
        icon: AiFillTwitterCircle,
        url: "https://twitter.com/biratkk"
    },
}

export default iconMappings;