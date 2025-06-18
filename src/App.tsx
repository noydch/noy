import './App.css'
import Routes from './routes/Routes'
import {Helmet} from "react-helmet"

function App() {

  return (
    <>
      <Helmet>
        <title>หน้าแรก</title>
        <meta name="description" content="เว็บแอปสำหรับ..." />
        <meta property="og:title" content="หน้าแรก | MyApp" />
        <meta property="og:description" content="เว็บแอปสำหรับ..." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
      </Helmet>
        <Routes />
    </>
  )
}

export default App
