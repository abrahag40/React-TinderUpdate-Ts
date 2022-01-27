import './button.css'

interface ButtonProp {
  style: object;
  title: string;
  onClick: () => void;
}

const Button = ( { style, title, onClick }: ButtonProp ) => {  

  return (
    <button className='button' style={style} onClick={ onClick }>
      { title }
    </button>
  )
}

export default Button
