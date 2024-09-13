import axios from "axios";
import { Component } from "react";
class App extends Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        error;
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <>
        <div className="bg-[url('./assets/background.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center space-y-6">
          <div className="flex flex-col justify-center items-center border border-white/30 text-center w-2/5 h-40 bg-gradient-to-b from-teal-500/20 to-transparent rounded-[3rem] backdrop-blur-md">
            <h1 className="text-2xl m-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white font-comfortaa">
              {advice}
            </h1>
          </div>
          <button
            className="bg-teal-300/20 backdrop-blur-lg rounded-2xl py-2 px-4 font-semibold text-lg text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] border-2 border-white hover:bg-white hover:text-teal-800 active:shadow-none hover:shadow-2xl hover:shadow-white"
            onClick={() => {
              this.fetchAdvice();
            }}
          >
            Give Me Advice!
          </button>
        </div>
      </>
    );
  }
}

export default App;
