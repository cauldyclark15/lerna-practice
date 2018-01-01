import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  autoCapitalize: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onEndEditing: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

class InputComponent extends Component {
  render() {
    const {
      autoCapitalize,
      autoCorrect,
      onBlur,
      onChange,
      onEndEditing,
      onFocus,
      onKeyPress,
      onSelectionChange,
      onSubmitEditing,
      placeholder,
      secureTextEntry,
    } = this.props;
    return (
      <View>
        <TextInput
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          onBlur={onBlur}
          onChange={onChange}
          onEndEditing={onEndEditing}
          onFocus={onFocus}
          onKeyPress={onKeyPress}
          onSelectionChange={onSelectionChange}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderColor: '#bebebe',
    color: '#676a6b',
    letterSpacing: 1,
    padding: 10,
    height: Platform.OS === 'web' ? 36 : 42,
    fontSize: Platform.OS === 'web' ? 16 : 22,
    fontWeight: '400',
  },
});

InputComponent.propTypes = propTypes;

export default InputComponent;
