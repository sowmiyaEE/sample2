import react from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from 'next/head';
//import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next'



export const getStaticPaths = async() => {
const files=await fs.readdirSync("courses");
console.log("files",files);
const Paths = files.map(filename => (
{ params: {slug: filename.replace(".md","").toString() }}
));
console.log(Paths);
return {paths:Paths,fallback: false};}

export const getStaticProps = async({params:{slug}}) =>{
const cote=fs.readFileSync(path.join('courses',slug+'.md')).toString();
const coteparsed=matter(cote);
return {props: {
contents : coteparsed.content,data : coteparsed.data
}};
};


const Post=({contents,data}) => {
return (<><Head><title>{data.title}</title>
<meta title="description" content={data.description}/>
</Head>
<div>The contents: 
<pre>{contents}</pre>
</div>
</>
);
};
export default Post;
