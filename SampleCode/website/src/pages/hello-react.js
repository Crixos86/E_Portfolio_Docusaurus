import React from 'react';
import Layout from '@theme/Layout';

export default function HelloReact() {
    return ( 
     <Layout>
        <div style = {
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                padding: '2rem',
            }
        }>
        <h1> Hello React! </h1> 
        <p> This is a simple example of a React component in docusaurus. </p> 
        </div>   
      </Layout>
    );
}