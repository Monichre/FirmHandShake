import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Landing from '../components/landing'
import '../static/css/base.css'

const Home = () => (
  <Fragment>
    <Head>
      <link
        rel='stylesheet'
        href='//fonts.googleapis.com/css?family=Archivo+Narrow|Karla'
      />
    </Head>
    <Landing />
  </Fragment>
)

export default Home
