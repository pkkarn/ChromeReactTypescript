import { CaretUpOutlined, CopyOutlined } from '@ant-design/icons';
import React from 'react';
import { FloatButton } from 'antd'

export const MenuComponent:React.FC = () => {
  function testComponent() {
    console.log('Testing working component')
  }
  return (
    <>
        <FloatButton.Group
            trigger="hover"
            type="primary"
            style={{ right: 24 }}
            icon={<CaretUpOutlined />}
        >
          <FloatButton onClick={testComponent}icon={<CopyOutlined/>} />
        </FloatButton.Group>
    </>
  )
}