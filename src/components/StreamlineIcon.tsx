import React, { FunctionComponent } from 'react'

import './StreamlineIcon.css'

type iconSlug = string
type iconWidth = number
type iconHeight = number
type iconOptions = {
  fill: string
  stroke: string
  'stroke-linecap': 'butt' | 'round' | 'square' | 'inherit'
  'stroke-linejoin': 'miter' | 'round' | 'bevel' | 'inherit'
  'stroke-width': number | string
}
type iconRepresentation = string
export type Icon = [
  iconSlug,
  iconWidth,
  iconHeight,
  iconOptions[],
  iconRepresentation[],
]

const StreamlineIcon: FunctionComponent<{
  icon: Icon
  spin?: boolean
  pulse?: boolean
  infinite?: boolean
  easeInOut?: boolean
  fast?: boolean
  size?: number
  fill?: string
  stroke?: string
  width?: number
  height?: number
  customClassName?: string
}> = ({
  icon,
  fill,
  stroke,
  width,
  height,
  customClassName,
  size = 24,
  spin = false,
  pulse = false,
  infinite = false,
  fast = false,
  easeInOut = false,
}) => {
  const getClassName = () => {
    const className = [`Streamline_Icon`]
    if (spin) className.push('Streamline_Icon_Spin', 'Streamline_Icon_Animated')
    if (pulse)
      className.push('Streamline_Icon_Pulse', 'Streamline_Icon_Animated')
    if (infinite) className.push('Streamline_Animation_Infinite')
    if (fast) className.push('Streamline_Animation_Fast')
    if (easeInOut) className.push('Streamline_Animation_EaseInOut')
    if (customClassName) className.push(customClassName)

    return className.join(' ')
  }

  const finalSize = {
    width: icon[1],
    height: icon[2],
    isDefault: true,
  }

  if (size) {
    finalSize.isDefault = size === finalSize.width
    finalSize.height = size
    finalSize.width = size
  } else {
    if (height && height !== finalSize.height) {
      finalSize.height = height
      finalSize.isDefault = false
    }

    if (width && width !== finalSize.width) {
      finalSize.width = width
      finalSize.isDefault = false
    }
  }

  const renderPaths = () =>
    icon[4].map((path, index) => (
      <path
        fill={fill || icon[3][index]['fill']}
        stroke={stroke || icon[3][index]['stroke']}
        strokeLinecap={icon[3][index]['stroke-linecap']}
        strokeLinejoin={icon[3][index]['stroke-linejoin']}
        strokeWidth={icon[3][index]['stroke-width']}
        key={Math.random().toString()}
        d={path}
      />
    ))

  return (
    <span className={getClassName()}>
      <svg
        viewBox={`0 0 ${finalSize.width} ${finalSize.height}`}
        style={{ width: finalSize.width, height: finalSize.height }}
        width={finalSize.width}
        height={finalSize.height}
      >
        {!finalSize.isDefault ? (
          <g
            transform={`scale(${finalSize.width / icon[1]},${
              finalSize.height / icon[2]
            })`}
          >
            {renderPaths()}
          </g>
        ) : (
          renderPaths()
        )}
      </svg>
    </span>
  )
}

export default StreamlineIcon
