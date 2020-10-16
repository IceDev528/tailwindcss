import _ from 'lodash'
import nameClass from '../util/nameClass'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('placeholderOpacity'), (value, modifier) => {
        return [
          `${nameClass('placeholder-opacity', modifier)}::placeholder`,
          {
            '--placeholder-opacity': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('placeholderOpacity'))
  }
}
