import './auth.scss';
import { BsTwitter } from 'react-icons/bs';
import { FaApple } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
const Auth = () => {
  return (
    <div className=" row main ">
      <div className=" overflow-hidden col left ">
        <div className=" position-relative ">
          <img src="/lohp_en_1302x955.png" alt="panner" />
        </div>
        <div className="center">
          <BsTwitter className=" w-25 h-50 text-white" />
        </div>
      </div>

      <div className=" right col">
        <div className="p-3 fw-bolder ">
          <div className="logo">
            <BsTwitter />
          </div>

          <h1 className=" fw-bolder py-4 fs-1">Happening now</h1>
          <h3 className=" fw-bold">Join Twitter today.</h3>
          <button className="signup text-white fw-normal px-5 text-center justify-content-between d-inline-flex text-lg-center rounded-pill align-content-center">
            {/* <FaApple /> */}
            <div className="p-0 m-0">
              <h5 className=" mb-0 text-secondary ">Sign up with Apple</h5>
              <p className=" m-0 text-secondary">mm@gmail.com</p>
            </div>
            <AiOutlineGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
