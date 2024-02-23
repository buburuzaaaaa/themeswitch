// import chevy from './imgs/chevy.png'
import Ls9 from './imgs/ls9.jpg'
import ls7 from './imgs/ls7.jpg'
import ls6 from './imgs/ls6.jpg'
import ls3 from './imgs/ls3.jpg'
import ls2 from './imgs/ls2.jpg'
import ls1 from './imgs/ls1.jpg'
// import '';
import Header1 from './Header1'
import { useRef } from 'react';

function App() {
  const ls9Ref = useRef(null);
  const ls7Ref = useRef(null);
  const ls6Ref = useRef(null);
  const ls3Ref = useRef(null);
  const ls2Ref = useRef(null);
  const ls1Ref = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div className="App">
      {/* <Header1 /> */}
      {/* <img src={chevy} alt="" className="logo"/> */}
      {/* <nav className="navbar">
        <ul>
          <li><a href="#" onClick={() => scrollToRef(ls9Ref)}>LS9</a></li>
          <li><a href="#" onClick={() => scrollToRef(ls7Ref)}>LS7</a></li>
          <li><a href="#" onClick={() => scrollToRef(ls6Ref)}>LS6</a></li>
          <li><a href="#" onClick={() => scrollToRef(ls3Ref)}>LS3</a></li>
          <li><a href="#" onClick={() => scrollToRef(ls2Ref)}>LS2</a></li>
          <li><a href="#" onClick={() => scrollToRef(ls1Ref)}>LS1</a></li>
        </ul>
      </nav> */}
      {/* <hr /> */}
      <div className='ls9' ref={ls9Ref}>
        <img src={Ls9} alt="" />
       <p>The Chevy LS9 motor stands as a powerhouse in the realm of high-performance engines, revered for its remarkable capabilities and tunability. As the heart of the sixth-generation Corvette ZR1, the LS9 engine boasts a supercharged 6.2-liter V8 configuration, engineered to deliver an awe-inspiring 638 horsepower and 604 lb-ft of torque. Its tunability is a hallmark feature, offering enthusiasts and tuners a wide array of options to extract even more performance from this potent platform. With its robust internals, advanced fuel delivery system, and electronic engine management, the LS9 provides ample opportunities for aftermarket modifications, including supercharger upgrades, camshaft swaps, and tuning adjustments to unleash its full potential on both the street and the track. The LS9 engine remains a favorite among enthusiasts for its blend of raw power and tunability, making it a cornerstone of modern American performance engineering.</p>
      </div>
      <div className='ls7' ref={ls7Ref}>
        <img src={ls7} alt="" />
       <p>The LS7 engine represents the epitome of naturally aspirated performance within the Chevrolet lineup. Powering the legendary Corvette Z06, this hand-built 7.0-liter V8 marvel churns out an exhilarating 505 horsepower and 470 lb-ft of torque, making it one of the most potent naturally aspirated engines ever produced by General Motors. Its tunability is highly regarded among automotive enthusiasts and professional tuners alike. With its sturdy aluminum block, forged internals, and advanced engine management system, the LS7 offers a solid foundation for performance upgrades such as cylinder head porting, aftermarket camshafts, and exhaust enhancements. Whether dominating the track or thrilling drivers on the open road, the LS7's tunability provides ample opportunities for customization, enabling enthusiasts to unlock its full potential and experience the thrill of pure American muscle at its finest.</p>
      </div>
      <div className='ls6' ref={ls6Ref}>
        <img src={ls6} alt="" />
        <p>The LS6 engine represents a pinnacle of performance and innovation in the lineage of Chevrolet's small-block V8 engines. Originally introduced in the iconic Corvette Z06 of the early 2000s, the LS6 is a 5.7-liter powerhouse known for its impressive power output and tunability. With its lightweight aluminum construction and advanced engineering, the LS6 produces a formidable 405 horsepower and 400 lb-ft of torque, making it a formidable contender on both the street and the track. Its tunability is a key attribute, offering enthusiasts a platform ripe for modifications and enhancements. From aftermarket camshafts and intake upgrades to exhaust modifications and tuning adjustments, the LS6 provides ample opportunities for enthusiasts to extract even more performance from this legendary powerplant. With its robust design and versatile nature, the LS6 engine continues to captivate enthusiasts and remain a cornerstone of modern American muscle car culture.</p>
      </div>
      <div className='ls3' ref={ls3Ref}>
        <img src={ls3} alt="" />
        <p>The LS3 engine stands as a modern testament to Chevrolet's commitment to performance and innovation. Powering a range of iconic vehicles such as the Corvette, Camaro, and various high-performance GM vehicles, the LS3 is a 6.2-liter V8 marvel renowned for its impressive power output and tunability. With a naturally aspirated design, the LS3 delivers an exhilarating 430 horsepower and 424 lb-ft of torque, providing drivers with a thrilling driving experience both on the street and the track. Its tunability is a defining feature, offering enthusiasts a versatile platform for aftermarket modifications and enhancements. From camshaft upgrades and intake modifications to exhaust enhancements and tuning adjustments, the LS3 engine provides ample opportunities for enthusiasts to customize and optimize performance to suit their preferences. With its blend of power, reliability, and tunability, the LS3 engine continues to captivate automotive enthusiasts and solidify its place as a cornerstone of modern American muscle car engineering.</p>
      </div>
      <div className='ls2' ref={ls2Ref}>
        <img src={ls2} alt="" />
        <p>The LS2 engine stands as a testament to Chevrolet's engineering prowess and commitment to high-performance automotive excellence. As a 6.0-liter V8 powerhouse, the LS2 has earned its place in automotive history, powering iconic vehicles such as the Corvette C6 and various high-performance GM models. With its naturally aspirated design, the LS2 delivers a formidable 400 horsepower and 400 lb-ft of torque, offering drivers exhilarating acceleration and thrilling performance on the road and track alike. What sets the LS2 apart is its tunability, providing enthusiasts with a versatile platform for aftermarket modifications and enhancements. From camshaft upgrades and intake modifications to exhaust enhancements and tuning adjustments, the LS2 engine offers ample opportunities for customization to suit individual preferences and performance goals. With its combination of power, reliability, and tunability, the LS2 engine continues to inspire automotive enthusiasts and solidify its place as a cornerstone of modern American muscle car engineering.</p>
      </div>
      <div className='ls1' ref={ls1Ref}>
        <img src={ls1} alt="" />
        <p>The LS1 engine is an iconic symbol of Chevrolet's dedication to high-performance automotive engineering. Introduced in the late 1990s, the LS1 quickly became legendary for its power, reliability, and versatility. As a 5.7-liter V8 powerhouse, the LS1 propelled a new generation of performance vehicles, including the Corvette C5 and Camaro SS. With its naturally aspirated design, the LS1 delivers an impressive 350 horsepower and 365 lb-ft of torque, providing drivers with exhilarating acceleration and thrilling performance on both the street and the track. What sets the LS1 apart is its tunability, offering enthusiasts a solid foundation for aftermarket modifications and enhancements. From camshaft upgrades and intake modifications to exhaust enhancements and tuning adjustments, the LS1 engine provides ample opportunities for customization to suit individual preferences and performance goals. With its combination of power, reliability, and tunability, the LS1 engine remains a cornerstone of modern American muscle car culture and continues to inspire automotive enthusiasts around the world.</p>
      </div>
    </div>
  );
}

export default App;
