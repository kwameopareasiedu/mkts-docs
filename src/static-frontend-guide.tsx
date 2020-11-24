/* eslint-disable react/jsx-key */
import React from "react";
import "./static-frontend-guide.scss";
import { TreeFile, TreeFolder, FileTree } from "./utils/file-tree";

export const StaticFrontEndGuide = (): any => {
    const fileDescriptions = [
        <p className="mb-0">This folder should contain all your Typescript-React source code. By default, it contains three (3) files</p>,
        <p className="mb-0">This file is the entry point to your app. During bundling, this is the file the bundler starts with.</p>,
        <p className="mb-0">
            This file is start of your actual app. The boilerplate code is very minimal here. Hence, you are free to architect your app however you
            want.
        </p>,
        <p className="mb-0">
            This is the app-level stylesheet of your application. This file should ideally contain styles that are applied across the application.
            Page specific styles should be stored in stylesheets of those pages.
        </p>,
        <p className="mb-0">This folder contains the built sources and the index file for your app</p>,
        <p className="mb-0">This is the default entry page to your application when it is loaded</p>,
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
            Contains configuration for the{" "}
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopeer">
                Typescript
            </a>{" "}
            compiler. <i>Normally, you’ll never have to edit this file</i>.
        </p>,
        <p className="mb-0">
            Contains configuration for the{" "}
            <a href="https://webpack.js.org/" target="_blank" rel="noreferrer noopeer">
                Webpack
            </a>{" "}
            module bundler. Webpack is a tool that uses most of the tools mentioned before, (Babel, PostCSS, ESlint, Typescript, etc) to bundle your
            source code into one or more JS file(s) that you can include in your HTML (<code>dist/index.html</code>).
        </p>
    ];

    return (
        <div id="static-frontend-guide">
            <div className="container">
                <h1 className="mb-4">Static Frontend Apps</h1>
                <p>
                    These are simple websites that contain fixed content and do not need a server to run. These are typically one-page applications
                    used for super simple presentation of data. <i>Fun fact; This website was created using mkts&apos; static frontend feature</i>
                </p>

                <h3>Directory Structure</h3>
                <p className="mb-5">The table below walks you through the directory structure of a static frontend application.</p>

                <FileTree>
                    {setDetails => (
                        <TreeFolder label="Your app">
                            <TreeFolder label="src" onClick={() => setDetails("src/", fileDescriptions[0])}>
                                <TreeFile label="index.tsx" onClick={() => setDetails("src/index.tsx", fileDescriptions[1])} />
                                <TreeFile label="app.tsx" onClick={() => setDetails("src/app.tsx", fileDescriptions[2])} />
                                <TreeFile label="app.scss" onClick={() => setDetails("src/app.scss", fileDescriptions[3])} />
                            </TreeFolder>

                            <TreeFolder label="dist" onClick={() => setDetails("dist/", fileDescriptions[4])}>
                                <TreeFile label="bundle.js" onClick={() => setDetails("dist/bundle.js", fileDescriptions[5])} />
                                <TreeFile label="index.html" onClick={() => setDetails("dist/index.html", fileDescriptions[6])} />
                            </TreeFolder>

                            <TreeFile label=".babelrc.js" onClick={() => setDetails(".babelrc.js", fileDescriptions[7])} />
                            <TreeFile label=".eslintrc.js" onClick={() => setDetails(".eslintrc.js", fileDescriptions[8])} />
                            <TreeFile label=".gitignore.js" onClick={() => setDetails(".gitignore.js", fileDescriptions[9])} />
                            <TreeFile label=".prettier.js" onClick={() => setDetails(".prettier.js", fileDescriptions[10])} />
                            <TreeFile label="index.d.ts" onClick={() => setDetails("index.d.ts", fileDescriptions[11])} />
                            <TreeFile label="package.json" onClick={() => setDetails("package.json", fileDescriptions[12])} />
                            <TreeFile label="postcss.config.js" onClick={() => setDetails("postcss.config.js", fileDescriptions[13])} />
                            <TreeFile label="tsconfig.js" onClick={() => setDetails("tsconfig.js", fileDescriptions[14])} />
                            <TreeFile label="webpack.common.js" onClick={() => setDetails("webpack.common.js", fileDescriptions[15])} />
                        </TreeFolder>
                    )}
                </FileTree>

                <br />

                <h3>Starting Webpack in Watch Mode</h3>

                <p>
                    As mentioned previously, Webpack is a module bundler and uses the other configured tools to bundle your source code and assets
                    into one or more files that you can include in your html. By starting webpack in watch mode, it will automatically rebuild when
                    you make a change in the source code.
                </p>

                <p className="mb-5">
                    To start webpack in watch mode, you can run either <code>yarn dev</code> or <code>npm run dev</code> at the project root. This
                    starts a daemon process that you can end using <code>Ctrl+C</code>.
                </p>

                <h3>Building For Production</h3>

                <p>
                    In the previous section, webpack runs in watch mode, but it builds the files in development mode. In this mode, the files will be
                    much larger in size, since they contain a lot of assertion code. When you are ready to deploy, you need to build in production
                    mode.
                </p>

                <p className="mb-5">
                    To build in production mode, run <code>yarn build</code> or <code>npm run build</code> at the project root.
                </p>

                <h3>Previewing</h3>

                <p className="mb-5">
                    Webpack builds your source codes into a single <code>dist/bundle.js</code> file with an <code>dist/assets/</code> folder at the
                    root of your project. This file is already referenced in your <code>dist/index.html</code> file as a script tag. To preview your
                    app, open the <code>dist/index.html</code> file in your browser.
                </p>

                <h3>Upgrading Dependencies</h3>

                <p>
                    <strong>mkts</strong> installs project with the last known stable major versions of dependencies. If you&apos;d like to upgrade
                    the dependencies, you can use <code>yarn outdated</code> or <code>npm outdated</code> to find which dependencies need upgrading.
                    Then you can use <code>yarn upgrade</code> or <code>npm update</code> to run upgrade.
                </p>
            </div>
        </div>
    );
};
