import { useEffect, useRef, useState } from 'react';
import { useExternalScripts } from '../hooks/useExternalScripts.jsx';

import { ArticleContent } from '../Content/ArticleContent.jsx'
import { FooterContent } from '../Content/FooterContent.jsx'
// import { InImageScreen } from "./InImageScreen";
// import { CNV } from './CNV.jsx';
// import { CornerReverseCNV } from "./CornerReverseCNV";


export const LayoutCornerReverseCNV = () => {

  // useExternalScripts('../assets/is-onion.hyperesources/isonion_hype_generated_script.js'); 
  // useExternalScripts('../assets/is-onion.hyperesources/isonion_hype_generated_script.js'); 

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
                className="gg-article__media-container"
              >
                <div id="gg-article__media"></div>
                <iframe src='../assets/reverse-cnv.html' id='in-image' className='w-full h-full absolute bottom-0'>
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
      </div>
    </>
  );
};
