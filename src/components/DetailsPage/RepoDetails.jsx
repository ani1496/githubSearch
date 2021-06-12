import React from 'react';
import { FaStar, FaBalanceScale } from "react-icons/fa";
import { FiHardDrive } from 'react-icons/fi';
import { FcBinoculars } from 'react-icons/fc';
import { VscFileCode } from 'react-icons/vsc';
import Avatar from '../../images/avatar.png';

const RepoDetails = ({repo}) => {
  const {
    name, description, git_url, homepage,
    stargazers_count, size, watchers,
    language, license, owner,
  } = repo;

  return (
    <div className="container">
      <div className="row space-between">
        <div>
          <div className="row align-items-center">
            <img src={Avatar} alt="avatar" style={{ height: '5em' }}/>
            <div>
              <h3 style={{ 'marginBottom': '5px', marginTop: '0px' }}>{name}</h3>
              <p className="grey">by <a href={owner.url} className="grey">{owner.login}</a></p>
            </div>
          </div>
          <p className="flex marg-1-tb">{description}</p>
          <div className="row marg-2-t">
            <p className="pad-2-r">Take me to:</p>
            <a className="pad-2-r grey" href={git_url}>GitHub Repository</a>
            <a className="grey" href={homepage}>Documentation</a>
          </div>
        </div>
        <div className="column col-4 details-box pad-1 marg-1-l">
          <h3 className="pad-2-b pad-1-l">Details</h3>
          {stargazers_count && <p className="pad-1 flex align-items-center"><FaStar color="#FDB91D" className="pad-1-r"/>{stargazers_count}</p>}
          {size && <p className="pad-1 flex align-items-center"><FiHardDrive color="#00175A"  className="pad-1-r"/>{size}</p>}
          {watchers && <p className="pad-1 flex align-items-center"><FcBinoculars  className="pad-1-r"/>{watchers}</p>}
          {language && <p className="pad-1 flex align-items-center"><VscFileCode color="#009BBB"  className="pad-1-r"/>{language}</p>}
          {license && <p className="pad-1 flex align-items-center"><FaBalanceScale color="#009BBB"  className="pad-1-r"/>{license.name}</p>}
        </div>
      </div>
    </div>
  )
}

export default RepoDetails;