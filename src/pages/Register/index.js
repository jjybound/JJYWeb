import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './index.scss';
import { JJYRegister } from '../../api';
import { message } from 'antd';
const Register = () => {
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
      content: '注册成功',
    });
  };
  const handleLogin = async() => {
     let data={ 
         user_name: username,
         password
      }
      await JJYRegister(data).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          success()
          setTimeout(() => {
            navigate('/')
          }, 1200)
        } 
      })
  };

  return (
    <div className="contain">
         {contextHolder}
      <form>
        <div className="segment">
          <h1 style={{ fontSize: '10em' }}>注册</h1>
        </div>
        <label>
          <input type="text" placeholder="用户名" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          <input type="password" placeholder="密码" value={password} onChange={handlePasswordChange} />
        </label>
        <button className="red" type="button" onClick={handleLogin}>点击注册</button>
        <button className="blue" type="button" onClick={() => { navigate('/')}}>返回登陆</button>
      </form>
      <div className="bottoms"></div>
    </div>
  );
};

export default Register;
