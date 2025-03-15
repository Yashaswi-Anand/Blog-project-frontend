import React from 'react'

function ContentPage() {
  return (
    <div>
        <h1>Content Page</h1>
        {/* Get last test in url */}
        <h3>{window.location.pathname.split('/').pop()}</h3>
    </div>
  )
}

export default ContentPage