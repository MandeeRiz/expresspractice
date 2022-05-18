const React = require('react');

const myStyle = {
    color: '#ff0000',
    backgroundColor: '#ffde00',
    fontFamily: "impact",
  };

    class Index extends React.Component {
      render() {
          const { pokemon } = this.props;
          pokemon.forEach(pkm => {
            pkm.name= pkm.name[0].toUpperCase() + pkm.name.slice(1);
          });
          return (
                  <div style={myStyle}>
                      <h1>See All The Pokemon!</h1>
                      <ul>
                          <li>{pokemon[0].name}</li>
                          <li>{pokemon[1].name}</li>
                          <li>{pokemon[2].name}</li>
                          <li>{pokemon[3].name}</li>
                          <li>{pokemon[4].name}</li>
                          <li>{pokemon[5].name}</li>
                          <li>{pokemon[6].name}</li>
                      </ul>
                  </div>
          );
      }
    }
    module.exports = Index;


    

    