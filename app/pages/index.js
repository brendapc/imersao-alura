import { Box } from '../src/components/Box'
import { MainGrid } from '../src/components/MainGrid'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/alurakutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'
import { useState } from 'react'

export const ProfileSidebar = ({githubUser}) =>{
  return(
    <Box as="aside">
      <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px'}} />
      <hr />
      <p>
      <a className="boxLink" href={`https://github.com/${githubUser}`} >@{githubUser}</a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>             
  )
}

export default function Home() {
  const githubUser = 'brendapc'
  const [comunidades, setComunidades] = useState([{
    id: new Date().toISOString(),
    title: 'odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }])
  const pessoasFavoritas = ['omariosouto', 'marcobrunodev', 'benawad', 'waldemarnt', 'lucasmontano', 'ForrestKnight']
  
  const handleNewCommunity = (event) =>{
    event.preventDefault()
    const dadosForm = new FormData(event.target)

    const community = {
      id: new Date().toISOString(),
      title: dadosForm.get('title'),
      image: dadosForm.get('image')
    }

    setComunidades((old)=>[...old, community])
  }

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser={githubUser} />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">
          Bem-vinda(o)
          </h1>
          <OrkutNostalgicIconSet />
        </Box>
        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>
          <form onSubmit={handleNewCommunity}>
            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"
              />
            </div>
            <div>
              <input 
                placeholder="Coloque uma url para usarmos de capa da sua comunidade" 
                name="image" 
                aria-label="Coloque uma url para usarmos de capa da sua comunidade"
                type="text"
              />
            </div>
            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className="relationsArea" style={{ gridArea: 'relationsArea'}}>    
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map(currentItem => (
                <li key={currentItem.id}>
                  <a href={`/users/${currentItem.title}`}  >
                    <img src={currentItem.image}/>
                    <span>{currentItem.title}</span>
                  </a>
                </li>
                ))}
            </ul>
          </ProfileRelationsBoxWrapper>    
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map(currentPerson => (
                <li>
                  <a href={`/users/${currentPerson}`} key={currentPerson} >
                    <img src={`https://github.com/${currentPerson}.png`} />
                    <span>{currentPerson}</span>
                  </a>
                </li>
                ))}
            </ul>
          </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
