import {Button} from "antd";

export default function SwitcherTheme({theme, setTheme}){
  return (
    <>
      <Button onClick={() => {
        if (theme === 'dark'){
          setTheme('light')
        } else{
          setTheme('dark')
        }
      }} type="primary" style={{
        margin: '10px 15px 0 0',
        color: 'white'
      }}>
        <img
          src="../../../public/themeSwitcher.svg"
          alt="theme-switcher-img"
        />
      </Button>
    </>
  )
}