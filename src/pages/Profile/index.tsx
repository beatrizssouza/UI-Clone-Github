import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>

        <LeftSide> 
          <ProfileData 
            username={'Beatrizssouza'}
            name={'Beatriz Silva Souza'}
            avatarUrl ={'https://avatars.githubusercontent.com/u/49240794?v=4'}
            followers={20}
            following={5}
            company={'VipTech'}
            location={'Campo Mourão, Brazil'}
            email={'beatrizssouza00@gmail.com'}
            blog={'https://www.linkedin.com/in/beatriz-silva-a96a07187/'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1,2,3,4,5,6].map(n => (
                <RepoCard 
                  key={n}
                  username={'beatrizssouza'}
                  reponame={'covid-19'}
                  description={'Contains all of my page covid lessons code'}
                  language={n % 3 == 0 ? 'Javascript': 'TypeScript'}
                  stars={8}
                  forks={4}
                  />
              ))}
            </div>
         
          </Repos>
                
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
        
          <RandomCalendar />
        </RightSide>
      
      </Main>
    </Container>
  );
}

export default Profile;