import React from 'react';
import {connect} from 'react-redux';

class WeatherList extends React.Component {
renderWeather(cityData) {
  const name = cityData.name;
  // const temps = cityData.list.map(weather => weather.main.temp);
  console.log(cityData)
  return(
    <tr key={cityData.name}>
      <td>{cityData.name}</td>
    </tr>
  )
}

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);