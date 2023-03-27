import "./App.css";
import { LightningCharge, SdCard, Pen, Eye } from "react-bootstrap-icons";

function App() {
  return (
    <div className="table m-auto w-6/12 content">
      <div className="component flex w-full h-auto text-center">
        <div className="w-1/2 result">
          <p className="text font-semibold border-none">Your Result</p>
          <div className="range inline-flex items-center justify-center">
            <div className="block">
              <p className="range-text text-white font-bold text-6xl">76</p>
              <p className="range-offer text text-xs mt-3">of 100</p>
            </div>
          </div>
          <p className=" text-white text-3xl font-medium border-none">Great</p>
          <p className=" text-white text-base font-light px-5 mb-5 border-none">
            You scored higder than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="w-1/2 summary shadow-xl">
          <p className="text-left text-sky-900 font-semibold text-xl border-none">
            Summary
          </p>
          <div className="reaction-box flex rounded-xl">
            <div className="w-1/2 flex">
              <LightningCharge className="text-2xl reaction" />
              <p className="reaction text-xl font-medium ml-2">Reaction</p>
            </div>
            <div className="w-1/2">
              <p className="range-percent text-xl font-medium">
                80 <span className="">/ 100</span>
              </p>
            </div>
          </div>
          <div className="memory-box flex mt-2 rounded-xl">
            <div className="w-1/2 flex">
              <SdCard className="text-2xl memory" />
              <p className="memory text-xl font-medium ml-2">Memory</p>
            </div>
            <div className="w-1/2">
              <p className="range-percent text-xl font-medium">
                92 <span className="">/ 100</span>
              </p>
            </div>
          </div>
          <div className="verbal-box flex mt-2 rounded-xl">
            <div className="w-1/2 flex">
              <Pen className="text-2xl verbal" />
              <p className="verbal text-xl font-medium ml-2">verbal</p>
            </div>
            <div className="w-1/2">
              <p className="range-percent text-xl font-medium">
                61 <span className="">/ 100</span>
              </p>
            </div>
          </div>
          <div className="visual-box flex mt-2 rounded-xl">
            <div className="w-1/2 flex">
              <Eye className="text-2xl visual" />
              <p className="visual text-xl font-medium ml-2">Visual</p>
            </div>
            <div className="w-1/2">
              <p className="range-percent text-xl font-medium">
                72 <span className="">/ 100</span>
              </p>
            </div>
          </div>
          <div className="continue text-white">Continue</div>
        </div>
      </div>
    </div>
  );
}

export default App;
