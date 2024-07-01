
import { TwoStyle } from './style';
import Sider from './sider';
import { Pagination } from 'antd';
import { useState } from 'react';
const TwoPage = () => {
    const [list, setList] = useState([]);
    const [title, setTitle] = useState('')
    const [parentPageNum,setParentPageNum]=useState(1)
    const [Pagina,setPagina]=useState(1)
    const updateList = (newList) => {
        setList(newList);
        console.log(newList.list.length)
    };
    const Titles = (titles) => { 
        setTitle(titles)
    }
    const tPaginationKey = (e) => { 
        setPagina(e)
    }
    const change = (e) => { 
        setParentPageNum(e)
    }
    return (
        <>
            <TwoStyle />
            <div className="contain">
                <div className='left'>
                    <Sider updateList={updateList} Titles={Titles} parentPageNum={parentPageNum} tPaginationKey={tPaginationKey} />
                </div>
                <div className='leftone'><div className='text'>{title}</div></div>
                <div className='right'> 
                    <div className='Rtop'>
                        <div style={{ color: '#000000', fontWeight: 'bold' }}>{list.list && list.list[0].tinytitle}</div>
                        <div style={{ fontSize:'24px',color: '#654c4c',fontWeight:'bold'}}>{list.list && list.list[0].title}</div>
                    </div>
                    <div className='Rcenter' dangerouslySetInnerHTML={{ __html: list.list && list.list[0].content }}></div>
                    <div className='Rfooter'> {list.list && <Pagination  defaultCurrent={1} key={Pagina} total={list.total} pageSize={1} onChange={change}/>}  </div>
                  
                </div>


                 
                
            </div>
        </>
    );
};

export default TwoPage;
