import { useState } from 'react'
import heartIcon from '../../assets/heart.svg'
import plus from '../../assets/plus.svg'

const CardItem = ({ imageItem }: any) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [style, setStyle] = useState<string>('')

  const handleHover = (isHovered: boolean) => {
    setHovered(isHovered)
    if (!hovered) {
      setStyle('')
    } else {
      setStyle('white')
    }
  }

  let { user: { username, profile_image }, urls } = imageItem

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className="card-item-content">
      {hovered && (
        <div className="card-item-hover absolute">
          <div className="card-item-actions">
            <div className="icon-container">
              <img src={heartIcon} alt="heart" />
            </div>
            <div className="icon-container">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div className="card-item-user">
            <div className="card-profile-wrapper">
              <div className="rounded-profile">
                <img src={profile_image.small} alt="profile" />
              </div>
              <h2 style={{ color: style }}>{username}</h2>
            </div>
          </div>
        </div>
      )}
      <img className='card-img' src={`${urls.raw + '&auto=format&fit=crop&w=300&q=60'}`} alt='content' />
    </div>
  )
}

export default CardItem
