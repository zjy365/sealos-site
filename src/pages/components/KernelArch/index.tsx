import React, { useLayoutEffect } from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser';
import Translate from '@docusaurus/Translate';
import '@site/src/css/animate.css'

import './index.scss'

const HomeKernelArch = ({isPc}: {isPc: boolean}) => {
  const isBrowser = useIsBrowser();

  const cards = [
    {id:'1',title: <Translate>Distributed Applications</Translate>, desc: <Translate>Anything else as Cloud OS Applications each combination to meet various requirements and scenarios</Translate>},
    {id:'2',title: <Translate>Cloud Kernel</Translate>, desc: <Translate>Using kubernetes as Cloud OS Core abstracting underlying resources / defining resource interfaces / standardizing application management</Translate>},
    {id:'3',title: <Translate>Cloud Driver</Translate>, desc: <Translate>Using CRI CNI CSI as Cloud OS Drivers with compute/storage/network like containerd/calico/openebs to pooling every resource everywhere</Translate>},
  ]

  useLayoutEffect(() => {
    /* 加载动画 */
    // @ts-ignore nextline
    if(isBrowser && isPc && WOW) {
      // @ts-ignore nextline
      new WOW({
        boxClass: 'card0',
        animateClass: 'rollIn',
        offset: 0,
        mobile: true,
        live: false
      }).init()
      // @ts-ignore nextline
      new WOW({
        boxClass: 'card1',
        animateClass: 'lightSpeedIn',
        offset: 0,
        mobile: true,
        live: false
      }).init()
      // @ts-ignore nextline
      new WOW({
        boxClass: 'card2',
        animateClass: 'rollIn',
        offset: 0,
        mobile: true,
        live: false
      }).init()
    }
  }, [isBrowser])

  return (
    <div id='KernelArch' className='home-kernel-arch'>
      <h1 className='title'><Translate>Kernel Arch</Translate></h1>
      <div style={{position: 'relative'}}>
        <img 
          className='example' 
          src="illustrations/Kernel-Arch.png" 
          alt="" 
        />
        <div className="cards">
          {cards.map((card, index) => (
            <div 
              key={card.id} 
              className="card-item"
            >
              <div className={`card${index}`} data-wow-duration="1s">
                <div className="index">0{index+1}</div>
                <main>
                  <h2>{card.title}</h2>
                  <footer>{card.desc}</footer>
                </main>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img 
        className='example2' 
        src="illustrations/Kernel-Arch2.png" 
        alt="" 
      />
    </div>
  )
}

export default React.memo(HomeKernelArch)