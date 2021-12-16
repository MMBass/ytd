import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import MetaTags from 'react-meta-tags';

function HeadTags() {
  const mode = useSelector(state => state.settings.mode);
  const [color, setColor] = useState();

  useEffect(() => {
    switch (mode) {
      case 'video':
        setColor('#FFC107');
        break;
      case 'playlist':
        setColor('#4b84ff');
        break;
      case 'music':
        setColor('#ff4949');
        break;
      default:
        setColor('#FFC107');
    }
  }, [mode]);

  return (
    <div className='wrapper'>
      <MetaTags>
        <meta name="theme-color" content={color} />
      </MetaTags>
    </div>
  );
}

export default HeadTags;
