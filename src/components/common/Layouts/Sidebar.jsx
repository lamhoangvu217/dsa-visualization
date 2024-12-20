import { Layout, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { setSelectedProblem } from '@/store/reducer/problemSlice';
import { ROUTERS } from '../../../constants/routerLink';

const { Sider } = Layout;

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleMenuClick = (e) => {
    dispatch(setSelectedProblem(e.key));
  };

  return (
    <Sider collapsible>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['SearchInsertPosition']}
        onClick={handleMenuClick}
      >
        {
          ROUTERS.map((route) => (
            <Menu.Item key={route.key}>{route.name}</Menu.Item>
          ))
        }
      </Menu>
    </Sider>
  );
};

export default Sidebar;