import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// export all action creators as actions from index.js under actions folder
import * as actions from '../actions';

class ListItem extends Component {

  showContent() {
    const libraryTitle = this.props.library.item.title;
    const libraryId = this.props.library.item.id;
    const selectedLibraryId = this.props.selectedLibraryId;
    const { titleStyle } = styles;

    if (selectedLibraryId === libraryId) {
      return <Text style={titleStyle}>{`${libraryTitle} selected!!!`}</Text>;
    }

    return <Text style={titleStyle}>{libraryTitle}</Text>;
  }

  //const { titleStyle } = styles;
  render() {
    console.log(this.props);

    return (
      <CardSection>
        {this.showContent()};
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state) => {
  // will add { selectedLibraryId: state.selectedLibraryId } to props
  return { selectedLibraryId: state.selectedLibraryId };
};

/*
connect's second argument:
  1. pass action creators to listItem's props;
  2. connect to redux store, whenever any action creator is called,
  it will be dispatch to store automatically (we don't need to call store.dispatch()!!)
*/
export default connect(mapStateToProps, actions)(ListItem);
