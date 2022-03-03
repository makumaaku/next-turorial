import styled from "@emotion/styled"
import Link from 'next/link'

function BlogTag({ tag }: { tag: string }) {
    return (
        <Link href={`/tag/${encodeURIComponent(tag)}`}>
            <a><Tag>
                {tag}
            </Tag></a>
        </Link>

    )
}

export default BlogTag

const Tag = styled.div`
color:white;
background:black;
padding:2px 10px;
border-radius: 30px;
`;