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
                          {pokemon.map((pokemon, i)=>{
                            return(
                              <li>
                                <a href={`/pokemon/${i}`}>{pokemon.name}</a>
                              </li>
                            )
                          })}
                      </ul>
                  </div>
          );
      }
    }
    module.exports = Index;


    

    