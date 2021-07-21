//import react from "react";
import fs from "fs";
import path from "path";
//import Head from 'next/head';
//import Link from 'next/link';
//import { GetStaticProps, GetStaticPaths } from 'next'
//import Layout from "../component/Layout";


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
return {props: {cote}};
};


const Post=({cote}) => {
return <div>The contents: {cote}</div>;
};
export default Post;
