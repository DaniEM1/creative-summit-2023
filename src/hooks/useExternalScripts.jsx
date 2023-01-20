import { useEffect } from 'react';

export function useExternalScripts( url, visibility ){
    
    // console.log(visibility)
  
    useEffect(() => {

    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", url);

    try {
      head.appendChild(script);
      
    } catch (error) {
        console.log(error)
    }

    

    return () => {
      head.removeChild(script);
    };
  }, [url]);
};