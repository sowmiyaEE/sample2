import fs from 'fs';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Layout from '../../component/Layout';
var allpaths=[];
export const Showpaths=({slugs,refs,pare,directory}) =>
{


  if(directory==false){
return(
<Layout page='courselist' path={pare}>
<div>
<h4>{pare}</h4>
<ul>{
 slugs.map((path,i) =>{
return (
<div key={path}>
<div > 
 <li> 
    
 
  {path.includes('...')?
<div key={path} style={{height:'50px',width:'75%',margin:'20px',border:'1px solid black'}}> 
<Link href={"/courselist/"+pare+refs[i]}>
     
<a style={{textDecoration:'none',color:'orange'}}>{path}</a>
</Link></div>
:
<div key={path}style={{height:'30px',width:'75%',margin:'5px',border:'0px solid black'}}> 
<Link href={"/courselist/"+pare+refs[i]}>
     
<a>{path}</a>
</Link></div>

}
  
</li>

</div></div>)
})
}
</ul></div></Layout>);}

else{
return<Layout path={'courselist/'+pare}>

<h4>{pare}</h4>

<ReactMarkdown>{slugs[0]}</ReactMarkdown>
</Layout>
}



}



export const getStaticPaths=async() =>
{
console.log('here');

var mother='course';
var childarray=fs.readdirSync(mother);
var allarray=[];
for(var i=0;i<childarray.length;i++)
allarray.push(childarray[i]);

//console.log("{",mother,"}children",allarray,(childarray==null));
 
  while(childarray.length!=0)
{
    var ts=childarray.pop();
    allarray.push(ts);
    //console.log(ts);
   if(fs.statSync(mother+'/'+ts).isDirectory()==true)
  {
       var t=fs.readdirSync(mother+'/'+ts);
        for(var j=0;j<t.length;j++)
              childarray.push(ts+'/'+t[j]);
  }
  else {
    var filec=import(`../../${mother}/${ts}`);
    var cot=matter(filec.toString());var tt=cot.data.title;allpaths.push({tt});}
}

const allarra=allarray.map(ao=>'/courselist'+'/'+ao.replace('.md','/true'));
allarray.push('courselist');
console.log('allarray:' ,allarra);
return({paths:allarra,fallback:false});
}

export const getStaticProps=async(Show)=>{

var pathname='';
for(var i=0;i<Show.params.Showpaths.length;i++)
pathname+=Show.params.Showpaths[i]+'/';
console.log('path',pathname);
if(pathname.includes('/true')){
const s=pathname.replace('/true','.md');
const file=import(`../../course/${s}`);
const rfi=matter(file.toString());

return({props:{slugs:[rfi.content,rfi.data.title,rfi.data.description],pare:s,directory:true}});
}

else{
const files=fs.readdirSync('course'+'/'+pathname);

const rfi=files.map(filename=>
filename.replace(".md","/true"));

var rf2=[];
const rf0=files.map(filename=>
{if(filename.includes(".md")){
const file=import(`../../course/${pathname+filename}`)

rf2=matter(file.toString());
filename=rf2.data.title+"-"+rf2.data.description+"...";
//console.log('file:data:<',rf2.data,'title',rf2.data.title);
} 
return filename});
console.log('refs:',rf0)


return({props:{slugs:rf0,refs:rfi,pare:pathname,directory:false}}); }
}


/*function readall(gpath,allpath){
  if(fs.statSync(gpath).isDirectory() ==true){
var copaths=fs.readdirSync(gpath);
for(var i=0;i<copaths.length;i++){
var patht=path.join(gpath,copaths[i]);
allpath.push({params:{slug:patht.replace('.md','/true'),isd:fs.statSync(patht).isDirectory()}});
pathdetail.push({isdirectory : fs.statSync(patht).isDirectory()});
if(fs.statSync(patht).isDirectory()==true){
readall(patht,allpath);}
}
}
}*/

export default Showpaths;
