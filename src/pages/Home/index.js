import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { setTokenToLocalStorage } from '../../store/slices/ka';
import { HomeStyle } from './style';
import InitPage from '../../components/Init/index'
import OnePage from '@/components/OnePage';
const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [showOnePage, setShowOnePage] = useState(false);

  const handleLogout = () => {
    setModalVisible(true);
  };
  const handleShowOnePage = () => {
    setShowOnePage(true);
};

  const handleModalOk = () => {
    // 清空localStorage中的token信息
    dispatch(setTokenToLocalStorage(''));
    // 返回首页
    navigate('/');
  };

  return (
    <>
        <HomeStyle/>
    <div className='header-container'>
        
      <div className='header'>
        <div className="btn" onClick={handleShowOnePage}>游子吟</div>
        <div className="btn btn1">哈哈</div>
        <div className="btn btn2">耶耶</div>
        <div className="btn btn3">鹭</div>
        <div className="btn btn4" onClick={handleLogout}>退出</div>
      </div>
        {showOnePage===false && <InitPage /> }
        {showOnePage && <OnePage />}
      <Modal
        title="确认退出"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={() => setModalVisible(false)}
        cancelText='取消'
        okText='确定'
      >
        <p>确定要退出吗？</p>
      </Modal>
      </div>
</>
  );
};

export default Home;
