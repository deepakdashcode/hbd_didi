import React, { useState, createRef } from 'react'
import video1 from '../videos/vid1.mp4'
import video2 from '../videos/vid2.mp4'
import video3 from '../videos/vid3.mp4'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
import './videogallery.css'

export default function ReactVideoGallery() {
    const [model, setModel] = useState(false)
    let data = 
    [
        {
            id: 1,
            poster: '',
            videoUri: video1
        },
        {
            id: 2,
            poster: '',
            videoUri: video2
        },
        {
            id: 3,
            poster: '',
            videoUri: video3
        }
    ]
  return (
    <div className='flex items-center justify-center bg-slate-900'>
        
        <div className='gallery'>
            {
                data.map((item, index)=>{
                    let divRef = createRef(null);
                    const openModel = ()=>{
                        divRef.current.classList.remove('video');
                        divRef.current.classList.add('model');
                        setModel(true);
                    }
                    const closeModel = ()=>{
                        divRef.current.classList.add('video');
                        divRef.current.classList.remove('model');
                        setModel(false);
                    }
                    return(
                        <div ref={divRef} className='video' key={index}>
                            {model && <button className='model-close-btn' onClick={()=>{closeModel()}}>X</button>}
                            <div className='video-container' onClick={()=>{openModel()}}>
                                <Video
                                style={{width: '100%'}}
                                autoplay={model}
                                // poster={img3}
                                controls ={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                >
                                    <source src={item.videoUri} type='video/mp4' />
                                    </Video>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
