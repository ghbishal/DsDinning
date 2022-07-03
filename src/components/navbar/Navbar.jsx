import {useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import "./navbar.scss";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isActive, setActive] = useState("false");
  const [unchecked, setUnchecked] = useState(true);

  // const handleToggle = () => {
  //   setActive(!isActive);
  // };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  // return (
  //   <nav id="navbar" className={scroll ? "scrolled" : " "}>
  //     <div className="nav-container">
  //       <div href="/" className="logo">
  //         <a href="/">DS Dinning</a>
  //       </div>
  //       <label
  //         for="btn"
  //         class="icon"
  //         onClick={() => {
  //           setActive(!isActive);
  //           setUnchecked((old) => !old);
  //         }}
  //       >
  //         <span class={isActive ? "fa fa-bars " : "fa fa-bars cancel"}></span>
  //       </label>
  //       <input type="checkbox" checked={unchecked} id="btn" />

  //       <ul>
  //         <li>
  //           <a
  //             href="/"
  //             onClick={() => {
  //               setActive(!isActive);
  //               setUnchecked((old) => !old);
  //             }}
  //           >
  //             家
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href="#aboutus"
  //             onClick={() => {
  //               setActive(!isActive);
  //               setUnchecked((old) => !old);
  //             }}
  //           >
  //             約
  //           </a>
  //         </li>
  //         <li>
  //           <label for="btn-1" class="show">
  //             メニュー +
  //           </label>
  //           <a
  //             href="/menu"
  //             onClick={() => {
  //               setActive(!isActive);
  //               setUnchecked((old) => !old);
  //             }}
  //           >
  //             メニュー
  //           </a>
  //           <input type="checkbox" id="btn-1" />
  //           <ul className={scroll ? "scrolled" : " "}>
  //             <li>
  //               <a
  //                 href="#"
  //                 onClick={() => {
  //                   setActive(!isActive);
  //                   setUnchecked((old) => !old);
  //                 }}
  //               >
  //                 ランチ
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#"
  //                 onClick={() => {
  //                   setActive(!isActive);
  //                   setUnchecked((old) => !old);
  //                 }}
  //               >
  //                 ディナー
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#"
  //                 onClick={() => {
  //                   setActive(!isActive);
  //                   setUnchecked((old) => !old);
  //                 }}
  //               >
  //                 Icons
  //               </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li>
  //           <a
  //             href="#coupons"
  //             onClick={() => {
  //               setActive(!isActive);
  //               setUnchecked((old) => !old);
  //             }}
  //           >
  //             クーポン
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             href="#"
  //             onClick={() => {
  //               setActive(!isActive);
  //               setUnchecked((old) => !old);
  //             }}
  //           >
  //             接点
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
  return (
    <nav id="navbar" className={scroll ? "scrolled" : " "}>
      <div className="nav-container">
        <div href="/" className="logo">
          <Link to="/">DS Dinning</Link>
        </div>
        <label
          for="btn"
          class="icon"
          onClick={() => {
            setActive(!isActive);
            setUnchecked((old) => !old);
          }}
        >
          <span class={isActive ? "fa fa-bars " : "fa fa-bars cancel"}></span>
        </label>
        <input type="checkbox" checked={unchecked} id="btn" />

        <ul>
          <li>
            <HashLink
              to="/"
              onClick={() => {
                setActive(!isActive);
                setUnchecked((old) => !old);
              }}
            >
              家
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#aboutus"
              onClick={() => {
                setActive(!isActive);
                setUnchecked((old) => !old);
              }}
            >
              約
            </HashLink>
          </li>
          <li>
            <label for="btn-1" class="show">
              メニュー +
            </label>
            <Link
              to="/menu"
              onClick={() => {
                setActive(!isActive);
                setUnchecked((old) => !old);
              }}
            >
              メニュー
            </Link>
            <input type="checkbox" id="btn-1" />
            <ul>
              <li>
                <Link
                  to="#"
                  onClick={() => {
                    setActive(!isActive);
                    setUnchecked((old) => !old);
                  }}
                >
                  ランチ
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => {
                    setActive(!isActive);
                    setUnchecked((old) => !old);
                  }}
                >
                  ディナー
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => {
                    setActive(!isActive);
                    setUnchecked((old) => !old);
                  }}
                >
                  Icons
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <HashLink
              to="/#coupons"
              onClick={() => {
                setActive(!isActive);
                setUnchecked((old) => !old);
              }}
            >
              クーポン
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#contactus"
              onClick={() => {
                setActive(!isActive);
                setUnchecked((old) => !old);
              }}
            >
              接点
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
