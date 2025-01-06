export type DocNode = {
    id: string,
    parentId?: string,
    caption: string,
    type: "plainText" | "json",
    content: string,
}

export const getChildNodes = (nodes: DocNode[], parentNode: DocNode | undefined) => {
    return nodes.filter(n => n.parentId == parentNode?.id);
}


