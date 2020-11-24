/* eslint-disable react/jsx-key */
import React from "react";
import "./frontend-server-guide.scss";
import { TreeFolder, TreeFile, FileTree } from "./utils/file-tree";

export const FrontEndServerGuide = (): any => {
    const fileDescriptions = [
        <p className="mb-0">This folder should contain all your Typescript-React source code.</p>,
        <p className="mb-0">This folder should contain all code shared by different part of your application. This prevents code duplication.</p>,
        <p className="mb-0">This folder should contain all styles shared by different part of your application. This prevents code duplication.</p>,
        <p className="mb-0">This file contains CSS variables used across your application.</p>,
        <p className="mb-0">This file contains styling shared by different parts of your application.</p>,
        <p className="mb-0">This file contains status badge styles shared by different parts of your application.</p>,
        <p className="mb-0">This file contains miscellaneous styles shared by different parts of your application.</p>,
        <p className="mb-0">
            This file is the entry point to the <code>src/common</code> folder. All common files should be exported here.
        </p>,
        <p className="mb-0">This file should contain global variables and functions accessible by all parts of your application.</p>,
        <p className="mb-0">
            This folder should contain source code of the public facing side of your application. It&apos;s a good idea to separate your app into
            logical sections. This improves loading times of your app because you&apos;ll transfer files with smaller sizes instead of one giant file
        </p>,
        <p className="mb-0">
            This folder contains a simple preconfigured login form. Feel free to either use it or replace with your form component
        </p>,
        <p className="mb-0">This file is the React source code of the login form</p>,
        <p className="mb-0">This file contains the stylesheet of the login form</p>,
        <p className="mb-0">
            This folder contains a simple preconfigured logout component. Feel free to either use it or replace with your component
        </p>,
        <p className="mb-0">This file is the React source code of the logout component</p>,

        <p className="mb-0">This folder contains the built sources and the index file for your app</p>,
        <p className="mb-0">
            This folder represents the public facing part of your app. It&apos;s a good idea to separate your app into logical sections. This improves
            loading times of your app because you&apos;ll transfer files with smaller sizes instead of one giant file
        </p>,
        <p className="mb-0">This is the default entry page to the public facing part of your application when it is loaded</p>,
        <p className="mb-0">
            This file is the built source file, created by the bundler tool. This file exists when you start up the bundler command
        </p>,

        <p className="mb-0">
            Contains configurations for the{" "}
            <a href="https://babeljs.io/" target="_blank" rel="noreferrer noopeer">
                Babel
            </a>{" "}
            transpiler. Babel is a tool that transpiles (converts) your ES6 Typescript-React source into ES5 which all browsers can execute.{" "}
            <i>Normally, you’ll never have to edit this file</i>.
        </p>,
        <p className="mb-0">
            Contains configurations for the{" "}
            <a href="https://eslint.org/" target="_blank" rel="noreferrer noopeer">
                ESlint
            </a>{" "}
            linter. ESlint is a tool that works in conjunction with your IDE (Webstorm, VSCode, Atom, etc.) to highlight and reporting issues with
            ECMAScript compatible languages (i.e. Javascript, Typescript). <i>Normally, you’ll never have to edit this file</i>.
        </p>,
        <p className="mb-0">Contains a list of paths to be ignored by the Git versioning tool</p>,
        <p className="mb-0">
            Contains configuration for the{" "}
            <a href="https://prettier.io/" target="_blank" rel="noreferrer noopeer">
                Prettier
            </a>{" "}
            formatter. Prettier is a tool that reformats your code according to specified rules. You can configure to break lines at specified widths,
            force semi colons, force double quoted strings and lots more.
        </p>,
        <p className="mb-0">
            This is a typescript declarations file. This is used to declare global types for variables and functions that do not have types. Not
            declaring a type for an object may cause the Typescript compiler to throw type errors.
        </p>,
        <p className="mb-0">
            Contains configuration for the{" "}
            <a href="https://nodemon.io/" target="_blank" rel="noreferrer noopeer">
                Nodemon
            </a>{" "}
            development server. Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
        </p>,
        <p className="mb-0">
            Contains project and dependency information used by{" "}
            <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer noopeer">
                Yarn
            </a>{" "}
            or{" "}
            <a href="http://npmjs.com/" target="_blank" rel="noreferrer noopeer">
                NPM
            </a>{" "}
            package managers.
        </p>,
        <p className="mb-0">
            Contains configuration for{" "}
            <a href="https://postcss.org/" target="_blank" rel="noreferrer noopeer">
                PostCSS
            </a>
            . PostCSS adds vendor prefixes to your CSS code. An example is when you add the <code>:fullscreen</code> pseudo class, PostCSS will inject
            the <code>:webkit-full-screen</code> and <code>:ms-fullscreen</code> pseudo classes into the final CSS file automatically.
            <i>Normally, you’ll never have to edit this file</i>.
        </p>,
        <p className="mb-0">
            This file is a simple NodeJS server script. It serves the public facing side of your application by default. Anytime you add a new section
            to the frontend, you must register it here with a base URL.
        </p>,
        <p className="mb-0">
            Contains configuration for the{" "}
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopeer">
                Typescript
            </a>{" "}
            compiler. <i>Normally, you’ll never have to edit this file</i>.
        </p>,
        <p className="mb-0">
            This file should contain custom Typescript declaration. This is useful if a library does not come with a typings file and you want to
            define its types to prevent Typescript from emitting warnings or errors.
        </p>,
        <p className="mb-0">
            Contains configuration for the{" "}
            <a href="https://webpack.js.org/" target="_blank" rel="noreferrer noopeer">
                Webpack
            </a>{" "}
            module bundler. Webpack is a tool that uses most of the tools mentioned before, (Babel, PostCSS, ESlint, Typescript, etc) to bundle your
            source code into one or more JS file(s) that you can include in your HTML (<code>dist/index.html</code>).
        </p>,
        <p className="mb-0">
            Not to be confused with <code>webpack.common.js</code>. This file instructs Webpack to compile heavy libraries of your application into <code>dist/lib/</code> <strong>once</strong>.
            This speeds up compilation time because those heavy libraries are not compiled everytime you make a change in your source code.
        </p>
    ];

    return (
        <div id="frontend-server-guide">
            <div className="container">
                <h1 className="mb-4">Frontend Server Apps</h1>
                <p className="mb-5">
                    Frontend server apps give you all the features of static apps with the addition of a minimalist NodeJS server to serve your site.
                    This option is preferred if your app responds to changes in the window URL
                </p>

                <FileTree>
                    {setDetails => (
                        <TreeFolder label="Your app">
                            <TreeFolder label="src" onClick={() => setDetails("src/", fileDescriptions[0])}>
                                <TreeFolder label="common" onClick={() => setDetails("src/common", fileDescriptions[1])}>
                                    <TreeFolder label="stylesheets" onClick={() => setDetails("src/common/stylesheets", fileDescriptions[2])}>
                                        <TreeFile
                                            label="config.scss"
                                            onClick={() => setDetails("src/common/stylesheets/config.scss", fileDescriptions[3])}
                                        />
                                        <TreeFile
                                            label="index.scss"
                                            onClick={() => setDetails("src/common/stylesheets/index.scss", fileDescriptions[4])}
                                        />
                                        <TreeFile
                                            label="status.scss"
                                            onClick={() => setDetails("src/common/stylesheets/status.scss", fileDescriptions[5])}
                                        />
                                        <TreeFile
                                            label="utils.scss"
                                            onClick={() => setDetails("src/common/stylesheets/utils.scss", fileDescriptions[6])}
                                        />
                                    </TreeFolder>
                                    <TreeFile label="index.ts" onClick={() => setDetails("src/common/index.ts", fileDescriptions[7])} />
                                    <TreeFile label="utils.tsx" onClick={() => setDetails("src/common/utils.tsx", fileDescriptions[8])} />
                                </TreeFolder>

                                <TreeFolder label="public" onClick={() => setDetails("src/public", fileDescriptions[9])}>
                                    <TreeFolder label="login" onClick={() => setDetails("src/public/login", fileDescriptions[10])}>
                                        <TreeFile label="index.tsx" onClick={() => setDetails("src/public/login/index.tsx", fileDescriptions[11])} />
                                        <TreeFile
                                            label="index.scss"
                                            onClick={() => setDetails("src/public/login/index.scss", fileDescriptions[12])}
                                        />
                                    </TreeFolder>
                                    <TreeFolder label="logout" onClick={() => setDetails("src/public/logout", fileDescriptions[13])}>
                                        <TreeFile label="index.tsx" onClick={() => setDetails("src/public/logout/index.tsx", fileDescriptions[14])} />
                                    </TreeFolder>
                                </TreeFolder>
                            </TreeFolder>

                            <TreeFolder label="dist" onClick={() => setDetails("dist/", fileDescriptions[15])}>
                                <TreeFolder label="public" onClick={() => setDetails("dist/public/", fileDescriptions[16])}>
                                    <TreeFile label="index.ejs" onClick={() => setDetails("dist/public/index.ejs", fileDescriptions[17])} />
                                    <TreeFile label="bundle.js" onClick={() => setDetails("dist/public/bundle.js", fileDescriptions[18])} />
                                </TreeFolder>
                            </TreeFolder>

                            <TreeFile label=".babelrc.js" onClick={() => setDetails(".babelrc.js", fileDescriptions[19])} />
                            <TreeFile label=".eslintrc.js" onClick={() => setDetails(".eslintrc.js", fileDescriptions[20])} />
                            <TreeFile label=".gitignore.js" onClick={() => setDetails(".gitignore.js", fileDescriptions[21])} />
                            <TreeFile label=".prettier.js" onClick={() => setDetails(".prettier.js", fileDescriptions[22])} />
                            <TreeFile label="index.d.ts" onClick={() => setDetails("index.d.ts", fileDescriptions[23])} />
                            <TreeFile label="nodemon.json" onClick={() => setDetails("nodemon.json", fileDescriptions[24])} />
                            <TreeFile label="package.json" onClick={() => setDetails("package.json", fileDescriptions[25])} />
                            <TreeFile label="postcss.config.js" onClick={() => setDetails("postcss.config.js", fileDescriptions[26])} />
                            <TreeFile label="server.js" onClick={() => setDetails("server.js", fileDescriptions[27])} />
                            <TreeFile label="tsconfig.js" onClick={() => setDetails("tsconfig.js", fileDescriptions[28])} />
                            <TreeFile label="types.ts" onClick={() => setDetails("types.ts", fileDescriptions[29])} />
                            <TreeFile label="webpack.common.js" onClick={() => setDetails("webpack.common.js", fileDescriptions[30])} />
                            <TreeFile label="webpack.lib.js" onClick={() => setDetails("webpack.lib.js", fileDescriptions[31])} />
                        </TreeFolder>
                    )}
                </FileTree>

                {/*<br />*/}

                {/*<h3>Starting Webpack in Watch Mode</h3>*/}

                {/*<p>*/}
                {/*    As mentioned previously, Webpack is a module bundler and uses the other configured tools to bundle your source code and assets*/}
                {/*    into one or more files that you can include in your html. By starting webpack in watch mode, it will automatically rebuild when*/}
                {/*    you make a change in the source code.*/}
                {/*</p>*/}

                {/*<p className="mb-5">*/}
                {/*    To start webpack in watch mode, you can run either <code>yarn dev</code> or <code>npm run dev</code> at the project root. This*/}
                {/*    starts a daemon process that you can end using <code>Ctrl+C</code>.*/}
                {/*</p>*/}

                {/*<h3>Building For Production</h3>*/}

                {/*<p>*/}
                {/*    In the previous section, webpack runs in watch mode, but it builds the files in development mode. In this mode, the files will be*/}
                {/*    much larger in size, since they contain a lot of assertion code. When you are ready to deploy, you need to build in production*/}
                {/*    mode.*/}
                {/*</p>*/}

                {/*<p className="mb-5">*/}
                {/*    To build in production mode, run <code>yarn build</code> or <code>npm run build</code> at the project root.*/}
                {/*</p>*/}

                {/*<h3>Previewing</h3>*/}

                {/*<p className="mb-5">*/}
                {/*    Webpack builds your source codes into a single <code>dist/bundle.js</code> file with an <code>dist/assets/</code> folder at the*/}
                {/*    root of your project. This file is already referenced in your <code>dist/index.html</code> file as a script tag. To preview your*/}
                {/*    app, open the <code>dist/index.html</code> file in your browser.*/}
                {/*</p>*/}

                {/*<h3>Upgrading Dependencies</h3>*/}

                {/*<p>*/}
                {/*    <strong>mkts</strong> installs project with the last known stable major versions of dependencies. If you&apos;d like to upgrade*/}
                {/*    the dependencies, you can use <code>yarn outdated</code> or <code>npm outdated</code> to find which dependencies need upgrading.*/}
                {/*    Then you can use <code>yarn upgrade</code> or <code>npm update</code> to run upgrade.*/}
                {/*</p>*/}
            </div>
        </div>
    );
};
