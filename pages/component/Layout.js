//import Head from "next/Head";
const Layout=() => {
  return (
    <div className="root">
      
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
       
        <meta name="theme-color" content="#fff" />
      
     
      
      <style jsx>
        {`
          .root {
            display: block;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
          }
        
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
            }
           
          }
        `}
      </style>
    </div>
  

);};
export default Layout;
