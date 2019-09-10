import Layout from '../../components/layout'
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'

import client from '../../utils/contentful'

class Post extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <h1>{this.props.show.title}</h1>
        <p>{this.props.show.description.toString()}</p>
        <img src={this.props.show.cover.fields.file.url} />

        <style jsx>
        {`
          h1, a {
            font-family: 'Arial';
          }
        `}
        </style>
      </Layout>
    )
  }
}

Post.getInitialProps = async (context) => {
  const data = await client.getEntry(context.query.id)

  return { show: data.fields };
}

export default Post;
