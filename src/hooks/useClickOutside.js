import React from 'react'

const useClickOutside = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
          console.log('im closing it becouse click outside ')
        callback();
      }
    };
    React.useEffect(() => {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    });
  };
  export default useClickOutside 