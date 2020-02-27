import React from 'react'
import Layout from '../components/layout'
import ugh from '../images/Kanye-Trump-hair.jpg'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>Kanye Trump is now president and there's nothing we can do.</p>
    <img src={ugh} alt="" />
  </Layout>
)

export default NotFoundPage
