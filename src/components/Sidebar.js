import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`home`}>Мой профиль</Link>
          </li>
          <li>
            <Link to={`users`}>Пользователи</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
