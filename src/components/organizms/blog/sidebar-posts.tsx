import styled from "@emotion/styled"
import Image from "next/image"
import Link from "next/link";
import { PostData } from "../../../models/PostData"

function SideBarPosts({
    allPostsData
}: {
    allPostsData: PostData[]
}) {
    return (
        <Container>
            <H3>記事一覧</H3>
            <List>
                {allPostsData.map(({ id, date, title, imageUrl }) => (
                    <Link href={`/posts/${id}`}>
                        <a>
                            <ListItem key={id}>
                                <Image src={imageUrl} height={100} width={100} layout="fixed" />
                                <Column>
                                    <PostDate>{date}</PostDate>
                                    <PostTitle>{title}</PostTitle>
                                </Column>
                            </ListItem>
                        </a>
                    </Link>

                ))}
            </List>
        </Container>

    )
}

export default SideBarPosts


const Container = styled.div`
display:flex;
flex-direction:column;
`

const H3 = styled.h3`
display:flex;
justify-content:center;
`

const List = styled.ul`
list-style: none;
display:flex;
flex-direction:column;
justify-content:start;
padding:0px;    
`

const ListItem = styled.li`
display:flex;
flex-direction:row;
border-top: 1px solid #bbb;

&:nth-child(n+2){
    display:none;
 }
`

const Column = styled.div`
display:flex;
flex-direction:column;
padding-left:8px;
`

const PostDate = styled.p`
font-size:12px;
color:#0095fb;
margin:0px;
width:200px;
`

const PostTitle = styled.p`
margin:0px;
width:200px;
`


