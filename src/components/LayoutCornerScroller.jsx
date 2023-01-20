import { useEffect, useRef, useState } from 'react';
import { useExternalScripts } from '../hooks/useExternalScripts.jsx';

import { ArticleContent } from '../Content/ArticleContent.jsx'
import { FooterContent } from '../Content/FooterContent.jsx'
// import { InImageScreen } from "./InImageScreen";
// import { FrameReverseCNV } from "./CornerReverseCNV";
// import { FrameScroller } from "./FrameScroller";

export const LayoutCornerScroller = () => {

  // useExternalScripts('../assets/is-onion.hyperesources/isonion_hype_generated_script.js'); 
  // useExternalScripts('../assets/is-onion.hyperesources/isonion_hype_generated_script.js'); 

  const image = useRef(null);
  
  const [visibilityImage, setVisibilityImage] = useState('visible');
  const [visibilityScreen, setVisibilityScreen] = useState('invisible');  
  
  useEffect(() => {
    const handleScroll = (e) => {
      // setScrollTop(window.scrollY);
      const { bottom } = image.current.getBoundingClientRect();
      
      if( bottom <= 0 ){
        setVisibilityImage('invisible');
        setVisibilityScreen('visible');
        // playAnimScreen();

      }else {
        // console.log('In Image')
        setVisibilityImage('visible')
        setVisibilityScreen('invisible');

      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
      <div className='w-screen h-fit'>
        <article className="gg-article">
          <div className="gg-article__row">
            <main className="gg-article__col">
              <div>
                <h1 className="gg-article__header">
                  <span className="p">Loremmisdas</span>
                  <span className="p">asdawee</span>
                  <span className="p">nim</span>
                </h1>
              </div>
              <div 
                ref={image}
                className="gg-article__media-container"
              >
                <div id="gg-article__media"></div>
                <iframe src='../assets/ii-corner-scroll.html' id='in-image-corner' className={`w-full h-full absolute bottom-0 ${visibilityImage}`}>
                </iframe>
              </div>
              <ArticleContent />
            </main>
            <aside className="gg-sidebar">
              <div className="gg-sidebar__element"></div>
              <div className="gg-sidebar__element"></div>
              <div className="gg-sidebar__element"></div>
            </aside>
          </div>
        </article>
        <FooterContent />
        <iframe src="../assets/is-corner-scroll.html" id='in-screen-corner' className={`w-full h-full fixed bottom-0 ${visibilityScreen}`}></iframe>
      </div>
    </>
  );
};