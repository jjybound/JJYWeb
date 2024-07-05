import React, { useState, useEffect,useRef } from 'react';
import { CarouselStyle } from "./style";

import { RightOutlined, LeftOutlined,PauseOutlined,PlayCircleOutlined,CaretRightOutlined,StepBackwardOutlined,StepForwardOutlined } from '@ant-design/icons';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true); // 控制轮播图自动播放状态
    const [audioPlaying, setAudioPlaying]=useState(false);
    const audioRef = useRef(null);

      const slides = [
        {
            image: 'https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/ddaf11c6dfb0cc1752826efa7ddc155.jpg',
            title: '北京',
            description: '北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。'
        },
        {
            image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?cs=srgb&dl=illuminated-tower-2614818.jpg&fm=jpg',
            title: '东京',
            description: '东京（とうきょう、Tōkyō），日本首都，位于日本关东平原中部，是面向东京湾的国际大都市，日本三大都市圈之一东京都市圈的中心城市。“东京”狭义上指东京都、旧东京府或东京都区部（旧东京市），亦可泛指东京都市圈。东京是江户幕府的所在地，江户在庆应4年7月（1868年9月）改名为东京。'
        },
        {
            image: 'https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?cs=srgb&dl=buildings-city-city-view-cityscape-597909.jpg&fm=jpg',
            title: '纽约',
            description: '纽约市（New York City，简称NYC），位于美国纽约州东南部大西洋沿岸，是美国第一大城市及第一大港口，纽约都市圈为世界上最大的城市圈之一，与英国伦敦、中国香港并称为“纽伦港”（Nylonkong）。纽约与伦敦并列为全世界最顶级的国际大都市。2018年11月，纽约被GaWC评为Alpha++级世界一线城市。'
        }
    ];
   useEffect(() => {
    let interval;
    if (isPlaying) {
        interval = setInterval(() => {
            let newIndex = currentIndex + 1;
            if (newIndex >= slides.length) {
                newIndex = 0;
            }
            setCurrentIndex(newIndex);
        }, 10000); // 每隔10秒切换一次轮播图
    }

    return () => clearInterval(interval); // 清除定时器
}, [currentIndex, isPlaying, slides.length]);



    const handleNextClicked = () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
    };

    const handlePrevClicked = () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        setCurrentIndex(newIndex);
    };
    const playAudio = () => { 
    if (audioPlaying) {
        audioRef.current.pause(); // 暂停音频
    } else {
        audioRef.current.play(); // 继续播放音频
    }
    setAudioPlaying(!audioPlaying); // 切换音频播放状态
}

    const handlePlayPauseClicked = () => {
        
        setIsPlaying(!isPlaying); // 切换播放状态
    };

    return (
        <>
            <CarouselStyle />
            <div className="image-slider">
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === currentIndex ? 'current' : ''}`}>
                        <img src={slide.image} alt="" className="image" />
                        <div className="content">
                            <h1 className="title">{slide.title}</h1>
                            <p className="description">{slide.description}</p>
                        </div>
                    </div>
                ))}
                <div id="prev" onClick={handlePrevClicked}>
                    <LeftOutlined />
                </div>
                <div id="next" onClick={handleNextClicked}>
                    <RightOutlined />
                </div>
                <div className='bottons' onClick={handlePlayPauseClicked}>{isPlaying ? <PauseOutlined /> : <PlayCircleOutlined />}</div>
                <div className='mp4 hoverDiv' onClick={playAudio}>
                    <div className="default">
        {/* 其他 div 的内容 */}
    </div>
    <div className="hover">
        <div style={{fontSize:'2.5rem',color:'pink'}}><StepBackwardOutlined /></div>
        <div className='play'>{audioPlaying ? <PauseOutlined /> : <CaretRightOutlined />}</div>
        <div style={{fontSize:'2.5rem',color:'pink'}}><StepForwardOutlined /></div>
    </div>
                </div>
                <audio ref={audioRef} preload="none" src='https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/2563173436.mp3'></audio>
            </div>
            
        </>
    );
};

export default Carousel;
