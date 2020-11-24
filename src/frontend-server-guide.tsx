import React from "react";
import "./frontend-server-guide.scss";
import { DirectoryFolder, DirectoryFile, DirectoryViewer } from "./utils/directory-viewer";

export const FrontEndServerGuide = (): any => {
    return (
        <div id="frontend-server-guide">
            <div className="container">
                <h1 className="mb-4">Frontend Server Apps</h1>
                <p className="mb-5">
                    Frontend server apps give you all the features of static apps with the addition of a minimalist NodeJS server to serve your site.
                    This option is preferred if your app responds to changes in the window URL
                </p>

                <DirectoryViewer>
                    {() => (
                        <DirectoryFolder label="Your app">
                            <DirectoryFolder label="src">
                                <DirectoryFile label="index.tsx" />
                                <DirectoryFile label="app.tsx" />
                                <DirectoryFile label="app.scss" />
                            </DirectoryFolder>

                            <DirectoryFolder label="dist">
                                <DirectoryFile label="bundle.js" />
                                <DirectoryFile label="index.html" />
                            </DirectoryFolder>

                            <DirectoryFile label=".babelrc.js" />
                            <DirectoryFile label=".eslintrc.js" />
                            <DirectoryFile label=".gitignore.js" />
                            <DirectoryFile label=".prettier.js" />
                            <DirectoryFile label="index.d.ts" />
                            <DirectoryFile label="package.json" />
                            <DirectoryFile label="postcss.config.js" />
                            <DirectoryFile label="tsconfig.js" />
                            <DirectoryFile label="webpack.common.js" />
                        </DirectoryFolder>
                    )}
                </DirectoryViewer>

                {/*<h3>Directory Structure</h3>*/}
                {/*<p>The table below walks you through the directory structure of a static frontend application.</p>*/}

                {/*<table className="table table-bordered table-striped table-lg">*/}
                {/*    <thead>*/}
                {/*        <tr>*/}
                {/*            <th>File/Directory</th>*/}
                {/*            <th>Description</th>*/}
                {/*        </tr>*/}
                {/*    </thead>*/}

                {/*    <tbody>*/}
                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>src/</code>*/}
                {/*            </td>*/}
                {/*            <td>This folder should contain all your Typescript-React source code. By default, it contains three (3) files</td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>src/index.tsx</code>*/}
                {/*            </td>*/}
                {/*            <td> This file is the entry point to your app. During bundling, this is the file the bundler starts with.</td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>src/app.tsx</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                This file is start of your actual app. The boilerplate code is very minimal here. Hence, you are free to architect*/}
                {/*                your app however you want.*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>src/app.scss</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                This is the app-level stylesheet of your application. This file should ideally contain styles that are applied across*/}
                {/*                the application. Page specific styles should be stored in stylesheets of those pages.*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>dist/</code>*/}
                {/*            </td>*/}
                {/*            <td>This folder contains the built sources and the index file for your app</td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>dist/index.html</code>*/}
                {/*            </td>*/}
                {/*            <td>This is the default entry page to your application when it is loaded</td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>dist/bundle.js</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                This file is the built source file, created by the bundler tool. This file exists when you start up the bundler*/}
                {/*                command*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>.babelrc.js</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                Contains configurations for the{" "}*/}
                {/*                <a href="https://babeljs.io/" target="_blank" rel="noreferrer noopeer">*/}
                {/*                    Babel*/}
                {/*                </a>{" "}*/}
                {/*                transpiler. Babel is a tool that transpiles (converts) your ES6 Typescript-React source into ES5 which all browsers*/}
                {/*                can execute. <i>Normally, you’ll never have to edit this file</i>.*/}
                {/*            </td>*/}
                {/*        </tr>*/}

                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>.eslintrc</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                Contains configurations for the{" "}*/}
                {/*                <a href="https://eslint.org/" target="_blank" rel="noreferrer noopeer">*/}
                {/*                    ESlint*/}
                {/*                </a>{" "}*/}
                {/*                linter. ESlint is a tool that works in conjunction with your IDE (Webstorm, VSCode, Atom, etc.) to highlight and*/}
                {/*                reporting issues with ECMAScript compatible languages (i.e. Javascript, Typescript).{" "}*/}
                {/*                <i>Normally, you’ll never have to edit this file</i>.*/}
                {/*            </td>*/}
                {/*        </tr>*/}

                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>.gitignore</code>*/}
                {/*            </td>*/}
                {/*            <td>Contains a list of paths to be ignored by the Git versioning tool</td>*/}
                {/*        </tr>*/}

                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>.prettierrc</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                Contains configuration for the{" "}*/}
                {/*                <a href="https://prettier.io/" target="_blank" rel="noreferrer noopeer">*/}
                {/*                    Prettier*/}
                {/*                </a>{" "}*/}
                {/*                formatter. Prettier is a tool that reformats your code according to specified rules. You can configure to break lines*/}
                {/*                at specified widths, force semi colons, force double quoted strings and lots more.*/}
                {/*            </td>*/}
                {/*        </tr>*/}

                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>index.d.ts</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                This is a typescript declarations file. This is used to declare global types for variables and functions that do not*/}
                {/*                have types. Not declaring a type for an object may cause the Typescript compiler to throw type errors.*/}
                {/*            </td>*/}
                {/*        </tr>*/}

                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>package.json</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                Contains project and dependency information used by{" "}*/}
                {/*                <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer noopeer">*/}
                {/*                    Yarn*/}
                {/*                </a>{" "}*/}
                {/*                or{" "}*/}
                {/*                <a href="http://npmjs.com/" target="_blank" rel="noreferrer noopeer">*/}
                {/*                    NPM*/}
                {/*                </a>{" "}*/}
                {/*                package managers.*/}
                {/*            </td>*/}
                {/*        </tr>*/}

                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>postcss.config.js</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                Contains configuration for{" "}*/}
                {/*                <a href="https://postcss.org/" target="_blank" rel="noreferrer noopeer">*/}
                {/*                    PostCSS*/}
                {/*                </a>*/}
                {/*                . PostCSS adds vendor prefixes to your CSS code. An example is when you add the <code>:fullscreen</code> pseudo class,*/}
                {/*                PostCSS will inject the <code>:webkit-full-screen</code> and <code>:ms-fullscreen</code> pseudo classes into the final*/}
                {/*                CSS file automatically.*/}
                {/*                <i>Normally, you’ll never have to edit this file</i>.*/}
                {/*            </td>*/}
                {/*        </tr>*/}

                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>tsconfig.json</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                Contains configuration for the{" "}*/}
                {/*                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopeer">*/}
                {/*                    Typescript*/}
                {/*                </a>{" "}*/}
                {/*                compiler. <i>Normally, you’ll never have to edit this file</i>.*/}
                {/*            </td>*/}
                {/*        </tr>*/}

                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <code>webpack.common.js</code>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                Contains configuration for the{" "}*/}
                {/*                <a href="https://webpack.js.org/" target="_blank" rel="noreferrer noopeer">*/}
                {/*                    Webpack*/}
                {/*                </a>{" "}*/}
                {/*                module bundler. Webpack is a tool that uses most of the tools mentioned before, (Babel, PostCSS, ESlint, Typescript,*/}
                {/*                etc) to bundle your source code into one or more JS file(s) that you can include in your HTML (*/}
                {/*                <code>dist/index.html</code>).*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*    </tbody>*/}
                {/*</table>*/}

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
