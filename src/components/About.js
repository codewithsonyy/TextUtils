import React from "react";

export default function About() {
  return (
    <div>
      <div className="accordion sm:w-4/5  mx-auto" id="accordionExample ">
        <div className="accordion-item bg-slate-100 border border-gray-200 dark:bg-black dark:text-white">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-white text-left
        bg-slate-400
        border-0
        rounded-none
        transition
        dark:bg-gray-200
        dark:text-black
        
        focus:outline-none"
              type="button"
            >
              About Us
            </button>
          </h2>
          <div>
            <div className="accordion-body py-6 md:py-4  px-8 md:px-5 leading-7 ">
              <strong>
                TextUtils is a word counter and a character utility which can be
                used to manipulate your text the way you want.
              </strong>{" "}
              .You can remove extra spaces or convert your text to uppercast or
              lowercase as well as you can copy the manipulated text. You can
              also download the pdf of the input text. consectetur adipisicing
              elit. Iure molestias illo praesentium sint, officiis fuga
              voluptatem rerum. Corrupti ducimus rem similique voluptate
              reiciendis nulla vitae provident deleniti minus, recusandae enim!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
