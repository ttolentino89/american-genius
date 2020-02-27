import React from 'react'
import Layout from '../components/layout'
import ugh from '../images/Kanye-Trump-hair.jpg'
import { Link } from 'gatsby'


const NotFoundPage = () => (
  <Layout>
    <h1>Nothing to see here...</h1>
    <img src={ugh} alt="" />
    <br />
    <br />
  <Link to="/">Oh god no take me back plz</Link>
  </Layout>
)

export default NotFoundPage
