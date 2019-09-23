import React from "react"


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p style={{ color: 'red' }}>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={(e) => { this.handleChange(e) }} />
            </fieldset>
        );
    }
}

class TempCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '', scale: 'c' };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <fieldset>
                <TemperatureInput temperature={celsius} onTemperatureChange={this.handleCelsiusChange.bind(this)} scale="c" ></TemperatureInput>
                <TemperatureInput temperature={fahrenheit} onTemperatureChange={(temperature) => { this.handleFahrenheitChange(temperature) }} scale="f" ></TemperatureInput>

                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

export default TempCalc