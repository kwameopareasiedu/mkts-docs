import React from "react";
import { TreeFile, TreeFolder, FileTree } from "../file-tree";
import "./api-server-guide.scss";

export const ApiServerGuide = (): any => {
    return (
        <div id="api-server-guide">
            <div className="container">
                <h1 className="mb-4">API Server Apps</h1>
                <p>
                    These are non-user facing applications that expose data through custom REST APIs. It&apos;s role is to sit and wait for requests
                    which it then responds to. API servers can be configured to work with databases, internal/external media storage, email transport
                    services, other API servers, etc.
                </p>

                <p>
                    An API server app structure is based on the{" "}
                    <a href="https://expressjs.com/" target="_blank" rel="noreferrer noopeer">
                        ExpressJS
                    </a>{" "}
                    framework, thus you should be familiar with it.
                </p>

                <h3>Directory Structure</h3>
                <p className="mb-5">The table below walks you through the directory structure of an API server application.</p>

                <FileTree>
                    {setDetails => (
                        <TreeFolder label="Your app">
                            <p />

                            <TreeFolder label="src" onClick={d => setDetails("src/", d)}>
                                <p>
                                    This folder should contain all your <strong>Typescript ES6</strong> source code.
                                </p>

                                <TreeFolder label="models" onClick={d => setDetails("src/models/", d)}>
                                    <p>
                                        This folder should contain all your application model logic. The models are based on{" "}
                                        <a href="https://vincit.github.io/objection.js/" target="_blank" rel="noreferrer noopeer">
                                            Objection
                                        </a>{" "}
                                        Object Relational Mapper (ORM) and{" "}
                                        <a href="https://knexjs.org/" target="_blank" rel="noreferrer noopeer">
                                            Knex
                                        </a>{" "}
                                        SQL builder to interface with your database.
                                    </p>

                                    <TreeFile label="config.ts" onClick={d => setDetails("src/models/config.ts", d)}>
                                        <p>
                                            This file contains the configuration for the{" "}
                                            <a href="https://vincit.github.io/objection.js/" target="_blank" rel="noreferrer noopeer">
                                                Objection
                                            </a>{" "}
                                            ORM.
                                        </p>
                                    </TreeFile>

                                    <TreeFile label="root.ts" onClick={d => setDetails("src/models/root.ts", d)}>
                                        <p>
                                            This is the root model from which all other models should inherit. It implements functions that perform
                                            actions common to all models. <br />
                                            These include actions to perform before inserting into the database, and actions to perform after fetching
                                            from the database
                                        </p>
                                    </TreeFile>

                                    <TreeFile label="user.ts" onClick={d => setDetails("src/models/user.ts", d)}>
                                        <p>
                                            This is a user model. It demonstrate how to create models in the application You can delete this if you
                                            don&apos;t need it
                                        </p>
                                    </TreeFile>
                                </TreeFolder>

                                <TreeFolder label="routes" onClick={d => setDetails("src/routes/", d)}>
                                    <p>This folder should contain all route handlers supported by your application</p>

                                    <TreeFile label="index.ts" onClick={d => setDetails("src/routes/index.ts", d)}>
                                        <p>
                                            This file exports a <code>handleRoutesOf(app)</code> function with some essential boilerplate code. This
                                            is the file in which you register all other route handler in your application.
                                        </p>
                                    </TreeFile>
                                </TreeFolder>

                                <TreeFolder label="services" onClick={d => setDetails("src/services/", d)}>
                                    <p>
                                        Services are resources used within your app. These include <strong>databases</strong>,{" "}
                                        <strong>mail sending</strong>, <strong>external storage</strong>, etc. The idea here is to achieve a layered
                                        architecture with one-way dependence (I.e. top layers depend on bottom layers but NOT vice-versa). <br />
                                        Services also serve as interfaces for the rest of the application. Because your application uses the functions
                                        provided by the service&apos;s API, it&apos;s implementation can be changed without affecting the rest of your
                                        application. <br />
                                        Routes therefore depend on services which in turn depend on libraries.
                                    </p>

                                    <TreeFolder label="storage" onClick={d => setDetails("src/services/storage/", d)}>
                                        <p>
                                            This folder contains files to interface with an{" "}
                                            <a href="https://aws.amazon.com/s3/" target="_blank" rel="noreferrer noopeer">
                                                AWS S3
                                            </a>{" "}
                                            compatible remote file service, to allow you store files in your application.
                                        </p>

                                        <TreeFile label="config.ts" onClick={d => setDetails("src/services/storage/config.ts", d)}>
                                            <p>This file contains the configuration for the AWS S3 compatible remote storage service.</p>
                                        </TreeFile>

                                        <TreeFile label="basic.ts" onClick={d => setDetails("src/services/storage/basic.ts", d)}>
                                            <p>
                                                This file contains basic GET and DELETE functions to retrieve and delete files from/on the remote
                                                storage service.
                                            </p>
                                        </TreeFile>

                                        <TreeFile label="index.ts" onClick={d => setDetails("src/services/storage/index.ts", d)}>
                                            <p>
                                                This file is the index file for the storage service. Additional files created in the storage should be
                                                exported from here.
                                            </p>
                                        </TreeFile>
                                    </TreeFolder>
                                </TreeFolder>

                                <TreeFile label="app.ts" onClick={d => setDetails("src/app.ts", d)}>
                                    <p>This file is the entry point for the Typescript compiler and your app.</p>
                                </TreeFile>
                                <TreeFile label="knexfile.js" onClick={d => setDetails("src/knexfile.js", d)}>
                                    <p>
                                        This file contains the configuration for the{" "}
                                        <a href="https://knexjs.org/" target="_blank" rel="noreferrer noopeer">
                                            Knex
                                        </a>{" "}
                                        SQL query builder.
                                    </p>
                                </TreeFile>
                                <TreeFile label="utils.ts" onClick={d => setDetails("src/utils.ts", d)}>
                                    <p>This file should contain global variables and functions accessible by all parts of your application.</p>
                                </TreeFile>
                            </TreeFolder>

                            <TreeFolder label="dist" onClick={d => setDetails("dist/", d)}>
                                <p>
                                    This folder contains the built sources and the index file for your app. This is auto-generated when the compiler
                                    is invoked. The directory structure will be the same as that of <code>src/</code>, with one difference. The files
                                    here are <strong>.js (ES5)</strong> instead of <strong>.ts</strong>. This allows NodeJS to run them. <br />
                                    <strong>
                                        Your app is run from this folder, not <code>src/</code>
                                    </strong>
                                </p>
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

                            <TreeFile label="knexfile.js" onClick={d => setDetails("knexfile.js", d)}>
                                <p>
                                    Not to be confused with <code>src/knexfile.js</code>, which contains configuration for Knex SQL query builder.
                                    Knex is a command line tool and requires it&apos;s configuration to be a the root of the project. <br />
                                    This file simply requires <code>src/knexfile.js</code>.
                                </p>
                            </TreeFile>

                            <TreeFile label="nodemon.json" onClick={d => setDetails("nodemon.json", d)}>
                                <p>
                                    Contains configuration for the{" "}
                                    <a href="https://nodemon.io/" target="_blank" rel="noreferrer noopeer">
                                        Nodemon
                                    </a>{" "}
                                    development server. Nodemon is a utility that will monitor for any changes in your source and automatically
                                    restart your server. Environment variables are also exported from here. <br />
                                    <strong>DO NOT COMMIT THIS FILE TO YOUR VCS (Git, Mercurial, etc.)</strong>
                                </p>
                            </TreeFile>

                            <TreeFile label="nodemon-template.json" onClick={d => setDetails("nodemon-template.json", d)}>
                                <p>
                                    Not to be confused with <code>nodemon.json</code>. This file is a template for <code>nodemon.json</code> which you
                                    can commit. It contains the same keys but with no values, making it safe to commit.
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

                            <TreeFile label="tsconfig.js" onClick={d => setDetails("tsconfig.js", d)}>
                                <p>
                                    Contains configuration for the{" "}
                                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopeer">
                                        Typescript
                                    </a>{" "}
                                    compiler. <i>Normally, you’ll never have to edit this file</i>.
                                </p>
                            </TreeFile>
                        </TreeFolder>
                    )}
                </FileTree>

                <br />

                <div className="row">
                    <div className="col-6">
                        <h3>Starting development mode</h3>

                        <p>
                            Starting out development mode requires running two (2) commands; One to start compilation of <strong>.ts</strong> files in{" "}
                            <code>src/</code> to <strong>.js</strong> files in <code>dist/</code>, and another to start the development server. <br />
                            <ol>
                                <li>
                                    In one terminal run <code>yarn watch</code> or <code>npm run watch</code> to start the compilation.
                                </li>
                                <li>
                                    After the compilation has started, open another terminal and run <code>yarn dev</code> or <code>npm run dev</code>{" "}
                                    to start the development server.
                                </li>
                            </ol>
                        </p>

                        <p className="mb-5">
                            <strong>
                                The server can be accessed at <code>http://127.0.0.1:3000</code>
                            </strong>
                            . You can change the port number in the environment variables in <code>nodemon.json</code>.
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
