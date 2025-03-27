import { Typewriter } from 'react-simple-typewriter'

const MyTypewriter = () => {
  return (
    <Typewriter
    words={["Seun", "Amani", "Kofo", "Lethabo","Anyango "]}
    loop={false}
    // cursor
    cursorStyle='_'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={2000}
  />
  )
}

export default MyTypewriter