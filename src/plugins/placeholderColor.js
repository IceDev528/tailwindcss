import _ from 'lodash'
import flattenColorPalette from '../util/flattenColorPalette'
import withAlphaVariable from '../util/withAlphaVariable'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(flattenColorPalette(theme('placeholderColor')), (value, modifier) => {
        return [
          `.${e(`placeholder-${modifier}`)}::placeholder`,
          withAlphaVariable({ color: value, property: 'color', variable: '--placeholder-opacity' }),
        ]
      })
    )

    addUtilities(utilities, variants('placeholderColor'))
  }
}
