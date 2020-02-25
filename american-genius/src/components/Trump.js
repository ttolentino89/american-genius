import React from 'react'
// import data from '../FakeData.json'
const Post = (props) => {
	console.log(props)

	const { match: { params: { post_id } } } = props
	const { posts } = props

	const post = posts.find(
		(post) => post.id === parseInt(post_id)
	)

	return (
		<div className="post">
			<div className="hero">
				<img src={post.image} alt="post banner" />
			</div>
			<div className="content">
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		</div>
	)
}
export default Post
