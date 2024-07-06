"use client";

import React from "react";

const FeaturedApps = () => {
  const [userInput, setUserInput] = React.useState("stock analysis");
  const [tools, setTools] = React.useState([
    {
      id: 23051,
      name: "Punchline Painter",
      slug: "punchline-painter",
      url: "https://chat.openai.com/g/g-MVqqkmMIl-p-u-n-c-h-l-i-n-e-p-a-i-n-t-e-r",
      icon_src:
        "https://media.theresanaiforthat.com/icons/punchline-painter.png",
      has_icon: "2",
    },
    {
      id: 43790,
      name: "TranslateI18N - A Visual Studio Extension for i18n gpt translator",
      slug: "translatei18n-a-visual-studio-extension-for-i18n-gpt-translator",
      url: "https://www.translatei18n.com/",
      icon_src:
        "https://media.theresanaiforthat.com/icons/translatei18n-a-visual-studio-extension-for-i18n-gpt-translator.svg",
      has_icon: "1",
    },
    {
      id: 23690,
      name: "R.E.S.O.N.A.T.E. Framework for Viral Content",
      slug: "r-e-s-o-n-a-t-e-framework-for-viral-content",
      url: "https://chat.openai.com/g/g-NqdyH4ZE8-r-e-s-o-n-a-t-e-framework-for-viral-content",
      icon_src:
        "https://media.theresanaiforthat.com/icons/r-e-s-o-n-a-t-e-framework-for-viral-content.png",
      has_icon: "2",
    },
    {
      id: 1121,
      name: "The Best Way to Start a Conversation",
      slug: "opener",
      url: "https://opener.chat/",
      icon_src: "https://media.theresanaiforthat.com/icons/opener.svg",
      has_icon: "1",
    },
  ]);

  const fetchAiTools = (config) => {
    fetch(`/api/search?query=${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTools(data.data);
      });
  };

  return (
    <div>
      <div class="h-screen flex flex-col pb-6">
        <div class="h-full flex flex-col justify-center">
          <div class="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-blue-500 font-serif text-6xl">lifestail</h1>

            <p class="mt-3 text-gray-600 dark:text-neutral-400">
              search ai tools
            </p>
          </div>

          <div class="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative">
              <input
                type="text"
                placeholder=""
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                class="border p-4 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
              <div class="absolute top-1/2 end-2 -translate-y-1/2">
                <button
                  onClick={fetchAiTools}
                  type="button"
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:bg-neutral-800"
                >
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="container grid grid-cols-4 gap-2 mt-12">
            {tools.map((tool) => (
              <a href={tool.url} target="_blank" rel="noreferrer">
                <div class="bg-white rounded-lg border p-4 flex flex-col justify-center items-center hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700">
                  <img
                    src={tool.icon_src}
                    alt={tool.name}
                    class="w-20 h-20 rounded-full"
                  />
                  <h3 class="mt-4 text-xl font-semibold">{tool.name}</h3>
                  <p class="mt-4 text-gray-600 dark:text-neutral-400">
                    {tool.slug}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedApps;
