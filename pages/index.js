//import Head from 'next/Head';
import Link from 'next/Link';
import Layout from '../component/Layout';
import configdata from '../siteconfig.json';
const Home=({ title,description }) => (

 


  
<Layout page='home' path={''}>
  

<div style={{width:'100%',justifyContent:'center'}} align="center"> 
<h1>{title}</h1>
   <h3>{description}</h3>

<Link href='courselist/'>
     
  <a>{"shopath"}</a>
    
</Link>

</div>


</Layout>

);

 
export const getStaticProps = async() => 
{
console.log('here @ index');
 return (
{props:
{title:configdata.title,description:configdata.desc}
});
};

export default Home;
