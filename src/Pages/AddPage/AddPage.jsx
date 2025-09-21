import {Button, Spin} from "antd";
import {useState} from "react";
import FormAdd from "../../components/FormAdd/FormAdd.jsx";

export default function AddPage(){
  const [clicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleAdd = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setClicked(true)
    }, 700)
  }
  return (
    <>
      {clicked ? (
        <FormAdd/>
      ): (
        <section style={{
          display: 'grid',
          placeItems: 'center',
          minHeight: '100%'
        }}>
          <Button type="primary" onClick={handleAdd}>Press if you want to add question</Button>
        </section>
      )}
      {loading && <Spin size="large" fullscreen={true}/>}
    </>
  )
}