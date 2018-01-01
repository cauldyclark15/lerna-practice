import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  resizeMode: PropTypes.string,
  source: PropTypes.oneOfType([
    PropTypes.shape({ uri: PropTypes.string }),
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.number,
  width: PropTypes.number,
};

class ImageComponent extends Component {
  render() {
    const { resizeMode = 'center', source, height, width } = this.props;
    const computedStyles = styles(height, width);
    return (
      <View>
        <Image
          resizeMode={resizeMode}
          source={source}
          style={computedStyles.resizeMode}
        />
      </View>
    );
  }
}

const styles = (height, width) =>
  StyleSheet.create({
    resizeMode: {
      borderWidth: 0,
      height: height,
      width: width,
    },
  });

ImageComponent.propTypes = propTypes;

export default ImageComponent;
