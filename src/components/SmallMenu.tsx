import React, { useState, useEffect, useRef } from 'react';

import MenuList from './MenuList';


export default function SmallMenu() {

  const [slide, setSlide] = useState('firstload');
  // console.log(slide);
  const [amount, setAmount] = useState(0);

  // const ref = useRef();
  const ref = useRef<HTMLElement | null>(null);

  interface currentTypes {
    current: {
      clientHeight: number;
    };
  }

  useEffect(() => {
    ref.current ? setAmount(ref.current.clientHeight) : null;
  }, []);

  if (slide === "firstload") {

    useEffect(() => {
      ref.current ? setAmount(ref.current.clientHeight) : null;
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
      ref.current ? setAmount(ref.current.clientHeight) : null;
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
      ref.current ? setAmount(ref.current.clientHeight) : null;
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