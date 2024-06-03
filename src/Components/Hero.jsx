/* eslint-disable no-unused-vars */
// import { useNavigate } from 'react-router-dom';
import { logoSummar } from "../assets";
import { Link} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Hero() {
  // const navigate = useNavigate();
  return (
    <header className="w-full flex  items-center flex-col">
      <nav className="flex justify-between item-center w-full mb-10 pt-3">
        <img
          src={logoSummar}
          alt=""
          className="w-40 mt-[-40px] object-contain mr-4"
        />
        <div className="w-[250px] flex justify-between item-center">
          <a href="./SignUp.jsx"
            to={<SignUp />}
            className=" bg-black text-[12px] font-semibold text-white mt-4 pt-2 pb-1 pr-3 pl-3 h-8 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl"
          >
            SIGNUP
          </a>
          {/* <Link
            to={<SignUp />}
            className=" bg-black text-[12px] font-semibold text-white mt-4 pt-1 pb-1 pr-3 pl-3 h-8 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl"
          >
            SIGNUP
          </Link> */}

          <a href="./SignIn.jsx"
            to={<SignIn />}
            className="bg-black text-[12px] font-semibold  text-white mt-4 pt-2 pb-1 pr-3 pl-3 h-8 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
          >
            LOGIN
          </a>
          {/* <Link
            to={<SignIn />}
            className="bg-black text-[12px] font-semibold  text-white mt-4 pt-1 pb-1 pr-3 pl-3 h-8 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
          >
            LOGIN
          </Link> */}

          <button
            type="button"
            onClick={() => window.open("https://github.com/krishnakant0269/AI-Summarizer")}
            className="-black text-white  font-semibold  pr-4 pl-4 pt-1 pb-1 mt-[-40px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
          >
            <img
              className=" size-8 caret-yellow-200 b rounded-[15px] "
              src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
              alt=""
            />
          </button>
        </div>
      </nav>
      <h2 className="head_text">
        Summerize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">SummarAIze</span>
      </h2>
      <h5 className="desc figtree text-typing">
        <span></span>SummarAIze is a powerful tool that can quickly and
        accurately condense the content of any webpage into a concise,
        informative summary. By leveraging advanced natural language processing
        techniques, SummarAIze provides users with quick access to the essential
        information they need, without the need to read through lengthy source
        material.
      </h5>
    </header>
  );
}

export default Hero;
