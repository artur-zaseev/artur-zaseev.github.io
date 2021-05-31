import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Артур Засеев | Front-end разработчик</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="yandex-verification" content="47807a4cfd8f2207" />
      </Head>
      <div className="flex flex-col min-h-screen w-screen py-6 lg:py-0">
        <div className="w-full flex justify-center py-2 lg:px-10 lg:pt-5">
          <a
            href="/"
            className="flex justify-center items-center text-xl text-gray-600 lg:mr-auto"
          >
            <span className="flex justify-center items-center h-10 w-10 mr-3 bg-green-400 text-white text-2xl rounded-full">
              A
            </span>
            <span className="font-bold mr-2 text-gray-600">Артур</span> Засеев
          </a>

          <div className="hidden items-center">
            <ul className="flex items-center">
              <li className="mx-3">
                <a className="text-gray-600" href="Resume">
                  Resume
                </a>
              </li>
              <li className="mx-3">
                <a className="text-gray-600" href="Portfolio">
                  Portfolio
                </a>
              </li>
              <li className="mx-3">
                <a className="text-gray-600" href="Services">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container flex-1 flex flex-col items-center justify-center h-full mx-auto lg:flex-row">
          <div className="mt-12 custom_face rounded-full shadow-2xl border-8 border-white h-56 w-56 lg:mt-0 lg:h-80 lg:w-80"></div>
          <div className="mt-10 w-10/12 mx-auto lg:w-6/12 lg:mx-0 lg:mt-0 lg:ml-9">
            <div className="text-gray-400 text-center lg:text-left">
              Front-end developer
            </div>
            <div className="text-gray-600 text-5xl font-normal mt-2 mb-5 text-center lg:text-left">
              Артур Засеев
            </div>
            <div className="text-gray-400">
              <p className="text-center lg:text-left">
                <span className="text-gray-600 block lg:inline">
                  Регулярно использую:{" "}
                </span>
                Vue.js, Vuex, React.js, Redux, Nuxt.js, Next.js, SCSS, Anime.js,
                Git, Webpack, SVG animation, Canvas, Tailwindcss, Bootstrap,
                Figma.
              </p>
              <p className="mt-3 text-center lg:text-left">
                <span className="text-gray-600 block lg:inline">
                  Имею опыт работы с:{" "}
                </span>
                Node.js, Express.js, Styled Components, Handlebars, Lodash,
                TypeScript, Firebase, Jest.
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-center items-center lg:flex-row lg:justify-start">
              <a
                className="flex justify-center items-center border border-green-400 rounded-3xl py-2 px-9 text-gray-600 hover:text-white hover:bg-green-400 transition duration-200 text-center"
                href="mailto:zaseevav@yandex.ru"
              >
                <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
                zaseevav@yandex.ru
              </a>
              <a
                className="flex justify-center items-center border border-green-400 rounded-3xl py-2 px-9 text-gray-600 hover:text-white hover:bg-green-400 transition duration-200 text-center mt-2 lg:mt-0 lg:ml-4"
                href="skype:a-zaseev?call"
              >
                <i className="fa fa-skype mr-2" aria-hidden="true"></i>
                a-zaseev
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
