import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './index.scss';
import { JJYLogin } from '@/api';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async() => {
     let data={ 
         user_name: username,
         password
      }
      await JJYLogin(data).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          navigate('/index')
        } else { 
          console.log('12312312')
        }
      })
  };

  return (
    <div className="contain">
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
              <button className="blue" type="button" onClick={handleLogin}>欢迎注册</button>
      </form>
      <div className="bottoms"></div>
    </div>
  );
};

export default Login;
