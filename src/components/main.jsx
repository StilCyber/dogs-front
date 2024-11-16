import { Outlet } from "react-router-dom"
import "./main.css"
import { useEffect } from "react"
import { urlLocalHost } from "../utils/const/api"
import { useDispatch, useSelector } from "react-redux"
import { setProfile } from "../store/slices/profileSlice"

export const Main = () => {
  const profile = useSelector((state) => state.profile)
  console.log(profile)
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(`${urlLocalHost}/1`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        dispatch(setProfile(data))
      })
  }, [dispatch])

  return (
    <>
      <div id="sidebar">
        <h1>Animal network</h1>
        <div>
          <a href={`/profile/1`}>
            <img
              src={profile.avatar}
              alt="#"
              width={70}
              height={70}
              style={{ borderRadius: "50px" }}
            />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/profile/1`}>Мой профиль</a>
            </li>
            <li>
              <a href={`/friends`}>Мои друзья</a>
            </li>
            <li>
              <a href={`/users`}>Пользователи</a>
            </li>
            <li>
              <a href={`/news`}>Новости друзей</a>
            </li>
            <li>
              <a href={`/editProfile`}>Редактировать профиль</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
