// "use client";
// import { AnimatePresence, motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   copyIcon,
//   facebookIcon,
//   mailIcon,
//   pinterestIcon,
//   shareIcon,
//   twitterIcon,
// } from "./SVG";
// import Link from "next/link";
// import {
//   EmailShareButton,
//   FacebookShareButton,
//   PinterestShareButton,
//   TwitterShareButton,
// } from "react-share";
// export default function Share() {
//   const wrapper = useRef<any>(null);
//   const [active, setActive] = useState(false);
//   const [currentUrl, setCurrentUrl] = useState<string>("");

//   useEffect(() => {
//     setCurrentUrl(window.location.href);
//   }, []);
//   useEffect(() => {
//     const windowClick = (e: MouseEvent) => {
//       if (!wrapper.current.contains(e.target)) setActive(false);
//     };

//     if (active) window.addEventListener("click", windowClick);
//     else window.removeEventListener("click", windowClick);

//     return () => window.removeEventListener("click", windowClick);
//   }, [active]);
//   return (
//     <div className="share" ref={wrapper}>
//       <div
//         className={"share__btn " + (active ? "active" : "")}
//         onClick={() => setActive(!active)}
//       >
//         {shareIcon}
//       </div>
//       <AnimatePresence>
//         {active === true && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.2 }}
//             exit={{ opacity: 0 }}
//             className="share__menu"
//           >
//             <FacebookShareButton
//               url={"https://cary.arealglam.com"}
//               title="Friend's Advice for Being the Sexiest in Town"
//             >
//               <span>{facebookIcon} </span> facebook
//             </FacebookShareButton>
//             <PinterestShareButton
//               url={"https://cary.arealglam.com"}
//               media={"https://cary.arealglam.com/images/logo.png"}
//               title="Friend's Advice for Being the Sexiest in Town"
//             >
//               <span>{pinterestIcon} </span> Pinterest
//             </PinterestShareButton>
//             <TwitterShareButton
//               title="Friend's Advice for Being the Sexiest in Town"
//               url={"https://cary.arealglam.com"}
//             >
//               <span>{twitterIcon}</span>
//               twitter
//             </TwitterShareButton>
//             <EmailShareButton
//               url={"https://cary.arealglam.com"}
//               subject="Friend's Advice for Being the Sexiest in Town"
//             >
//               <span>{mailIcon}</span>
//               email
//             </EmailShareButton>
//             <button
//               type="button"
//               onClick={() => {
//                 navigator.clipboard.writeText("https://cary.arealglam.com");
//                 setActive(false);
//               }}
//             >
//               <span>{copyIcon}</span>
//               copy link
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
