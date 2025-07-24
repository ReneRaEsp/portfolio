const usePreload = () => {
  const URLS = [
    'https://renegade.alwaysdata.net',
    'https://carwash-fidelidad-back.onrender.com/',
    'https://portfoliobackoffice.netlify.app/',
    'https://jitime-api.onrender.com/',
  ]

  const preloadSleep = async () => {
    let res
    try {
      for (let i = 0; i < URLS.length; i++) {
        try {
          res = await fetch(URLS[i])
          res = await res.json()
          console.log(res)
        } catch (err) {
          console.log(err)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  return {
    preloadSleep,
  }
}

export default usePreload
