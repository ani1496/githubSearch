import React from 'react';
import { useStore } from './store';
import { FaStar} from "react-icons/fa";
import { FiHardDrive } from 'react-icons/fi';
import { FcBinoculars } from 'react-icons/fc';
import { VscFileCode } from 'react-icons/vsc';

const ShowAll = () => {
  const { repos } = useStore();

  return (
    <div>
    {repos.map(repo => {
      const { id, name, description, stargazers_count, size, watchers, language} = repo;

      return (
        <div className="column repo marg-1-tb" key={id}>
          <h2 className="pad-1-b">{name}</h2>
          <p>{description}</p>
          <div className="row pad-1-t">
            {stargazers_count && <p className="pad-2-r"><FaStar color="#FDB92D" className="pad-1-r"/>{stargazers_count}</p>}
            {size && <p className="pad-2-r"><FiHardDrive color="#00175A"  className="pad-1-r"/>{size}</p>}
            {watchers && <p className="pad-2-r"><FcBinoculars  className="pad-1-r"/>{watchers}</p>}
            {language && <p><VscFileCode color="#009BBB"  className="pad-1-r"/>{language}</p>}
          </div>
        </div>
      );
    })}
    </div>
  );
}

export default ShowAll;