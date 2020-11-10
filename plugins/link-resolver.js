export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'blog_home') {
    return '/'
  }

  if (doc.type === 'blog_post') {
    return '/blog/posts/' + doc.uid
  }

  return '/not-found'
}