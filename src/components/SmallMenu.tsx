import React, { useState, useEffect, useRef } from 'react';

import MenuList from './MenuList';


export default function SmallMenu() {


  const CloseLoop = () => {

    function handleClick() {
      console.log('click');
      setSlide('close');
    }

    return (
      <button
        type="button"
        className="button-styles"
        onClick={() => setSlide('close')}
      // onClick={handleClick()}
      >
        <span
          style={{
            transform: 'translateY(-2rem)'
          }}
          className="span-styles"
        >
          CLOSE<br />MENU
        </span>
      </button>

    )
  }

  const [slide, setSlide] = useState('firstload');
  console.log(slide);
  const [amount, setAmount] = useState(0);
  const ref = useRef();


  useEffect(() => {
    console.log(ref.current.clientHeight);
    setAmount(ref.current.clientHeight);
  });

  if (slide === "firstload") {
    console.log('firstload');
    return (
      <div className='menu__small'
        style={{
          height: '2rem',
        }}
      >
        <CloseLoop />
        <nav
          className='menu__small'
          style={{
            transform: 'translateY(-' + amount + 'px)',
            marginBottom: '-' + amount + 'px',
            visibility: "hidden",
          }}
          ref={ref}
        >
          {/* <MenuList /> */}
        </nav>
      </div >
    );
  }

  if (slide === "menu") {
    console.log('menu');
    return (
      <div className='menu__small'>
        <CloseLoop />
        <nav
          className='menu__small'
          style={{
            transform: 'translateY(-' + amount + 'px)',
            marginBottom: '-' + amount + 'px',
            visibility: "hidden",
          }}
          ref={ref}
        >
          <MenuList />
        </nav>
      </div>
    );
  }

  console.log('else');
  return (
    <div className='menu__small'
      style={{
        height: '2rem',
      }}
    >
      <button
        className="button-styles"
        type="button"
      // onClick={() => setSlide('menu')}
      >
        <span
          style={{ transform: 'translateY(0)' }}
          className="span-styles"
        >CLOSE<br />MENU
        </span>
      </button>
      <nav
        style={{
          transform: 'translateY(0)',
          // marginBottom: '-' + amount + 'px',
        }}
      // ref={ref}
      >
        <MenuList />
      </nav>
    </div>
  );
}