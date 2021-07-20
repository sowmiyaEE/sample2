//import Head from 'next/Head';
//import Link from 'next/Link';
import fs from 'fs';
import Layout from "./component/Layout"

;
const Home=({ slugs }) => (

 <Layout>  

<div>
  
  slugs:
  
 {slugs.map(slug => 
{
   return(

 <div key={slug}>  
    
 <link href={"/course/"+slug}>
     
  <a>{"/course/"+slug}</a>
    
</link>

  </div>
  );

}
)}

</div>
</Layout>

);

 
export const getStaticProps = async() => 
{
 const files=fs.readdirSync("courses");
return({props: {slugs:  files.map(filename => filename.replace(".md",""))
}
});};

export default Home;
