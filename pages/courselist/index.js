//import Head from 'next/Head';
import Link from 'next/link';
import fs from 'fs';
import Layout from '../../component/Layout';
import matter from 'gray-matter';

const Home=({ slugs ,refs,pare}) => 
{ return(
<Layout page='courselist' path={'/courselist'}>

<h4>CourseList</h4>
<ul>
 {slugs.map((slug,i) => 
{
   return(
<li>

 {slug.includes('...')?
<div key={slug} style={{height:'100px',width:'75%',margin:'20px',padding:'10px',border:'1px solid black'}}> 
<Link href={"/courselist/"+refs[i]}>
     
<a style={{textDecoration:'none',color:'orange'}}>{slug}</a>
</Link></div>
:
<div key={slug} style={{height:'30px',width:'75%',margin:'5px',border:'0px solid black'}}> 
<Link href={"/courselist/"+refs[i]}>
     
<a>{slug}</a>
</Link></div>

}


 

 </li> );

}
)}

</ul>
</Layout>);

}

 
export const getStaticProps = async() => 
{
 const files=fs.readdirSync("course");

var rf2=[];

const rf0=files.map(filename=>
{if(filename.includes(".md")){
const f=filename.replace('.md','');
const file=require(`../../course/${f}.md`);

rf2=matter(file.toString());
//filename=rf2.content;
filename=rf2.data.title+"   "+rf2.data.description+"...";
console.log('file:data:<',rf2.data,'title',rf2.data.title);
} 
return filename});


return({props: {slugs:rf0,refs:  files.map(filename => filename.replace(".md","/true"))
}
});};

export default Home;
