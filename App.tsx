import * as React from 'react';
import 'antd/dist/reset.css';
import './style.css';
import { Button, ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';

export default function App() {
  const configProviderProps = React.useMemo((): ConfigProviderProps => {
    return {
      theme: {
        token: {
          colorPrimary: '#00b96b',
        },
      },
    };
  }, []);

  return (
    <ConfigProvider {...configProviderProps}>
      <Button>Hello</Button>
    </ConfigProvider>
  );
}
