import React, {FunctionComponent} from 'react';
import humps from 'humps';

import './StreamlineIcon.css';

type IconOptions = {
  fill: string
  stroke: string
  'stroke-linecap': string
  'stroke-linejoin': string
  'stroke-width': number
}
type Icon = [string, number, number, [IconOptions], [string]]

const StreamlineIcon: FunctionComponent<{
  icon: Icon
  fill?: string
  size: number
  stroke?: string
  width?: number
  height?: number
  customClassName?: string
  spin: boolean
  pulse: boolean
  infinite: boolean
  easeInOut: boolean
  fast: boolean
}> = ({
                              icon,
                              fill,
                              size= 24,
                              stroke,
                              width,
                              height,
                              customClassName,
                                spin= false,
                              pulse= false,
                                infinite= false,
                                fast= false,
                                easeInOut= false
}) => {
  const getClassName = () => {

    let className = [`Streamline_Icon`];
    if (spin) className.push('Streamline_Icon_Spin', 'Streamline_Icon_Animated');
    if (pulse) className.push('Streamline_Icon_Pulse', 'Streamline_Icon_Animated');
    if (infinite) className.push('Streamline_Animation_Infinite');
    if (fast) className.push('Streamline_Animation_Fast');
    if (easeInOut) className.push('Streamline_Animation_EaseInOut');
    if (customClassName) className.push(customClassName);

    return className.join(' ');

  };

  const getSize = () => {

    //Default
    const sizeObject = {
      width: icon[1],
      height: icon[2],
      isDefault: true,
    };

    if(size) {

      sizeObject.isDefault = size === sizeObject.width;
      sizeObject.height = size;
      sizeObject.width = size;

    } else {

      if(height && height !== sizeObject.height) {
        sizeObject.height = height;
        sizeObject.isDefault = false;
      }

      if(width && width !== sizeObject.width) {
        sizeObject.width = width;
        sizeObject.isDefault = false;
      }

    }

    return sizeObject;

  };

  const getStyle = () => {

    const sizeObj = getSize();

    delete sizeObj.isDefault;

    return {...sizeObj};

  };

  const renderIcon = () => {

    const size = getSize();

    const renderPaths = () => {
      return icon[4].map(
          (path, index) => {

            const options = {...humps.camelizeKeys(icon[3][index])};

            options['stroke'] = stroke || icon[3][index]['stroke'];
            options['fill'] = fill || icon[3][index]['fill'];


            return <path
                {...options}
                key={Math.random().toString()}
                d={path}/>

          })
    };

    return (
        <span className={getClassName()}>
          <svg
              viewBox={`0 0 ${size.width} ${size.height}`}
              style={{...getStyle()}}
              width={size.width}
              height={size.height}
          >

            {!size.isDefault ?
                <g transform={`scale(${size.width / icon[1]},${size.height / icon[2]})`}>
                  {renderPaths()}
                </g>
                :
                renderPaths()

            }

          </svg>
        </span>
    )
  };

  return  renderIcon();

};

export default StreamlineIcon
