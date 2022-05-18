const React = require('react');

const myStyle = {
    color: '#ff0000',
    backgroundColor: '#ffde00',
    fontFamily: "impact",
  };

    class Index extends React.Component {
      render() {
          const { pokemon } = this.props;
          return (
                  <div style={myStyle}>
                      <h1>See All The Pokemon!</h1>
                  </div>
          );
      }
    }
    module.exports = Index;