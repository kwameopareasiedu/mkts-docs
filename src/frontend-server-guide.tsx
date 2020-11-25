import React from "react";
import "./frontend-server-guide.scss";
import { TreeFolder, TreeFile, FileTree } from "./utils/file-tree";

export const FrontEndServerGuide = (): any => {
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
                            <p />

                            <TreeFolder label="src" onClick={d => setDetails("src/", d)}>
                                <p>This folder should contain all your Typescript-React source code.</p>

                                <TreeFolder label="common" onClick={d => setDetails("src/common/", d)}>
                                    <p>
                                        This folder should contain all code shared by different part of your application. This prevents code
                                        duplication.
                                    </p>

                                    <TreeFolder label="stylesheets" onClick={d => setDetails("src/common/stylesheets/", d)}>
                                        <p>
                                            This folder should contain all styles shared by different part of your application. This prevents code
                                            duplication.
                                        </p>

                                        <TreeFile label="config.scss" onClick={d => setDetails("src/common/stylesheets/config.scss", d)}>
                                            <p>This file contains CSS variables used across your application.</p>
                                        </TreeFile>
                                        <TreeFile label="index.scss" onClick={d => setDetails("src/common/stylesheets/index.scss", d)}>
                                            <p>This file contains styling shared by different parts of your application.</p>
                                        </TreeFile>
                                        <TreeFile label="status.scss" onClick={d => setDetails("src/common/stylesheets/status.scss", d)}>
                                            <p>This file contains status badge styles shared by different parts of your application.</p>
                                        </TreeFile>
                                        <TreeFile label="utils.scss" onClick={d => setDetails("src/common/stylesheets/utils.scss", d)}>
                                            <p>This file contains miscellaneous styles shared by different parts of your application.</p>
                                        </TreeFile>
                                    </TreeFolder>

                                    <TreeFile label="index.ts" onClick={d => setDetails("src/common/index.ts", d)}>
                                        <p>
                                            This file is the entry point to the <code>src/common</code> folder. All common files should be exported
                                            here.
                                        </p>
                                    </TreeFile>

                                    <TreeFile label="utils.tsx" onClick={d => setDetails("src/common/utils.tsx", d)}>
                                        <p>This file should contain global variables and functions accessible by all parts of your application.</p>
                                    </TreeFile>
                                </TreeFolder>

                                <TreeFolder label="public" onClick={d => setDetails("src/public/", d)}>
                                    <p>
                                        This folder should contain source code of the public facing side of your application. It&apos;s a good idea to
                                        separate your app into logical sections. This improves loading times of your app because you&apos;ll transfer
                                        files with smaller sizes instead of one giant file.
                                    </p>

                                    <TreeFolder label="login" onClick={d => setDetails("src/public/login/", d)}>
                                        <p>
                                            This folder contains a simple preconfigured login form. Feel free to either use it or replace with your
                                            form component.
                                        </p>

                                        <TreeFile label="index.tsx" onClick={d => setDetails("src/public/login/index.tsx", d)}>
                                            <p>This file is the React source code of the login form.</p>
                                        </TreeFile>
                                        <TreeFile label="index.scss" onClick={d => setDetails("src/public/login/index.scss", d)}>
                                            <p>This file contains the stylesheet of the login form.</p>
                                        </TreeFile>
                                    </TreeFolder>

                                    <TreeFolder label="logout" onClick={d => setDetails("src/public/logout/", d)}>
                                        <p>
                                            This folder contains a simple preconfigured logout component. Feel free to either use it or replace with
                                            your component.
                                        </p>

                                        <TreeFile label="index.tsx" onClick={d => setDetails("src/public/logout/index.tsx", d)}>
                                            <p>This file is the React source code of the logout component.</p>
                                        </TreeFile>
                                    </TreeFolder>
                                </TreeFolder>
                            </TreeFolder>

                            <TreeFolder label="dist" onClick={d => setDetails("dist/", d)}>
                                <p>This folder contains the built sources and the index file for your app.</p>

                                <TreeFolder label="public" onClick={d => setDetails("dist/public/", d)}>
                                    <p>
                                        This folder represents the public facing part of your app. It&apos;s a good idea to separate your app into
                                        logical sections. This improves loading times of your app because you&apos;ll transfer files with smaller
                                        sizes instead of one giant file.
                                    </p>

                                    <TreeFile label="index.ejs" onClick={d => setDetails("dist/public/index.ejs", d)}>
                                        <p>This is the default entry page to the public facing part of your application when it is loaded.</p>
                                    </TreeFile>

                                    <TreeFile label="bundle.js" onClick={d => setDetails("dist/public/bundle.js", d)}>
                                        <p>This file is the built source file, created by the bundler tool. This file is auto-generated.</p>
                                    </TreeFile>
                                </TreeFolder>

                                <TreeFolder label="lib" onClick={d => setDetails("dist/lib/", d)}>
                                    <p>
                                        This folder contains compiled shared code used by all parts of your application. This folder is
                                        auto-generated.
                                    </p>

                                    <TreeFile label="lib.json" onClick={d => setDetails("dist/lib/lib.json", d)}>
                                        <p>
                                            This file is a map of the compiled libraries in <code>dist/lib/lib.dll.js</code>. This file is
                                            auto-generated.
                                        </p>
                                    </TreeFile>

                                    <TreeFile label="lib.dll.js" onClick={d => setDetails("dist/lib/lib.dll.js", d)}>
                                        <p>
                                            This file contains the actual compiled shared code. You should include this as a{" "}
                                            <code>&lt;script&gt;</code> in the <code>index.ejs</code> file of each section of the app. This file is
                                            auto-generated.
                                        </p>
                                    </TreeFile>
                                </TreeFolder>
                            </TreeFolder>

                            <TreeFile label=".babelrc.js" onClick={d => setDetails(".babelrc.js", d)}>
                                <p>
                                    Contains configurations for the{" "}
                                    <a href="https://babeljs.io/" target="_blank" rel="noreferrer noopeer">
                                        Babel
                                    </a>{" "}
                                    transpiler. Babel is a tool that transpiles (converts) your ES6 Typescript-React source into ES5 which all
                                    browsers can execute. <i>Normally, you’ll never have to edit this file</i>.
                                </p>
                            </TreeFile>

                            <TreeFile label=".eslintrc.js" onClick={d => setDetails(".eslintrc.js", d)}>
                                <p>
                                    Contains configurations for the{" "}
                                    <a href="https://eslint.org/" target="_blank" rel="noreferrer noopeer">
                                        ESlint
                                    </a>{" "}
                                    linter. ESlint is a tool that works in conjunction with your IDE (Webstorm, VSCode, Atom, etc.) to highlight and
                                    reporting issues with ECMAScript compatible languages (i.e. Javascript, Typescript).{" "}
                                    <i>Normally, you’ll never have to edit this file</i>.
                                </p>
                            </TreeFile>

                            <TreeFile label=".gitignore.js" onClick={d => setDetails(".gitignore.js", d)}>
                                <p>Contains a list of paths to be ignored by the Git versioning tool</p>
                            </TreeFile>

                            <TreeFile label=".prettier.js" onClick={d => setDetails(".prettier.js", d)}>
                                <p>
                                    Contains configuration for the{" "}
                                    <a href="https://prettier.io/" target="_blank" rel="noreferrer noopeer">
                                        Prettier
                                    </a>{" "}
                                    formatter. Prettier is a tool that reformats your code according to specified rules. You can configure to break
                                    lines at specified widths, force semi colons, force double quoted strings and lots more.
                                </p>
                            </TreeFile>

                            <TreeFile label="index.d.ts" onClick={d => setDetails("index.d.ts", d)}>
                                <p>
                                    This is a typescript declarations file. This is used to declare global types for variables and functions that do
                                    not have types. Not declaring a type for an object may cause the Typescript compiler to throw type errors.
                                </p>
                            </TreeFile>

                            <TreeFile label="nodemon.json" onClick={d => setDetails("nodemon.json", d)}>
                                <p>
                                    Contains configuration for the{" "}
                                    <a href="https://nodemon.io/" target="_blank" rel="noreferrer noopeer">
                                        Nodemon
                                    </a>{" "}
                                    development server. Nodemon is a utility that will monitor for any changes in your source and automatically
                                    restart your server.
                                </p>
                            </TreeFile>

                            <TreeFile label="package.json" onClick={d => setDetails("package.json", d)}>
                                <p>
                                    Contains project and dependency information used by{" "}
                                    <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer noopeer">
                                        Yarn
                                    </a>{" "}
                                    or{" "}
                                    <a href="http://npmjs.com/" target="_blank" rel="noreferrer noopeer">
                                        NPM
                                    </a>{" "}
                                    package managers.
                                </p>
                            </TreeFile>

                            <TreeFile label="postcss.config.js" onClick={d => setDetails("postcss.config.js", d)}>
                                <p>
                                    Contains configuration for{" "}
                                    <a href="https://postcss.org/" target="_blank" rel="noreferrer noopeer">
                                        PostCSS
                                    </a>
                                    . PostCSS adds vendor prefixes to your CSS code. An example is when you add the <code>:fullscreen</code> pseudo
                                    class, PostCSS will inject the <code>:webkit-full-screen</code> and <code>:ms-fullscreen</code> pseudo classes
                                    into the final CSS file automatically.
                                    <i>Normally, you’ll never have to edit this file</i>.
                                </p>
                            </TreeFile>

                            <TreeFile label="server.js" onClick={d => setDetails("server.js", d)}>
                                <p>
                                    This file is a simple NodeJS server script. It serves the public facing side of your application by default.
                                    Anytime you add a new section to the frontend, you must register it here with a base URL.
                                </p>
                            </TreeFile>

                            <TreeFile label="tsconfig.js" onClick={d => setDetails("tsconfig.js", d)}>
                                <p>
                                    Contains configuration for the{" "}
                                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopeer">
                                        Typescript
                                    </a>{" "}
                                    compiler. <i>Normally, you’ll never have to edit this file</i>.
                                </p>
                            </TreeFile>

                            <TreeFile label="types.ts" onClick={d => setDetails("types.ts", d)}>
                                <p>
                                    This file should contain custom Typescript declaration. This is useful if a library does not come with a typings
                                    file and you want to define its types to prevent Typescript from emitting warnings or errors.
                                </p>
                            </TreeFile>

                            <TreeFile label="webpack.common.js" onClick={d => setDetails("webpack.common.js", d)}>
                                <p>
                                    Contains configuration for the{" "}
                                    <a href="https://webpack.js.org/" target="_blank" rel="noreferrer noopeer">
                                        Webpack
                                    </a>{" "}
                                    module bundler. Webpack is a tool that uses most of the tools mentioned before, (Babel, PostCSS, ESlint,
                                    Typescript, etc) to bundle your source code into one or more JS file(s) that you can include in your HTML (
                                    <code>dist/index.html</code>).
                                </p>
                            </TreeFile>

                            <TreeFile label="webpack.lib.js" onClick={d => setDetails("webpack.lib.js", d)}>
                                <p>
                                    Not to be confused with <code>webpack.common.js</code>. This file instructs Webpack to compile heavy libraries of
                                    your application into <code>dist/lib/</code> <strong>once</strong>. This speeds up compilation time because those
                                    heavy libraries are not compiled everytime you make a change in your source code.
                                </p>
                            </TreeFile>
                        </TreeFolder>
                    )}
                </FileTree>

                <br />

                <div className="row">
                    <div className="col-6">
                        <h3>Start development mode</h3>

                        <p>
                            Development mode does two things when triggered:
                            <ol>
                                <li>
                                    Instructs webpack to compile heavy libraries (React, ReactDOM, etc) to the <code>dist/lib/</code> folder
                                </li>
                                <li>
                                    Starts the development server, <code>server.js</code>
                                </li>
                                <li>Starts up webpack in watch mode to rebuild your source code anytime there is a change</li>
                            </ol>
                        </p>

                        <p className="mb-5">
                            To start the development, run <code>yarn dev</code> or <code>npm start dev</code>.
                        </p>
                    </div>

                    <div className="col-6">
                        <h3>Building for production</h3>

                        <p>
                            In the previous section, webpack runs in watch mode, but it builds the files in <strong>development</strong> mode. In this
                            mode, the files will be much larger in size, since they contain a lot of assertion code. When you are ready to deploy, you
                            need to build in production mode.
                        </p>

                        <p className="mb-5">
                            To build in production mode, run <code>yarn build</code> or <code>npm run build</code> at the project root.
                        </p>
                    </div>

                    <div className="col-6">
                        <h3>Previewing</h3>

                        <p className="mb-5">
                            To view our application, open your browser and enter <code>http://127.0.0.1:3000</code> in the address bar. Since we are
                            running a server, the request will be processed and the webpage will be rendered.
                        </p>
                    </div>

                    <div className="col-6">
                        <h3>Upgrading dependencies</h3>

                        <p>
                            <strong>mkts</strong> installs project with the last known stable major versions of dependencies. If you&apos;d like to
                            upgrade the dependencies, you can use <code>yarn outdated</code> or <code>npm outdated</code> to find which dependencies
                            need upgrading. Then you can use <code>yarn upgrade</code> or <code>npm update</code> to run upgrade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
