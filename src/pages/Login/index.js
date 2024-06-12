import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './index.scss'
import { JJYLogin } from '../../api';
import { message } from 'antd';
import { setTokenToLocalStorage } from '../../store/slices/ka';
import { useDispatch } from 'react-redux';
const Login = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: '登陆成功',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: '账号或密码错误',
    });
  };
  const handleLogin = async() => {
  try {
    let data = { 
      user_name: username,
      password
    };

    const res = await JJYLogin(data);
    console.log('啊啊',res);
    if (res.data.code === 200) {
      success();
      dispatch(setTokenToLocalStorage(res.data.result.token))
      setTimeout(() => {
          navigate('/index');
      }, 1200);
    
    } else {
      error();
    }
  } catch (error) {
    console.log('An error occurred:', error);
    alert('密码错误')
  }
};


  return (
  
    <div className="contain">
      {contextHolder}
      <form>
        <div className="segment">
          <h1 style={{ fontSize: '10em' }}>登录</h1>
        </div>
        <label>
          <input type="text" placeholder="用户名" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          <input type="password" placeholder="密码" value={password} onChange={handlePasswordChange} />
        </label>
              <button className="red" type="button" onClick={handleLogin}>点击登录</button>
        <button className="blue" type="button" onClick={() => { navigate('/register')}}>欢迎注册</button>
      </form>
      <div className="bottoms"></div>
      </div>
  );
};

export default Login;
