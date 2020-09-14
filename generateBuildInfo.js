const fs = require('fs')
const moment = require('moment')
// eslint-disable-next-line no-unused-vars
const tz = require('moment-timezone')
const pkg = require('./package.json')
const tstamp = moment()
const chicagoTime = tstamp
  .tz('America/Chicago')
  .format('dddd, MMMM Do YYYY, h:mm:ssa z')

const banner = `

<!--

*************************************************************************************************************************
build:          ${chicagoTime}
name:           ${pkg.name}
description:    ${pkg.description}
homepage:       ${pkg.homepage}
source:         ${pkg.repository.url}
version:        ${pkg.version}
developer:      ${pkg.author.name} (${pkg.author.email})
license:        ${pkg.license}
*************************************************************************************************************************

-->`

fs.appendFile('./dist/index.html', `${banner}`, function (err) {
  if (err) throw err
  console.log('Build banner inserted:')
  console.log(banner)
})

// console.log(banner);
