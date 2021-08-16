import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
  return (
    <html {...props.htmlAttributes} lang='fr'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />

        <link rel='stylesheet' href='https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css' />
        <script async src='https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js' />
        <div id='snipcart' data-config-modal-style='side' data-api-key='YzExZTg4YzItOWU0My00MTljLWI1NjctZmFiZmFlZDBkYTE3NjM3NjM3NDM0MzE0NjY5MzQ0' hidden />
        <link rel='stylesheet' href='https://bootswatch.com/3/united/bootstrap.min.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' />
        <script async src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' />
        <script async src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js' />
        <script async src='https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.4.1/vanilla-tilt.min.js' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css' />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key='body'
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
