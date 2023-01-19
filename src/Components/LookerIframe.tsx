import React from 'react'

type Props = {}

const LookerIframe = (props: Props) => {
  return (
    <div>
        <iframe id="iframe" title="GDS Secure" src="https://datastudio.google.com/embed/reporting/508dfd69-79de-43a7-b987-cec33e13d1a4/page/1M" width="90%" height="1264"></iframe>
    </div>
  )
}

export default LookerIframe