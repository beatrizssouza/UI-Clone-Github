import React from 'react';
import { Link } from 'react-router-dom';
import { Container, BreadCrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon, } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        
        <Link className={'username'} to={'/beatrizssouza'}>
          beatrizssouza
        </Link>

        <span></span> 

        <Link className={'reponame'}  to={'/beatrizssouza/covid-19'}>
          covid-19
        </Link>  
      </BreadCrumb>

      <p> Contains all of my Covid-19 lessons code. </p>
   
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://https://github.com/beatrizssouza/Covid19-dio'}>
        <GithubIcon />
        <span> View on Github </span>  
      </LinkButton>
    </Container>
  );
}

export default Repo;
