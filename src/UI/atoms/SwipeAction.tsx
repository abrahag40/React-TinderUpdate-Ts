import "./swipeAction.css"

const Like = require('../../assets/like.png')
const Nope = require('../../assets/nope.png')

interface SwipeProps {
  action: string;
}

const SwipeAction = ( { action }: SwipeProps ) => {
  return (
    <div className="swipeAction">
      <div className={ action === 'left' ? 'swipeAction__left' : 'swipeAction__right' }>
        <img 
          src={ action === 'left' ? Nope : Like } 
          alt="swipeAction" 
          style={{ 
            paddingLeft: action === 'left' ? 130 : 0, 
            paddingRight: action === 'right' ? 0 : 0 }}
          />
      </div>
    </div>
  )
}

export default SwipeAction
