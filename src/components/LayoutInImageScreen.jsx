import { useEffect, useRef, useState } from 'react';
import { useExternalScripts } from '../hooks/useExternalScripts.jsx';

import { ArticleContent } from '../Content/ArticleContent.jsx'
import { FooterContent } from '../Content/FooterContent.jsx'
// import { InImageScreen } from "./InImageScreen";

export const LayoutInImageScreen = () => {

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

  const initialRender = useRef(true)

  
  useEffect(() => {
    
    // console.log('screen: ', visibilityScreen);

    if (initialRender.current) {
      console.log('First render');
      initialRender.current = false;
    } else {

      // var hypeDocument = HYPE.documents['index'];

      // var hypeDocument0 = Object.values(HYPE.documents)[0];
      // var hypeDocument1 = Object.values(HYPE.documents)[1];  

      if( visibilityScreen === 'invisible'){
        // hypeDocument1.goToTimeInTimelineNamed(0, 'Main Timeline');
        // hypeDocument0.startTimelineNamed('Main Timeline', hypeDocument0.kDirectionForward);
        
      } else{
        // hypeDocument0.goToTimeInTimelineNamed(0, 'Main Timeline');
        // hypeDocument1.startTimelineNamed('Main Timeline', hypeDocument1.kDirectionForward);
      }

    }

  }, [visibilityScreen])
  


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
                <iframe src='../assets/ii-onion.html' id='in-image' className={`w-full h-full absolute bottom-0 ${visibilityImage}`}>
                  {/* <InImageScreen position={'absolute'} visibility={visibilityImage}/> */}
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
        <iframe src="../assets/is-onion.html" id='in-screen' className={`w-full h-full fixed bottom-0 ${visibilityScreen}`}></iframe>
        {/* <InImageScreen position={'fixed'} visibility={visibilityScreen}/> */}
      </div>
    </>
  );
};
