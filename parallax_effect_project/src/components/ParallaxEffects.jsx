import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import styles from './styles.module.css'
import Header from './Header';
import '../App.css';
import Contact from './Contact';
import End from './End';

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

const ParallaxEffects=()=> {
  const parallax = useRef(null);
//   const alignCenter = { display: 'flex', alignItems: 'center' }
  const ref = useRef();
  const scrollTo = (page) => {
    ref.current.scrollTo(page);
  };
  var offset = 0;

  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3} style={{ backgroundColor: "#243b4a" }}>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} alt="Satellite" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="Cloud" />
        </ParallaxLayer>

        {/* <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img src={url('earth')} style={{ width: '60%' }} alt="Earth" />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        /> */}
        <ParallaxLayer sticky={{ start: 1, end: 9 }} speed={0.5} style={{ marginLeft:"5%", display: "flex", alignItems: "flex-end", justifyContent: "flex-start", height: 60, width: 200 }}>
                <p className="ms-4 highlight">
                  <p onClick={() => parallax.current.scrollTo(0)}> ^ back to top</p>
                </p>
              </ParallaxLayer>
              
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <img src={url('server')} style={{ width: '20%' }} alt="Server" /> */}
          <Header scrollTo={scrollTo} offset={offset} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <img src={url('bash')} style={{ width: '40%' }} alt="Bash" /> */}
          <Contact/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          {/* <img src={url('clients-main')} style={{ width: '40%' }} alt="Clients Main" /> */}
          <End />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
export default ParallaxEffects;