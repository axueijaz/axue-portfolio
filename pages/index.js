// import Head from "next/head";
// import { BsFillMoonStarsFill } from 'react-icons/bs' ; // Correct package and icon name
// import{ AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from'react-icons/ai';
// import Image from "next/image";
// import deved from "../public/dev-ed-wave.png";
// import design from "../public/design.png";
// import code from "../public/code.png";
// import consulting from "../public/consulting.png";
// import web1 from "../public/web1.png";
// import web2 from "../public/web2.png";
// import web3 from "../public/web3.png";
// import web4 from "../public/web4.png";
// import web5 from "../public/web5.png";
// import web6 from "../public/web6.png";
// // import web7 from "../public/web7.jfif";
// import web8 from "../public/web8.jpg";
// import web9 from "../public/web9.jpeg";
// import web10 from "../public/web10.jpeg";

// export default function Home() {
//   return (  
//     <div>
//       <Head>
//         <title>Ahsan Ijaz Portfolio</title>
//         <meta name="description" content="Portfolio of Ahsan Ijaz" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className="bg-white px-10 md:px-20 lg:px-20 md:text-2xl" >
//         <section className="min-h-screen">
//           <nav className="py-10 mb-10 flex justify-between" >
//             <h1 className="text-xl font-burtons" > developed by me</h1>
//             <ul className="flex items-center">
//               <li>
//                 <BsFillMoonStarsFill className="cursor-pointer text-2xl" /> 
//               </li>
//               <li>
//                 <a className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md ml-8 " href="#">Resume</a>
//               </li>
//             </ul>
//           </nav>
//           <div className="text-center">
//             <h2 className="text-5xl py-2 text-teal-600 font-medium">Ahsan Ijaz</h2>
//             <h2>Developer</h2>
//             <p className="text-md py-5 leading-8 text-grey-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut dolor eius alias corporis porro non quas enim laudantium autem reprehenderit fugiat voluptatibus maiores aliquam deserunt tempore soluta, doloremque qui.</p>

//           </div>
//           <div className="text-5xl flex justify-center  gap-16 py-3 text-gray-600">
//             <AiFillTwitterCircle/>
//             <AiFillYoutube/>
//             <AiFillLinkedin />
//           </div>
//           <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
//                <Image src={deved} layout="fill" objectFit="cover"/>

//           </div>
//         </section>
//         <section>
//           <div>
//             <h3 className="text-3xl py-1">Services I Offer</h3>
//             <p className="text-md py-2 leading-8 text-gray-80">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque eos debitis illum consequatur! Esse deserunt porro molestias, magni nisi quo mollitia eveniet, harum perferendis est sint cumque rerum aut nesciunt.
//             <span className="text-teal-500"> Agencies</span> consulted for  <span className="text-teal-500">Lorem ipsum dolor</span> sit amet consectetur, adipisicing elit. Libero, eos perferendis autem ducimus ea, iusto commodi deleniti dolorum aliquam quo excepturi et. Provident, natus ex officia odit nulla placeat harum?
//             </p>
//             <p className="text-md py-2 leading-8 text-gray-80">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque eos debitis illum consequatur! Esse deserunt porro molestias, magni nisi quo mollitia eveniet, harum perferendis est sint cumque rerum aut nesciunt.
//             </p>
//           </div>
//           <div >
//             <div className="text-center shadow-lg p-10 rounded-xl my-10">
//               <Image src={design} width={100} height={100} />
//                   <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>            
//                   <p className="py-2">
//                     Creating Elegent Designs For You 
//                   </p>  
//                   <h4 className="text-teal-600 py-4">Design tools I use </h4>
//                   <p className="text-gray-800 py-1">Photoshop</p>
//                   <p className="text-gray-800 py-1">Illustrator</p>
//                   <p className="text-gray-800 py-1">Figma</p>
//             </div>
//             <div className="text-center shadow-lg p-10 rounded-xl my-10">
//               <Image src={consulting} width={100} height={100} />
//                   <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>            
//                   <p className="py-2">
//                     Creating Elegent Designs For You 
//                   </p>  
//                   <h4 className="text-teal-600 py-4">Design tools I use </h4>
//                   <p className="text-gray-800 py-1">Photoshop</p>
//                   <p className="text-gray-800 py-1">Illustrator</p>
//                   <p className="text-gray-800 py-1">Figma</p>
//             </div>
//             <div className="text-center shadow-lg p-10 rounded-xl my-10">
//               <Image src={code} width={100} height={100} />
//                   <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>            
//                   <p className="py-2">
//                     Creating Elegent Designs For You 
//                   </p>  
//                   <h4 className="text-teal-600 py-4">Design tools I use </h4>
//                   <p className="text-gray-800 py-1">Photoshop</p>
//                   <p className="text-gray-800 py-1">Illustrator</p>
//                   <p className="text-gray-800 py-1">Figma</p>
//             </div>
//           </div>
//         </section>
//         <section>
//           <div>
//             <h3 className="text-3xl py-1 ">Portfolio</h3>

//           </div>
//           <div>
//             <div>
//               <Image src={web1}/>
//               <Image src={web2}/>
//               <Image src={web3}/>
//               <Image src={web4}/>
//               <Image src={web5}/>
//               <Image src={web6}/>
// <div className="w-250 ">
//               <Image src={web8}/>
//               <Image src={web9}/>
//               <Image src={web10}/>
//               {/* <Image src={web7}/> */}
//               </div>         
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web8 from "../public/web8.jpg";
import web9 from "../public/web9.jpeg";
// import web10 from "../public/web10.jpeg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyed</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ahsan Ijaz 
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Indesign</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Adobe-sharpen</p>
              <p className="text-gray-800 py-1">Visual Studio</p>
              <p className="text-gray-800 py-1">Reaction.AI</p>
              <p className="text-gray-800 py-1">Contrastic</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Team-get-Togethers</p>
              <p className="text-gray-800 py-1">Zoom-sessions</p>
              <p className="text-gray-800 py-1">Google-meet</p>
              <p className="text-gray-800 py-1">Meetups</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web8}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web9}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}