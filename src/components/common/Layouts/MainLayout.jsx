import { Layout as AntLayout, Typography } from 'antd';
import Sidebar from './Sidebar';

const { Header, Content } = AntLayout;
const { Title } = Typography;

const MainLayout = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <AntLayout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Title level={3} style={{ margin: '16px' }}>DataStruct</Title>
        </Header>
        <Content style={{ margin: '16px' }}>{children}</Content>
      </AntLayout>
    </AntLayout>
  );
};

export default MainLayout;