import React, { useState, useEffect, useRef } from 'react';

export default function SmallMenu({ menuItems }: { menuItems: { label: string; href: string }[] }) {

  const [slide, setSlide] = useState('firstload');
  // console.log(slide);
  const [amount, setAmount] = useState(0);

  // const ref = useRef();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      setAmount(ref.current.clientHeight);
    }
  }, [slide, menuItems]);

  // console.log(slide);

  if (slide === "firstload") {
    // console.log(slide);

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
          MENU
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
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.href.includes("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </menu>
        </nav>
      </div >
    );
  }

  if (slide === "open") {
    // console.log(slide);

    return (
      <div className='small-menu'>
        <button
          className="button-spinner"
          onClick={() => setSlide('closed')}
          type="button"
        >
          CLOSE
        </button>
        <nav
          style={{
            transform: 'translateY(0)',
            marginBottom: `-${amount}px`,

          }}
          ref={ref}
        >
          <menu>
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.href.includes("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </menu>
        </nav>
      </div>
    );
  }

  if (slide === "closed") {
    // console.log(slide);

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
          MENU
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
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.href.includes("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </menu>
        </nav>
      </div>
    );
  }

  return null;
}