import styled from 'styled-components'

export const Title = styled.h1`
  color: ${props => props.primary ? props.theme.colors.primaryText : props.theme.colors.secondaryText};
  font-size: ${props => props.primary ? "1.5em" : "1em"};
  font-family: ${({theme}) => theme.fonts.titleFont.family};
  text-align: center;
  @media only screen and (max-width: 800px) {
    text-align: left;
    font-style: italic;
  }
`

export const Subtitle = styled(Title)`
  font-size: 0.8em;
`
export const Div = styled.div`
/* background-image: url()('https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg'); */
background-color: lightpink	
/* background-image: url()('https://ak.picdn.net/shutterstock/videos/1024941779/thumb/1.jpg?ip=x480')  */
`

