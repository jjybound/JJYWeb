import React, { useState, useEffect, useRef } from 'react';
import { CarouselStyle } from "./style";
import { InitlStyle } from './initstyle';
import { LoadStyle } from './loadstyle';
import { JJYDanmu, JJYImg, JJYSendDanmu } from '../../api';
import { RightOutlined, LeftOutlined, PauseOutlined, PlayCircleOutlined, CaretRightOutlined, StepBackwardOutlined, StepForwardOutlined, SendOutlined, ProductOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { InputNumber, Pagination } from 'antd';
import { message } from 'antd';
import { TextArea } from 'antd-mobile';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true); // 控制轮播图自动播放状态
    const [audioPlaying, setAudioPlaying] = useState(true);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const [choseIndex, setChosenIndex] = useState(0)
    const [loading, setLoading] = useState(false)
    const [Show, setShow] = useState(false)
    const [SongIndex, SetSongIndex] = useState(0)
    const [InputNumbers, setInputNumber] = useState([])
    const [slides, setSlides] = useState([])
    const [total, setTotal] = useState(0)
    const audioRef = useRef(null);
    const [pageNum, setPageNum] = useState(1)
    const [isShowText, setIsShowText] = useState(true)
    const [pageSize, setPageSize] = useState(10)
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [messageApi, contextHolder] = message.useMessage();
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const [value4, setValue4] = useState();
    const [danmuInput, setDanMuInput] = useState('')
    const [DanMuList, setDanMuList] = useState([
    ])
    const DanMuListRef = useRef(DanMuList)
    const SongList = [
        { author: "卢广仲", title: "刻在我心底的名字", url: "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/%E9%9F%B3%E4%B9%90%E6%96%87%E4%BB%B6/%E5%88%BB%E5%9C%A8%E6%88%91%E5%BF%83%E5%BA%95%E7%9A%84%E5%90%8D%E5%AD%97-%E5%8D%A2%E5%B9%BF%E4%BB%B2.128.mp3" },
        { author: "棱镜乐队", title: "总有一天你会出现在我身边", url: "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/%E9%9F%B3%E4%B9%90%E6%96%87%E4%BB%B6/%E6%80%BB%E6%9C%89%E4%B8%80%E5%A4%A9%E4%BD%A0%E4%BC%9A%E5%87%BA%E7%8E%B0%E5%9C%A8%E6%88%91%E8%BA%AB%E8%BE%B9.mp3" },
        { author: "棱镜乐队", title: "无法拥有的人要好好道别", url: "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/%E9%9F%B3%E4%B9%90%E6%96%87%E4%BB%B6/%E6%97%A0%E6%B3%95%E6%8B%A5%E6%9C%89%E7%9A%84%E4%BA%BA%E8%A6%81%E5%A5%BD%E5%A5%BD%E9%81%93%E5%88%AB.mp3" },
        { author: "告五人", title: "唯一", url: "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/%E9%9F%B3%E4%B9%90%E6%96%87%E4%BB%B6/%E5%94%AF%E4%B8%80.mp3" },
        { author: "房东的猫", title: "云烟成雨", url: "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/%E9%9F%B3%E4%B9%90%E6%96%87%E4%BB%B6/%E4%BA%91%E7%83%9F%E6%88%90%E9%9B%A8.mp3" },
        { author: "陈奕迅", title: "无条件", url: "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/%E9%9F%B3%E4%B9%90%E6%96%87%E4%BB%B6/%E6%97%A0%E6%9D%A1%E4%BB%B6.mp3" },
        { author: "菲道尔/dior大穎", title: "在加纳共和国离婚", url: "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/%E9%9F%B3%E4%B9%90%E6%96%87%E4%BB%B6/%E5%9C%A8%E5%8A%A0%E7%BA%B3%E5%85%B1%E5%92%8C%E5%9B%BD%E7%A6%BB%E5%A9%9A.mp3" }
    ]
    const backgroundUrl = [
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/v2-7549490fc918c1be985242650e2e74fd_r.jpg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/v2-eb997fb2e88c4868f209d39063c4c55c_r.png",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/82bb53aec77b54b69fcea39941a424bb.jpg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/09353157103_1920x1152.jpg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/d685952fba1b30f0c3cd6919d750d707.jpeg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/c1446e4f01b70bf94aa322b6d69b3902.jpeg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/886907349fa63261a3624594ebec275f8bc048ab.jpg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/7bd943644b6c980bb4e48fa0a8114af3.jpeg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/32452b7ac828a9e08d4f973512246930.jpeg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/1f7751765e88a8ca350ee1ed772574a5.jpg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/7311ef7b1b61f14373ad279aa95ae147.jpeg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/12bk.jpg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/03dd1b874677f373bccc171a680efc33.jpeg",
        "https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/cl/background/f1b32e527245ce029a0e3cf7c6bbc5e9.jpg"






    ];

    // 新增 danmuRef 和 danmuIndex 状态
    const [danmuIndex, setDanmuIndex] = useState(0);

    useEffect(() => {
        inputRefs[0].current.focus();
    }, []);

    const danmuInputChange = (e) => {
        setDanMuInput(e)
    }
    const danmuInputPressEnter = (e) => {

        if (e.key === 'Enter') {
            if (danmuInput !== '') {
                JJYSendDanmu({ ImgId: slides[currentIndex].id, description: danmuInput })
                // 将弹幕添加到 DanMuList 的当前索引后面
                const newDanMuList = [...DanMuList];
                newDanMuList.splice(danmuIndex + 1, 0, { ImgId: slides[currentIndex].id, description: danmuInput, top: `${Math.random() * 45 + 20}%` });
                setDanMuList(newDanMuList);
                setDanMuInput('');
            }
            e.preventDefault();
        }
    };
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
    const handleshowText = () => {
        setIsShowText(!isShowText)

    }
    const backSong = () => {
        if (SongIndex == 0) {
            SetSongIndex(SongList.length - 1)
            setChosenIndex(SongList.length - 1)
        } else {
            SetSongIndex(SongIndex - 1)
            setChosenIndex(choseIndex - 1)
        }
        setTimeout(() => {
            audioRef.current.play()
            setAudioPlaying(true)
        }, 100);
    }
    const AnimationEnd = () => {
        setIsAnimationComplete(true)
    }
    const AnimationStart = () => {
        setIsAnimationComplete(false)
    }
    const chosenSong = (index) => {
        setChosenIndex(index)
        SetSongIndex(index)
        setTimeout(() => {
            audioRef.current.play()
            setAudioPlaying(true)
        }, 100);
    }
    const nextSong = () => {
        console.log(SongIndex)
        console.log(SongList.length)
        if (SongIndex == SongList.length - 1) {
            SetSongIndex(0)
            setChosenIndex(0)
        } else {
            SetSongIndex(SongIndex + 1)
            setChosenIndex(choseIndex + 1)
        }
        setTimeout(() => {
            audioRef.current.play()
            setAudioPlaying(true)
        }, 100);

    }
    useEffect(() => {
        console.log(InputNumbers)
        setValue1(InputNumbers[0])
        setValue2(InputNumbers[1]);
        setValue3(InputNumbers[2]);
        setValue4(InputNumbers[3]);

        if (InputNumbers.length === 4) {
            if (InputNumbers.every((value, index) => value === [1, 1, 0, 6][index])) {
                messageApi.open({
                    type: 'success',
                    content: '欢迎回来',
                });
                setTimeout(() => {
                    opens()
                    getDanmu()
                }, 2000);
            } else {
                messageApi.open({
                    type: 'error',
                    content: '输入错误',
                });
                setInputNumber([]);
                inputRefs[0].current.focus();
            }

        }
    }, [InputNumbers]);
    const onChange = (value, index) => {
        console.log('输入', value)
        if (value.toString().length === 1) {
            const newInputNumbers = [...InputNumbers];
            newInputNumbers[index] = value;
            setInputNumber(newInputNumbers)
            const nextIndex = index + 1;
            if (nextIndex < inputRefs.length) {
                inputRefs[nextIndex].current.focus();
            }

        }
    };
    const AudioEnded = () => {
        nextSong()
    }
    const getDanmu = async () => {
        if (slides.length > 0) {
            await JJYDanmu(slides[currentIndex].id).then(res => {
                const newDanmu = res.data.data.map(e => ({
                    ...e,
                    top: `${Math.random() * 45 + 20}%`
                }));
                setDanMuList(newDanmu);
            });
        }
    };
    const onKeyDown = (e, index) => {
        if (e.keyCode === 8) { // 按下回退键
            e.preventDefault(); // 阻止默认行为，避免浏览器回退页面
            const prevIndex = index - 1;
            console.log(prevIndex)
            if (index > 0) {
                const newInputNumbers = [...InputNumbers];
                newInputNumbers.splice(index, 1); // 删除当前输
                console.log('新的', newInputNumbers[0])

                setInputNumber(newInputNumbers);
                inputRefs[prevIndex].current.focus(); // 将焦点移动到上一个输入框
            } else {
                const newInputNumbers = [...InputNumbers];
                newInputNumbers.splice(index, 1); // 删除当前输
                setInputNumber([]);
            }
        }
    };
    useEffect(() => {
        JJYImg(pageNum, pageSize).then(res => {
            setTotal(res.data.data.total)
            setSlides(res.data.data.list)
            setCurrentIndex(0);
        })
    }, [pageNum])
    useEffect(() => {
        DanMuListRef.current = DanMuList; // 更新 DanMuListRef 的值
    }, [DanMuList]);
    // 新增定时器来控制弹幕的显示和滑动
    useEffect(() => {
        setDanmuIndex(0);
        getDanmu()
        const interval = setInterval(() => {
            setDanmuIndex((prevIndex) => {
                // 计算下一个索引
                const nextIndex = (prevIndex + 1) % DanMuListRef.current.length;
                return nextIndex;
            });
        }, 10000);

        return () => clearInterval(interval); // 清理定时器
    }, [currentIndex, slides]);


    const changePage = (e) => {
        setPageNum(e)
    }
    const opens = async () => {
        setLoading(true)
        await JJYImg(pageNum, pageSize).then(res => {
            setTotal(res.data.data.total)
            setSlides(res.data.data.list)
            setTimeout(() => {
                setShow(true)
                setLoading(false)
            }, 2000);
        })
    }

    return (
        <>
            {Show == false && loading == false && < InitlStyle />}
            {Show === true && loading == false && <CarouselStyle />}
            {Show == false && loading == false && <div className='Allcreen'>
                {contextHolder}
                <div className='leftDoor'></div>
                <div className='centerDoor'>


                </div>
                <div className='rightDoor'></div>
                <div className='InputName'>
                    <div className='InputTitle'>纪念日</div>
                    <div className='InputContent'>
                        <InputNumber ref={inputRefs[0]} maxLength={1} value={value1} controls={false} max={9} onChange={(value) => onChange(value, 0)} onKeyDown={(e) => onKeyDown(e, 0)} />
                        <InputNumber ref={inputRefs[1]} maxLength={1} value={value2} controls={false} max={9} onChange={(value) => onChange(value, 1)} onKeyDown={(e) => onKeyDown(e, 1)} />
                        <InputNumber ref={inputRefs[2]} maxLength={1} value={value3} controls={false} max={9} onChange={(value) => onChange(value, 2)} onKeyDown={(e) => onKeyDown(e, 2)} />
                        <InputNumber ref={inputRefs[3]} maxLength={1} value={value4} controls={false} max={9} onChange={(value) => onChange(value, 3)} onKeyDown={(e) => onKeyDown(e, 3)} />
                    </div>
                </div>
                <div className='pictureOne'><img style={{ width: '100%', height: '100%' }} src="https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/%E5%B1%85%E5%AE%B6.svg"></img></div>
                <div className='pictureTwo'><img style={{ width: '100%', height: '100%' }} src="https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/%E7%9C%8B%E7%94%B5%E8%A7%86.svg"></img></div>
                <div className='pictureThree'><img style={{ width: '100%', height: '100%' }} src="https://jjy-yygh.oss-cn-hangzhou.aliyuncs.com/%E6%9C%8D%E5%8A%A1%E5%99%A8/%E9%94%81%E4%BD%8F_%E5%8E%BB%E9%99%A4%E8%83%8C%E6%99%AF.png"></img></div>
            </div>}
            {Show && loading == false && (
                <div className="image-slider" style={{ backgroundImage: `url(${backgroundUrl[pageNum - 1]})` }}>

                    {slides.map((slide, index) => (
                        <div key={index} className={`slide ${index === currentIndex ? 'current' : ''}`}>
                            <img src={slide.imageUrl} alt="" className="image" />
                            {isShowText && (<div className="content">
                                <h1 className="title">{slide.title}</h1>
                                <p className="description">{slide.description}</p>
                            </div>)}
                        </div>
                    ))}
                    <div id="prev" onClick={handlePrevClicked}>
                        <LeftOutlined />
                    </div>
                    <div id="next" onClick={handleNextClicked}>
                        <RightOutlined />
                    </div>
                    {/* <div className='bottons' onClick={handlePlayPauseClicked}>{isPlaying ? <PauseOutlined /> : <PlayCircleOutlined />}</div> */}
                    <div className='bottons' onClick={handleshowText}>{isShowText ? <EyeOutlined /> : <EyeInvisibleOutlined />}</div>

                    <div className='PagesAll' onMouseLeave={AnimationStart}>
                        <div className='Pagesbottons' onClick={handlePlayPauseClicked}>{pageNum}</div>
                        <div className='Pages' onAnimationEnd={AnimationEnd} >
                            {isAnimationComplete && <Pagination simple showSizeChanger={false} defaultCurrent={pageNum} onChange={changePage} total={total} />}
                        </div>
                    </div>
                    <div className='danmu-container'>

                        {DanMuList.map((item, index) => (
                            <div key={item.id} className='danmu' style={{
                                position: 'absolute',
                                left: '0',
                                top: item.top,
                                display: index === danmuIndex ? 'block' : 'none',
                                animation: index === danmuIndex
                                    ? (DanMuList.length == 1 ? 'moveRight 10s linear infinite' : 'moveRight 10s linear forwards')
                                    : 'none'

                            }}>
                                {item.description}
                            </div>

                        ))}
                    </div>
                    <div className='danmu-input' onKeyDown={danmuInputPressEnter}>
                        <TextArea rows={4} placeholder='留下你的弹幕' onChange={danmuInputChange} value={danmuInput} />
                    </div>
                    <div className='mp4 hoverDiv' >
                        <div className="default">
                            <p style={{ color: 'pink' }}>{SongList[SongIndex].title}</p>
                            <p>{SongList[SongIndex].author}</p>
                        </div>
                        <div className="hover">
                            <div onClick={backSong} style={{ fontSize: '2.5rem', color: 'pink', cursor: 'pointer' }}><StepBackwardOutlined /></div>
                            <div onClick={playAudio} className='play'>{audioPlaying ? <PauseOutlined /> : <CaretRightOutlined />}</div>
                            <div onClick={nextSong} style={{ fontSize: '2.5rem', color: 'pink', cursor: 'pointer' }}><StepForwardOutlined /></div>
                        </div>

                        <div className='SongLists'>
                            {SongList.map((item, index) => (
                                <div key={item.author} onClick={() => chosenSong(index)} className={`Songitems ${index === choseIndex ? "chosen" : ""}`}>
                                    {item.title}<span><SendOutlined /></span>
                                </div>
                            ))}

                        </div>
                    </div>

                    <audio ref={audioRef} onEnded={AudioEnded} autoPlay preload="none" src={SongList[SongIndex].url}></audio>
                </div>
            )}
            {loading == true &&
                <>
                    <LoadStyle />
                    <div className='Loading'>
                        <div className="loader"></div>
                        <div style={{ fontSize: '32px' }}>惊喜加载中，请耐心等等</div>
                    </div>
                </>}
        </>
    );
};

export default Carousel;
