import { useSelector } from "react-redux"


export const Profile = () => {
  const profile = useSelector((state) => state.profile)

  if (profile?.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div id="contact">
      <div>
        <img src={profile.avatar} alt="#" />
      </div>
      <div>
        <h1>
          {profile.name} {}
        </h1>
        <p>{profile.status}</p>
        <p>{profile.notes}</p>
      </div>
    </div>
  )
}

// {favorite ? "★" : "☆"}
