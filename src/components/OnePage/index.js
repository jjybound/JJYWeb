import { InitStyle } from "./style";

const OnePage = () => {
   const initialImages = [
    { url: "https://bbs.fcxxh.org/data/attachment/forum/202205/11/111454kg9oumgblztt6mgm.jpg", index: 0 },
    { url: "https://wx2.sinaimg.cn/mw690/aa5b66fely1ho2fb12b2jj21991kwtlk.jpg", index: 1 },
       { url: "https://img1.baidu.com/it/u=864948058,3858975828&fm=253&fmt=auto&app=120&f=JPEG", index: 2 },
       { url: "https://img2.baidu.com/it/u=2606542070,2409755753&fm=253&fmt=auto", index: 3 },
       { url: "https://t11.baidu.com/it/u=1663060984,2796201327&fm=173&s=AC186E94544A58E81AECC06E0300507A&w=579&h=600&img.JPEG", index: 4 },
       { url: "https://img0.baidu.com/it/u=2451403871,2049108339&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=707", index: 5 },
       { url: "https://img0.baidu.com/it/u=1436026642,2307433723&fm=253&fmt=auto&app=138&f=JPEG?w=321&h=336", index: 6 },
           { url: "https://pic4.zhimg.com/v2-97297946fc89297211032ad4c8c15f37_r.jpg", index: 7 },
];

    let currentIndex = 0;
    let solveBug = -15-initialImages.length*2;
    let OkBug = -155;
    const handleNext = () => {
        if (currentIndex < initialImages.length - 1) {
             const rotateElement = document.querySelectorAll(".rotate")[currentIndex];
        if (rotateElement) {
            rotateElement.style.transform = `rotateY(${OkBug}deg)`;
            }
            
            OkBug = OkBug + 2;
            solveBug = solveBug + 2;
            currentIndex++;
        }
    };
  const handleBack = () => {
    if (currentIndex > 0) {
        const rotateElementBack = document.querySelectorAll(".rotate")[currentIndex-1];
        if (rotateElementBack) {
            console.log(solveBug)
            rotateElementBack.style.transform = `rotateY(${solveBug}deg)`;
        }
        OkBug = OkBug - 2;
        solveBug = solveBug - 2;
        currentIndex--;
    }
};


    return (
        <>
            <InitStyle />
            <div className="contain">
                <div className="all">
                <ul>
                    {initialImages.map((image, index) => (
                        <li key={index} className='rotate'>
                            <img src={image.url} alt="" />
                        </li>
                    ))}
                    </ul>
                    <button className="back" onClick={handleBack}>上一页</button>
                    <button className="next" onClick={handleNext}>下一页</button>
                    </div>
            </div>
        </>
    );
};

export default OnePage;
