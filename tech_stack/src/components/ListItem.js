import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// export all action creators as actions from index.js under actions folder
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.item.description}</Text>
        </CardSection>
      );
    }
  }
  //const { titleStyle } = styles;
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableOpacity onPress={() => this.props.selectLibrary(id)} >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>;
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = (state.selectedLibraryId === ownProps.library.item.id);

  return { expanded };
};

/*
connect's second argument:
  1. pass action creators to listItem's props;
  2. connect to redux store, whenever any action creator is called,
  it will be dispatch to store automatically (we don't need to call store.dispatch()!!)
*/
export default connect(mapStateToProps, actions)(ListItem);
