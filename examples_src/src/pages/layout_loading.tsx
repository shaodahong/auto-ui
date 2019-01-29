import * as React from 'react';
import { Layout } from '../aotuui';

const Demo: React.FC<any> = () => {
  return (
    <Layout>
      <Layout.Header title="加载中..." />
      <Layout.Body loading={true}>body</Layout.Body>
    </Layout>
  );
};

export default Demo;
