import React, { Component } from 'react'

import SpringyScroll from 'react-springy-scroll'
import BlockImage from 'react-block-image'

import ribbon from './ribbon.png'
import image0 from './assets/0.jpg'
import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'
import image6 from './assets/6.jpg'
import image7 from './assets/7.jpg'
import image8 from './assets/8.jpg'
import image9 from './assets/9.jpg'
import image10 from './assets/10.jpg'
import image11 from './assets/11.jpg'
import image12 from './assets/12.jpg'
import image13 from './assets/13.jpg'
import image14 from './assets/14.jpg'
import image15 from './assets/15.jpg'
import image16 from './assets/16.jpg'
import image17 from './assets/17.jpg'
import image18 from './assets/18.jpg'
import image19 from './assets/19.jpg'
import image20 from './assets/20.jpg'
import image21 from './assets/21.jpg'
import image22 from './assets/22.jpg'
import image23 from './assets/23.jpg'
import image24 from './assets/24.jpg'

const images = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24
]

export default class App extends Component {
  render () {
    return (
      <SpringyScroll.Provider>
        <div
          style={{
            padding: '48px 0',
            background: '#000',
            width: '100%',
            minHeight: '100vh',
            color: '#fff'
          }}
        >
          <a href='https://github.com/transitive-bullshit/react-springy-scroll'>
            <img
              src={ribbon}
              alt='Fork me on GitHub'
              style={{
                position: 'absolute',
                zIndex: 1000,
                top: 0,
                right: 0,
                border: 0
              }}
            />
          </a>

          <h1 style={{ textAlign: 'center' }}>
            React Springy Scroll Thingy
          </h1>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {images.map((image, index) => (
              <SpringyScroll>
                <div
                  key={index}
                >
                  <BlockImage
                    src={image}
                    style={{
                      width: '22vmax',
                      height: '22vmax',
                      margin: '4vmax 4vmax 0 0'
                    }}
                  />
                </div>
              </SpringyScroll>
            ))}
          </div>
        </div>
      </SpringyScroll.Provider>
    )
  }
}
