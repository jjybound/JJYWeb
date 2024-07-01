import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import items from './items';
import { JJYArticle } from '../../api/index';

const Sider = ({updateList,Titles,parentPageNum,tPaginationKey}) => {
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [menu, setMenu] = useState(1);
  const [tinymenu, settinymenu] = useState(0);
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
  const [paginationKey, setPaginationKey] = useState(0);



  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeys = getLevelKeys(items);

  const Selects = (e) => { 
    const selectedKey = e.keyPath[1];
    setPaginationKey(prevKey => prevKey + 1);
    const selectedItem = items.find(item => item.key === selectedKey);
    Titles(selectedItem.label)
    tPaginationKey(paginationKey)
    setPageNum(1)
    settinymenu(e.key)
  };
  useEffect(() => { 
     setPageNum(parentPageNum)
  },[parentPageNum])
  useEffect(() => {
    JJYArticle(pageNum, pageSize, menu, tinymenu).then(res => {
      updateList(res.data.data);
    });
  }, [pageNum, pageSize, menu, tinymenu]);

  const onOpenChange = (openKeys) => {
    console.log(openKeys)
    const selectedKey = openKeys[openKeys.length - 1];
    const selectedItem = items.find(item => item.key === selectedKey);
    if (selectedItem) {
      Titles(selectedItem.label)
      let keySub = selectedKey.replace("sub", "")
      console.log(keySub)
      setPageNum(1)
      setPageSize(1)
      setMenu(keySub)
      settinymenu(0)
    }
    /* 新增逻辑，如果有展开的菜单，则将默认选中项设为空数组，如果需要展开的同时保持默认选中项 */
    const selectedKeys = document.querySelectorAll('.ant-menu-item-selected');
  selectedKeys.forEach(key => {
    key.classList.remove('ant-menu-item-selected');
  });
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };


  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['231']}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      onSelect={Selects}
      style={{
        width: 256,
      }}
      items={items}
    />
  );
};

export default Sider;
