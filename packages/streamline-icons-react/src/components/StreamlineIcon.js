import React from 'react';
import PropTypes from 'prop-types';
import humps from 'humps';

import './StreamlineIcon.css';

const StreamlineIcon = (props) => {

  const {icon, fill, size, stroke, width, height, customClassName} = props;

  const getClassName = () => {

    let className = [`Streamline_Icon`];
    if (props.spin) className.push('Streamline_Icon_Spin', 'Streamline_Icon_Animated');
    if (props.pulse) className.push('Streamline_Icon_Pulse', 'Streamline_Icon_Animated');
    if (props.infinite) className.push('Streamline_Animation_Infinite');
    if (props.fast) className.push('Streamline_Animation_Fast');
    if (props.easeInOut) className.push('Streamline_Animation_EaseInOut');
    if (customClassName) className.push(customClassName);

    return [...new Set(className)].join(' ');

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

      if(height && parseInt(height) !== sizeObject.height) {
        sizeObject.height = height;
        sizeObject.isDefault = false;
      }

      if(width && parseInt(width) !== sizeObject.width) {
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

StreamlineIcon.propTypes = {

  fill: PropTypes.string,
  stroke: PropTypes.string,

  icon: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])),

  strokeWidth: PropTypes.number, // Not used

  height: PropTypes.number,
  width: PropTypes.number,
  size: PropTypes.number,

  svgStyle: PropTypes.object, // Not used

  pulse: PropTypes.bool,
  spin: PropTypes.bool,
  fast: PropTypes.bool,
  easeInOut: PropTypes.bool,
  infinite: PropTypes.bool,

  customClassName: PropTypes.string

};

StreamlineIcon.defaultProps = {

  size: 24,
  pulse: false,
  spin: false,
  fast: false,
  easeInOut: false,
  infinite: false,
  customClassName: null

};

export default StreamlineIcon
