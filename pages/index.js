//import Head from 'next/Head';
import Link from 'next/link';
import fs from 'fs';
import Layout from "./component/Layout"

;
const Home=({ slugs }) => (

   

<div>
  
  slugs:
  
 {slugs.map(slug => 
{
   return(

 <div key={slug}>  
    
 <Link href={"/course/"+slug}>
     
  <a>{"/course/"+slug}</a>
    
</Link>

  </div>
  );

}
)}

</div>


);

 
export const getStaticProps = async() => 
{
 const files=fs.readdirSync("courses");
return({props: {slugs:  files.map(filename => filename.replace(".md",""))
}
});};

export default Home;
