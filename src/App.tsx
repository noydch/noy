import Routes from './routes/Routes';

function App() {
  const pageTitle = "Your Design Agency Name | Expert Website Design & Branding";
  const pageDescription = "Leading design agency offering custom website design, UX/UI, branding, and digital marketing solutions. Grow your business with stunning web experiences.";
  const ogTitle = "Your Design Agency Name - Custom Web Design & Digital Solutions";
  const ogDescription = "We create impactful websites, strong brands, and effective digital strategies that drive results for businesses.";
  const ogUrl = "https://noytest.netlify.app/"; 
  const ogImage = "https://noytest.netlify.app/og-image-agency.jpg";
  const ogImageType = "image/jpeg";
  const ogImageWidth = "1200";
  const ogImageHeight = "630";

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content={ogImageType} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />

      <link rel="canonical" href={ogUrl} />

      <Routes />
    </>
  );
}

export default App;