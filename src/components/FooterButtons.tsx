import Replay from "@material-ui/icons/Replay";
import Close from "@material-ui/icons/Close";
import Star from "@material-ui/icons/StarRate";
import Favorite from "@material-ui/icons/Favorite";
import FlashIcon from "@material-ui/icons/FlashOn";

import './footerButtons.css'
import { IconButton } from "@material-ui/core";

interface Props {
  swipeFunc: (dir: any) => Promise<void>
  goBack: () => Promise<void>
}

export const FooterButtons = ( { swipeFunc, goBack }: Props ) => {

  return (
    <div className='footerButtons'>
      <IconButton>
        <Replay fontSize="large" className="footerButtons__replay" onClick={ () => goBack() } />
      </IconButton>
      <IconButton>
        <Close fontSize="large" className="footerButtons__close" onClick={ () => swipeFunc('left') } />
      </IconButton>
      <IconButton>
        <Star fontSize="large" className="footerButtons__star" onClick={ () => swipeFunc('up') }/>
      </IconButton>
      <IconButton>
        <Favorite fontSize="large" className="footerButtons__favorite" onClick={ () => swipeFunc('right') } />
      </IconButton>
      <IconButton>
        <FlashIcon fontSize="large" className="footerButtons__flashIcon" />
      </IconButton>
    </div>
  )
}

export default FooterButtons
