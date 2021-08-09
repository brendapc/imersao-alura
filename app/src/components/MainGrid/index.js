import styled from "styled-components"

export const MainGrid = styled.main`
  display: grid;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  grid-template-areas: "profileArea" "welcomeArea" "relationsArea";
  
  .profileArea{
    display: none;
    
    @media(min-width: 860px){
      display: block
    }
  }
  
  @media(min-width: 860px){
    grid-gap: 10px;
    max-width: 1100px;
    grid-template-areas: "profileArea welcomeArea relationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`