import React from "react";
import { Icon } from '@iconify/react';

const Card = () => {
  return (
    <div className="flex flex-row flex-wrap w-4/5 justify-center ">
      <div className="bg-blackish pb-5 border-2 border-border-gray rounded-xl mr-9 mt-5">
        <div className=""> <img className="rounded-t-xl" src="/img/image1.png" alt="" width='250' height='290' /></div>
        <div classname='flex flex-col flex-nowrap w-full text-left'>
          <div className="ml-5 pt-3 text-xl font-bold tracking-wider">Kidus Elias</div>
          <div className="ml-8 text-text-gray font-bold tracking-wide">Project Manager</div>
          <div className="flex flex-row flex-nowrap gap-3 cursor-pointer px-6 pb-4 pt-3">
            <a href="" target="_blank"><Icon icon="skill-icons:instagram" width="26" height="26" /></a>
            <a href="" target="_blank"><Icon icon="logos:discord-icon" width="26" height="26" /></a>
            <a href="https://github.com/Brikita" target="_blank"><Icon icon="ant-design:github-filled" width="26" height="26" /></a>
          </div>
        </div>
      </div>
      <div className="bg-blackish pb-5 border-2 border-border-gray rounded-xl mr-9 mt-5">
        <div className=""> <img className="rounded-t-xl" src="/img/image1.png" alt="" width='250' height='290' /></div>
        <div classname='flex flex-col flex-nowrap w-full text-left'>
          <div className="ml-5 pt-3 text-xl font-bold tracking-wider">Brian Kinyua</div>
          <div className="ml-8 text-text-gray font-bold tracking-wide">Developer</div>
          <div className="flex flex-row flex-nowrap gap-3 cursor-pointer px-6 pb-4 pt-3">
            <a href="" target="_blank"><Icon icon="skill-icons:instagram" width="26" height="26" /></a>
            <a href="" target="_blank"><Icon icon="logos:discord-icon" width="26" height="26" /></a>
            <a href="https://github.com/Brikita" target="_blank"><Icon icon="ant-design:github-filled" width="26" height="26" /></a>
          </div>
        </div>
      </div>
      <div className="bg-blackish pb-5 border-2 border-border-gray rounded-xl mr-9 mt-5">
        <div className=""> <img className="rounded-t-xl" src="/img/image1.png" alt="" width='250' height='290' /></div>
        <div classname='flex flex-col flex-nowrap w-full text-left'>
          <div className="ml-5 pt-3 text-xl font-bold tracking-wider">Ronnie Denzel Andayi</div>
          <div className="ml-8 text-text-gray font-bold tracking-wide">Developer</div>
          <div className="flex flex-row flex-nowrap gap-3 cursor-pointer px-6 pb-4 pt-3">
            <a href="" target="_blank"><Icon icon="skill-icons:instagram" width="26" height="26" /></a>
            <a href="" target="_blank"><Icon icon="logos:discord-icon" width="26" height="26" /></a>
            <a href="https://github.com/Brikita" target="_blank"><Icon icon="ant-design:github-filled" width="26" height="26" /></a>
          </div>
        </div>
      </div>
      <div className="bg-blackish pb-5 border-2 border-border-gray rounded-xl mr-9 mt-5">
        <div className=""> <img className="rounded-t-xl" src="/img/image1.png" alt="" width='250' height='290' /></div>
        <div classname='flex flex-col flex-nowrap w-full text-left'>
          <div className="ml-5 pt-3 text-xl font-bold tracking-wider">Moses Karisa</div>
          <div className="ml-8 text-text-gray font-bold tracking-wide">Developer</div>
          <div className="flex flex-row flex-nowrap gap-3 cursor-pointer px-6 pb-4 pt-3">
            <a href="" target="_blank"><Icon icon="skill-icons:instagram" width="26" height="26" /></a>
            <a href="" target="_blank"><Icon icon="logos:discord-icon" width="26" height="26" /></a>
            <a href="https://github.com/Brikita" target="_blank"><Icon icon="ant-design:github-filled" width="26" height="26" /></a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
