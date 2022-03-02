 import React from 'react'
 import metamask from '../../images/icons/metamask.svg'
 
 export const Sidebar = () => {
   return (
    <div
      id="sidebar"
      className={`shadow flex flex-col absolute z-10 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out`}
    >
      {/* Sidebar header */}
      <div className="flex flex-row justify-center items-center mb-5 pr-3 sm:px-2">
        <a aria-current="page" className="active font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-yellow-500" href="/">
          <span >Coin</span>
          <span className="text-slate-300">-cap</span>
        </a>
      </div>

      {/* Links */}
      <div className="space-y-8">

        {/* Pages group */}
        <div>
          <h3 className="text-xs uppercase text-slate-400 font-semibold pl-3">
            <span className="lg:sidebar-expanded:block 2xl:block">Billeteras</span>
          </h3>
          <ul className="mt-3">
            {/* Dashboard */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-slate-900`}>
              <a href='#' className={`block text-slate-300 hover:text-white truncate transition duration-150`}>
                <div className="flex items-center">
                  <img className="shrink-0 h-6 w-6" src={metamask} alt="" />

                  <span className="text-sm font-medium ml-3 duration-200">Metamask 1</span>
                </div>
              </a>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}>
              <a href='#' className={`block text-slate-300 hover:text-white truncate transition duration-150`}>
                <div className="flex items-center">
                  <img className="shrink-0 h-6 w-6" src={metamask} alt="" />
                  <span className="text-sm font-medium ml-3 duration-200">Metamask 2</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   )
 }
 