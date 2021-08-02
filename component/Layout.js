import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
//import window from 'react-window';
class Layout extends React.Component{
  static propTypes={golast:PropTypes.String};
  static defaultProps={p:{golast:'',last:['','']}};
 
/*constructor(props)
{
  super(props);
  // this.handleClick = this.handleClick.bind(this);
}*/

handleClick= () => {

this.props.p.last.pop();
this.props.p.golast=this.props.p.last.pop();
if(this.props.p.golast=='/')
this.props.p.golast='';
console.log('pressed:goto:',this.props.p.golast);
}

render(){
let { title } =this.props;
let {children } = this.props;
let {description}=this.props;
let {page}=this.props;
let {path}=this.props;


this.props.p.last.push(path);
this.props.p.golast=this.props.p.last[this.props.p.last.length-2];

console.log(this.props.p.last,'cur',this.props.p.golast);
//this.rendere(path);
return(
  <><Head>
  <meta name="description" content={description}/>
   <meta name="viewport" content="width=device-width,initial-scale=1"/>

  </Head>

<nav 
style={{justifyContent:'center',display:'flex',width:'50%',font:'25px/2em bold Times UI'}}
>
<button onClick = {()=>this.handleClick()} >
<Link href={this.props.p.golast+'/'}>
<a>BACK</a>
</Link>
</button>
  <div style={{margin:'5px'}}> <Link href='/'>
{page=='home' ? <a >Home</a>:<a style={{textDecoration:'none'}}>Home</a> }
</Link></div>
   <div style={{margin:'5px'}}> 
<Link href='/courselist'>
 {page=='courselist' ? <a >CourseList</a>:<a style={{textDecoration:'none'}}>Courselist</a>}
</Link></div>
</nav>


  <section>
{children}
</section>

<footer>
 Built by E.Sowmiya...(sowmiya.skm@gmail.com)...
</footer>
</>);

}





}
export default Layout;
