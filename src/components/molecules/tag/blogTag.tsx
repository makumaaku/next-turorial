import styled from "@emotion/styled"

function BlogTag({ tag }: { tag: string }) {
    return (
        <Tag>
            {tag}
        </Tag>
    )
}

export default BlogTag

const Tag = styled.div`
color:white;
background:black;
padding:2px 10px;
border-radius: 30px;
`;