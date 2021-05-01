import { IconButton } from "theme-ui"
import { GrYoutube } from "react-icons/gr"
import styled from "@emotion/styled"

function YoutubeButton() {
    return (
        <Container href={"https://www.youtube.com/channel/UCYdiXek0pHVjxjbGHKVTbVA"}>
            <IconButton aria-label="Toggle Dark Mode" onClick={() => { }}>
                <GrYoutube size={28} color="white" />
            </IconButton>
        </Container>
    )
}

export default YoutubeButton

const Container = styled.a`
display:flex;
align-items:center;
justify-content:center;
border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color:red;
`
