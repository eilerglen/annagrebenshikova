import { useEffect, useState } from "react";
import arrow from "../../images/icons/arrow_up.svg";

import styles from "./scrolledButton.module.css";

export const ScrolledButton = () => {
  const [show, setShow] = useState(false)

  const toggleVisible = () => {
     const scrolled = document.documentElement.scrollTop;
     if (scrolled > 400) {
        setShow(true)
     }
     else if (scrolled <= 400) {
        setShow(false)
     }
  };

  const scrollToTop = () => {
     window.scrollTo({
        top: 0,
        behavior: 'smooth'
     });
  };

  window.addEventListener('scroll', toggleVisible);
  
  return (
    
    <button style={{display: show ? 'block': 'none'}} className={styles.button} onClick={scrollToTop}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 32 32"
      >
        <title>arrow-up-rounded</title>
        <path d="M21.946 15.047c-0.182 0.272-0.499 0.409-0.817 0.409-0.227 0-0.454-0.091-0.635-0.227l-3.404-2.633v9.532c0 0.59-0.454 1.044-1.044 1.044s-1.044-0.454-1.044-1.044v-9.441l-3.495 2.814c-0.454 0.363-1.089 0.272-1.453-0.136-0.363-0.454-0.272-1.089 0.136-1.453l5.174-4.176c0.045-0.045 0.091-0.045 0.136-0.091h0.045c0.045 0 0.091-0.045 0.136-0.045h0.045c0.045 0 0.091-0.045 0.136-0.045h0.408c0.045 0 0.091 0.045 0.182 0.045h0.045c0.045 0.045 0.091 0.045 0.136 0.091l5.038 3.904c0.545 0.363 0.59 0.999 0.272 1.453zM16 5.333c-5.901 0-10.667 4.766-10.667 10.667s4.766 10.667 10.667 10.667c5.901 0 10.667-4.766 10.667-10.667s-4.766-10.667-10.667-10.667z"></path>
      </svg>
    </button>
  );

 
};
