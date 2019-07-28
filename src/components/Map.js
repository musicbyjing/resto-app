export class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  render() {
    return <div ref="map">Loading map...</div>;
  }
}
