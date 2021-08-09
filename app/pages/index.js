import { Box } from '../src/components/Box'
import { MainGrid } from '../src/components/MainGrid'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/alurakutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

export const ProfileSidebar = ({githubUser}) =>{
  return(
    <Box >
          <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px'}} />
        </Box>             
  )
}

export default function Home() {
  const githubUser = 'brendapc'
  const pessoasFavoritas = ['omariosouto', 'marcobrunodev']
  
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
      </div>
      <div className="relationsArea" style={{ gridArea: 'relationsArea'}}>        
        <Box>
          comunidades
        </Box>
        <Box>
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
        </Box>
      </div>
    </MainGrid>
    </>
  )
}
