import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

class ListItem extends Component {

  showContent() {
    const libraryTitle = this.props.library.item.title;
    const libraryId = this.props.library.item.id;
    const selectedLibraryId = this.props.selectedLibraryId;
    const { titleStyle } = styles;

    console.log(selectedLibraryId);
    console.log(libraryId);

    if (selectedLibraryId === libraryId) {
      return <Text style={titleStyle}>{`${libraryTitle} selected!!!`}</Text>;
    }

    return <Text style={titleStyle}>{libraryTitle}</Text>;
  }
  //const { titleStyle } = styles;
  render() {
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

export default connect(mapStateToProps)(ListItem);
