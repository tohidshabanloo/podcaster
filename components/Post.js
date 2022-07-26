import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/blog/posts/${post.slug}`}>
      <div className="card-index">
        <div className="image-container">
          <img className="img" src={post.frontmatter.cover_image} alt="" />
        </div>
        <div className="post-date">
          <h3>{post.frontmatter.title}</h3>
          <h4>اثر : {post.frontmatter.athour} </h4>
          {/* <h4>مترجم :{post.frontmatter.translator} </h4> */}
        </div>
        {/* <p>{post.frontmatter.excerpt}</p> */}
        {/* <div className="post-date">
          <div>سال انتشار: {post.frontmatter.date}</div>
        </div> */}
      </div>
    </Link>
  );
}
