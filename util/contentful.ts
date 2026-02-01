import { Asset } from "contentful";

function makeImageURL(asset: Asset | undefined){
    if(typeof asset === 'undefined') {
        return undefined;
    }

    return `https:${asset.fields.file?.url?.toString()}`
}

export const cf = {
    makeImageURL
}