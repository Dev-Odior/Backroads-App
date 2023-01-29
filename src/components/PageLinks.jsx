import React from 'react'
import { PageLinks } from '../data'

const PageLink = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {parentClass === 'nav-links'
        ? PageLinks.filter((link, index) => index < 4).map((link) => {
            const { href, id, text } = link
            return (
              <li key={id}>
                <a href={href} className={childClass}>
                  {' '}
                  {text}{' '}
                </a>
              </li>
            )
          })
        : PageLinks.map((link) => {
            const { href, id, text } = link
            return (
              <li key={id}>
                <a href={href} className={childClass}>
                  {' '}
                  {text}{' '}
                </a>
              </li>
            )
          })}
    </ul>
  )
}

export default PageLink
