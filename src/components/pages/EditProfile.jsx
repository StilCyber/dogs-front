import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import ava from "../../images/logo.png"
import { Button, Form, Input } from "antd"
import { setProfile } from "../../store/slices/profileSlice"
import { urlLocalHost } from "../../utils/const/api"

export const EditProfile = () => {
  const [objectForm, setObjectForm] = useState({
    id: null,
    name: "",
    status: "",
    notes: "",
  })
  const profile = useSelector((state) => state.profile)

  useEffect(() => {
    setObjectForm({
      id: profile.id,
      name: profile.name,
      status: profile.status,
      notes: profile.notes,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile])

  const dispatch = useDispatch()

  const handleSubmitForm = () => {
    fetch(`${urlLocalHost}/editProfile`, {
      method: "PUT",
      body: JSON.stringify(objectForm),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        dispatch(setProfile(data))
      })
  }

  if (profile.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div style={{ marginBottom: 20 }}>Редактирование профиля</div>
      <div>
        <Form
          name="basic"
          style={{ maxWidth: 600, textAlign: "left" }}
          initialValues={{
            username: profile.name,
            status: profile.status,
            info: profile.notes,
          }}
          autoComplete="off"
        >
          <Form.Item label="Имя" name="username" layout="vertical">
            <Input
              value={objectForm.name}
              onChange={(e) => setObjectForm({ ...objectForm, name: e.target.value })}
            />
          </Form.Item>
          <br />
          <Form.Item label="Статус" name="status" layout="vertical">
            <Input.TextArea
              value={objectForm.status}
              onChange={(e) => setObjectForm({ ...objectForm, status: e.target.value })}
            />
          </Form.Item>
          <br />
          <br />
          <Form.Item label="Описание" name="info" layout="vertical">
            <Input.TextArea
              value={objectForm.notes}
              onChange={(e) =>
                setObjectForm({ ...objectForm, notes: e.target.value })
              }
            />
          </Form.Item>
          <br />
          <br />
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleSubmitForm}>
              Отправить
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

// {favorite ? "★" : "☆"}
