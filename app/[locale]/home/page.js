'use client'

import Hero from '@components/Hero'
import {useTranslations} from 'next-intl';
import Services from '@components/Services';
import Skills from '@components/Skills';
import Contact from '@components/Contact';
import { useEffect } from 'react';

export default function Index({locale}) {
  const t = useTranslations('home');
  useEffect(() => {
    document.querySelectorAll('a[href^="/"][href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
          const anchor = this.getAttribute('href').split('#')[1];
          console.log(anchor)
          const targetElement = document.querySelector('#' + anchor)
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      });
}, []);
  
});
  return (
    <>  
      <Hero/>
      <Services/>
      <Skills/>
      <Contact/>
    </>
      
  )
}


