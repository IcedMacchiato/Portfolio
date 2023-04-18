import React from 'react';
import {FaGithubSquare} from 'react-icons/fa'
import { SiBuymeacoffee } from "react-icons/si"


const App = () => {
  return (
    <div className='min-h-screen'>
        <div className='border-b bg-accent-1 border-accent-2'>
          <div className='container mx-auto px-5'>
            <div className='py-2 text-center text-sm flex justify-between'>
            <h1 className='text-xl flex items-center font-display font-bold'>iced<SiBuymeacoffee/></h1>
              <p></p>
              <ul className='flex items-center'>
                <a target="_blank" href="https://github.com/IcedMacchiato?tab=repositories" rel="noreferrer">
                  <FaGithubSquare size='1.5rem' className='cursor-pointer animate-pulse'/>
                </a>
              </ul>
            </div>
          </div>
        </div>

  <main>
      <div className="container mx-auto px-5">
        <h2 className="text-2xl md:text-4xl font-bold tracking-light md:tracking-tighter leading-tight mb-20 mt-8">
          <a className="hover:underline" href="/">Kohi</a> .
        </h2>
      <article>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">Software Engineer</h1>
          <div className="hidden md:block md:mb-12">
            <div className="flex items-center">
              <img src="https://avatars.githubusercontent.com/u/50633692?v=4" className="w-12 h-12 rounded-full mr-4" alt="IcedMacchiato"></img>
                <div className="text-xl font-bold">Will T.</div>
            </div>
          </div>
          <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
            <div className="-mx-5 sm:mx-0">
              <img src='%PUBLIC_URL%/media/kohicafe.png' alt="" width="2000" height="1000" className="shadow-small max-w-full max-h-full"/>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="block md:hidden mb-6">
              <div className="flex items-center">
                <img src="https://avatars.githubusercontent.com/u/50633692?v=4" className="w-12 h-12 rounded-full mr-4" alt=""/>
                  <div className="text-xl font-bold">Will T.</div>
              </div>
            </div>
                <div className="mb-6 text-lg">
                  <time datetime="2023-04-09T05:00:00.000Z">Apr, 2023</time>
                </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="font-display">
              <p>
              I&apos;m a developer driven by coffee, striving to make a difference in the industry. 
              Through my experience, I have honed my coding skills and developed a passion for machine learning, leading me to focus on statistics to improve my analytical abilities. 
              I apply this knowledge to conduct in-depth studies and create complex models using big data to solve real-world challenges. 
              My ultimate goal is to leverage my skills and experience to make a meaningful impact in the industry.
              </p>
            </div>
          </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24"/>

    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">Projects</h2>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
            <div>
              <div className="mb-5">
                <div className="-mx-5 sm:mx-0">
                  <a target="_blank" aria-label="discord bot" href="https://github.com/IcedMacchiato/Tabebot">
                    <img width="2000" height="1000" alt="" className="shadow-small hover:shadow-medium transition-shadow duration-200 max-w-full max-h-full" src="./Portfolio/media/tabelog.png"/>
                  </a>
                </div>
              </div>
                <h3 className="text-3xl mb-3 leading-snug">
                  <a target="_blank" className="hover:underline" href="https://github.com/IcedMacchiato/Tabebot" rel="noreferrer">Tabebot</a>
                </h3>
              <div className="text-lg mb-4">
                <time datetime="2023-02-08T06:00:00.000Z">Feb, 2023</time>
              </div>
                <p className="text-lg leading-relaxed mb-4">Moving to Japan, I wanted to explore the diverse food scene and try a new restaurant every day. However, selecting a restaurant was not easy as locals use a website called Tabelog to search for restaurants based on cuisine and location, and the rating system is notoriously strict. To help me find great restaurants more easily, I created a discord bot that randomly suggests a cuisine and provides me with links to Tabelog's top-rated restaurants in Tokyo.</p>
            </div>

                <div>
                  <div className="mb-5">
                    <div className="-mx-5 sm:mx-0">
                        <a target="_blank" aria-label="C++ coffee shop oop" href="https://github.com/IcedMacchiato/kohi-shop">
                          <img width="2000" height="1000" alt="Cover Image for Dynamic Routing and Static Generation" className="shadow-small hover:shadow-medium transition-shadow duration-200 max-w-full max-h-full" src="./Portfolio/media/coffeeshop.png"/>
                        </a>
                    </div>
                  </div>
                  <h3 className="text-3xl mb-3 leading-snug">
                    <a target="_blank" className="hover:underline" href="https://github.com/IcedMacchiato/kohi-shop" rel="noreferrer">Kohi Shop</a>
                  </h3>
                  <div className="text-lg mb-4">
                    <time datetime="2023-04-07T06:00:00.000Z">Apr, 2023</time>
                  </div>
                    <p className="text-lg leading-relaxed mb-4">C++ Test Coffee Shop project is a programming exercise that creates classes and adds items to a coffee shop simulation using OOP concepts in C++. The project allows customers to place orders, pay for their drinks, and receive them. It also uses OOP principles like inheritance, polymorphism, and encapsulation to model real-world entities and their interactions.</p>          
                </div>
              <div>
                <div className="mb-5">
                  <div className="-mx-5 sm:mx-0">
                    <a target="_blank" aria-label="minimalist website" href="https://github.com/IcedMacchiato/Kohi">
                      <img width="2000" height="1000" alt="" className="shadow-small hover:shadow-medium transition-shadow duration-200 max-w-full max-h-full" src="./Portfolio/media/kohi.png"/>
                    </a>
                  </div>
                </div>
                  <h3 className="text-3xl mb-3 leading-snug">
                    <a target="_blank" className="hover:underline" href="https://github.com/IcedMacchiato/Kohi">Minimalist coffee shop landing page</a>
                  </h3>
                <div className="text-lg mb-4">
                  <time datetime="2022-07-08T06:00:00.000Z">July, 2022</time>
                </div>
                <p className="text-lg leading-relaxed mb-4">Whenever I travel abroad, I make it a point to visit as many local cafes as possible. Among all the cafes I&apos;ve been to, those in Japan stood out the most to me. Their aesthetics were so pleasing that any photo taken there would turn out amazing, especially in cafes. After exploring a few, I felt motivated to design a modern, minimalist, and responsive landing page for these coffee shops since many of their websites were either in basic HTML or nonexistent.</p>
              </div>

            <div>
              <div className="mb-5">
                <div className="-mx-5 sm:mx-0">
                  <a target="_blank" aria-label="trend analysis" href="https://github.com/IcedMacchiato/BTC-ETH-DOGE-21-22-Analysis">
                    <img width="2000" height="1000" alt="" className="shadow-small hover:shadow-medium transition-shadow duration-200 max-w-full max-h-full" src="./Portfolio/media/graphs.png"/>
                  </a>
                </div>
              </div>
                <h3 className="text-3xl mb-3 leading-snug">
                  <a target="_blank" className="hover:underline" href="https://github.com/IcedMacchiato/BTC-ETH-DOGE-21-22-Analysis">Trend Analysis</a>
                </h3>
              <div className="text-lg mb-4">
                <time datetime="2022-07-09T06:00:00.000Z">July, 2022</time>
              </div>
                <p className="text-lg leading-relaxed mb-4">In light of the recent surge and subsequent decline of cryptocurrencies between 2021 and 2022, I opted to examine the trajectory of three well-known digital currencies: Bitcoin, Ethereum, and Dogecoin.</p>
            </div>
          </div>
    </section>
    </div>
  </main>

    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">W T.</h3>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
              <a href="https://github.com/IcedMacchiato" className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">View on Github</a>    
            </div>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default App;
