import { CaretUpOutlined, CopyOutlined } from '@ant-design/icons';
import React from 'react';
import { FloatButton } from 'antd'

export const DashBoardComponent:React.FC = () => {
  function testComponent() {
    console.log('Testing working component')
  }

  const customStyle:React.CSSProperties = {
    backgroundColor: '#FFFFFF',
  }
  return (
    <>
        <div style={customStyle}>
          Google
        </div>
    </>
  )
}