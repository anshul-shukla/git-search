import React, { Component } from 'react';

export default function List(props){
	 return <ul>{(props.search ? props.search.map((s,i)=>{
              		return (<li key= {i}><b>{s.name}</b> <a href={s.html_url}>{s.html_url}</a></li>);
				}) : null)}</ul>;
}