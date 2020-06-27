import _ from 'lodash'
import flattenColorPalette from '../util/flattenColorPalette'
import withAlphaVariable from '../util/withAlphaVariable'

export default function() {
  return function({ addUtilities, e, theme, variants, target, corePlugins }) {
    const colors = flattenColorPalette(theme('backgroundColor'))

    const getProperties = value => {
      if (target('backgroundColor') === 'ie11') {
        return { 'background-color': value }
      }

      if (corePlugins('backgroundOpacity')) {
        return withAlphaVariable({
          color: value,
          property: 'background-color',
          variable: '--bg-opacity',
        })
      }

      return { 'background-color': value }
    }

    const utilities = _.fromPairs(
      _.map(colors, (value, modifier) => {
        return [`.${e(`bg-${modifier}`)}`, getProperties(value)]
      })
    )

    addUtilities(utilities, variants('backgroundColor'))
  }
}
