import * as React from 'react';
import 'antd/dist/reset.css';
import './style.css';
import { Button, ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import { colorConfig } from './data/color-config';

export default function App(): React.ReactElement {
  const { colorPrimary } = colorConfig;

  const configProviderProps = React.useMemo((): ConfigProviderProps => {
    return {
      theme: {
        token: {
          colorPrimary,
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
