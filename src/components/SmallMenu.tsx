import React, { useState, useEffect, useRef } from 'react';

import MenuList from './MenuList';


export default function SmallMenu() {

  const [slide, setSlide] = useState('firstload');
  // console.log(slide);
  const [amount, setAmount] = useState(0);
  const ref = useRef();


  useEffect(() => {
    if (ref.current) {
      console.log(ref.current);
      console.log(ref.current.clientHeight);
      setAmount(ref.current.clientHeight);
    }
  }, []);

  if (slide === "firstload") {

    useEffect(() => {
      setAmount(ref.current.clientHeight);
    });

    console.log(slide);

    return (
      <div className='small-menu'
        style={{
          height: '2rem',
        }}
      >
        <button
          className="button-spinner"
          onClick={() => setSlide('open')}
          type='button'
        >
          <span>
            OPEN<br />
            MENU
          </span>
        </button>
        <nav
          style={{
            transform: `translateY(-${amount}px)`,
            marginBottom: `-${amount}px`,
            visibility: "hidden",
          }}
          ref={ref}
        >
          <menu>
            <MenuList />
          </menu>
        </nav>
      </div >
    );
  }

  if (slide === "open") {

    useEffect(() => {
      setAmount(ref.current.clientHeight);
    });

    console.log(slide);

    return (
      <div className='small-menu'>
        <button
          className="button-spinner"
          onClick={() => setSlide('closed')}
          type="button"
        >
          <span>
            CLOSE<br />
            MENU
          </span>
        </button>
        <nav
          style={{
            transform: 'translateY(0)',
            marginBottom: `-${amount}px`,

          }}
          ref={ref}
        >
          <menu>
            <MenuList />
          </menu>
        </nav>
      </div>
    );
  }

  if (slide === "closed") {

    console.log(slide);

    useEffect(() => {
      setAmount(ref.current.clientHeight);
    });

    return (
      <div className='small-menu'
        style={{
          height: '2rem',
        }}
      >
        <button
          className="button-styles"
          type="button"
          onClick={() => setSlide('open')}
        >
          <span>
            OPEN<br />
            MENU
          </span>
        </button>
        <nav
          style={{
            transform: `translateY(-${amount}px)`,
            marginBottom: `-${amount}px`,
            visibility: "hidden",
          }}
          ref={ref}
        >
          <menu>
            <MenuList />
          </menu>
        </nav>
      </div>
    );
  }

  return null;
}