// {
// "alert()": {
// "scope": "javascript,typescript",
// "prefix": "co",
// "body": [
// "alert(`${${1:Variable_name}}`);"
// ],
// "description": "alert()"
// }

// }

{
"define module": {
"prefix": "define",
"body": [
"define([",
"\t'require',",
"\t'${1:dependency}'",
"], function(require, ${2:factory}) {",
      "\t'use strict'",
      "\t$0",
      "})"
    ],
    "description": "define module"
  },
  "alert()": {
    "scope": "javascript,typescript",
    "prefix": "co",
    "body": ["alert(`${${1:Variable_name}}`);"],
    "description": "alert()"
  },
  "For Loop": {
    "prefix": "for",
    "body": [
      "for (let ${1:index} = 0; ${1:index} < ${2:array}.length; ${1:index}++) {",
      "\tconst ${3:element} = ${2:array}[${1:index}]",
"\t$0",
      "}"
    ],
    "description": "For Loop"
  },
  "For-Each Loop": {
    "prefix": "foreach",
    "body": ["${1:array}.forEach(${2:element} => {", "\t$0", "})"],
    "description": "For-Each Loop"
  },
  "For-In Loop": {
    "prefix": "forin",
    "body": [
      "for (const ${1:key} in ${2:object}) {",
      "\tif (${2:object}.hasOwnProperty(${1:key})) {",
      "\t\tconst ${3:element} = ${2:object}[${1:key}]",
"\t\t$0",
      "\t}",
      "}"
    ],
    "description": "For-In Loop"
  },
  "For-Of Loop": {
    "prefix": "forof",
    "body": ["for (const ${1:iterator} of ${2:object}) {", "\t$0", "}"],
    "description": "For-Of Loop"
  },
  "Function Statement": {
    "prefix": "function",
    "body": ["function ${1:name}(${2:params}) {", "\t$0", "}"],
    "description": "Function Statement"
  },
  "If Statement": {
    "prefix": "if",
    "body": ["if (${1:condition}) {", "\t$0", "}"],
    "description": "If Statement"
  },
  "If-Else Statement": {
    "prefix": "ifelse",
    "body": ["if (${1:condition}) {", "\t$0", "} else {", "\t", "}"],
    "description": "If-Else Statement"
  },
  "New Statement": {
    "prefix": "new",
    "body": ["const ${1:name} = new ${2:type}(${3:arguments})$0"],
    "description": "New Statement"
  },
  "Switch Statement": {
    "prefix": "switch",
    "body": [
      "switch (${1:key}) {",
"\tcase ${2:value}:",
      "\t\t$0",
      "\t\tbreak",
      "",
      "\tdefault:",
      "\t\tbreak",
      "}"
    ],
    "description": "Switch Statement"
  },
  "While Statement": {
    "prefix": "while",
    "body": ["while (${1:condition}) {", "\t$0", "}"],
    "description": "While Statement"
  },
  "Do-While Statement": {
    "prefix": "dowhile",
    "body": ["do {", "\t$0", "} while (${1:condition})"],
"description": "Do-While Statement"
},
"Try-Catch Statement": {
"prefix": "trycatch",
"body": ["try {", "\t$0", "} catch (${1:error}) {", "\t", "}"],
"description": "Try-Catch Statement"
},
"Set Timeout Function": {
"prefix": "settimeout",
"body": ["setTimeout(() => {", "\t$0", "}, ${1:timeout})"],
"description": "Set Timeout Function"
},
"Import external module.": {
"prefix": "import statement",
"body": ["import { $0 } from \"${1:module}\""],
"description": "Import external module."
},
"Region Start": {
"prefix": "#region",
"body": ["//#region $0"],
"description": "Folding Region Start"
},
"Region End": {
"prefix": "#endregion",
"body": ["//#endregion"],
"description": "Folding Region End"
},
"Log to the console": {
"prefix": "log",
"body": ["console.log($0)"],
"description": "Log to the console"
},
"Log warning to console": {
"prefix": "warn",
"body": ["console.warn($0)"],
"description": "Log warning to the console"
},
"Log error to console": {
"prefix": "error",
"body": ["console.error($0)"],
"description": "Log error to the console"
},
"databaseSchema": {
"prefix": "db",
"body": [
"import Sequelize from 'sequelize';",
"import mongoose from 'mongoose';",
"",
"// import database configuration",
"//import configDatabase from '../config/database';",
"",
"// import all models sequelize",
"//import User from '../app/models/User';",
"",
"// Add models to array",
"const models = [];",
"",
"class ${1:${TM*FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" constructor() {",
" this.init();",
" this.mongo();",
" }",
"",
" init() {",
" //this.connection = new Sequelize(configDatabase);",
" //models.map(model => model.init(this.connection));",
" }",
"",
" mongo() {",
" this.mongoConnection = mongoose.connect(",
" 'mongodb://localhost:27017/database',",
" {",
" useNewUrlParser: true,",
" useFindAndModify: true,",
" }",
" );",
" }",
"}",
"",
"export default new ${1:${TM*FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create class connection database"
},
"serverApp": {
"prefix": "app",
"body": [
"import express from 'express';",
"",
"//import routes from './routes';",
"",
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" constructor() {",
" this.server = express();",
" this.middlewares();",
" this.routes();",
" }",
"",
" middlewares() {",
" this.server.use(express.json());",
" }",
"",
" routes() {",
" //this.server.use(routes);",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}().server;",
""
],
"description": "Create app express"
},
"serverRoutes": {
"prefix": "routes",
"body": [
"import { Router } from 'express';",
"",
"// import all controllers",
"// import SessionController from './app/controllers/SessionController';",
"",
"const routes = new Router();",
"",
"// Add routes",
"// routes.get('/', SessionController.store);",
"// routes.post('/', SessionController.store);",
"// routes.put('/', SessionController.store);",
"// routes.delete('/', SessionController.store);",
"",
"module.exports = routes;",
""
],
"description": "Create routes express"
},
"schemaMongoose": {
"prefix": "sch",
"body": [
"import mongoose from 'mongoose';",
"",
"const ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}Schema = mongoose.Schema(",
" {",
" content: {},",
" },",
" {",
" timestamps: true,",
" }",
");",
"",
"export default mongoose.model('${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}', ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}Schema);",
""
],
"description": "Create schema mongoose"
},
"modelSequelize": {
"prefix": "mod",
"body": [
"import { Model } from 'sequelize';",
"",
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} extends Model {",
" static init(sequelize) {",
" super.init(",
" {}, // attributes",
" {",
" sequelize,",
" }",
" );",
"",
" return this;",
" }",
"}",
"",
"export default ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}};",
""
],
"description": "Create model sequelize"
},
"serverMiddleware": {
"prefix": "mid",
"body": ["export default async (req, res, next) => {", "", "};"],
"description": "Create middleware"
},
"controllerFull": {
"prefix": "cfc",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async store(req, res) {",
" return res.json();",
" }",
"",
" async index(req, res) {",
" return res.json();",
" }",
"",
" async create(req, res) {",
" return res.json();",
" }",
"",
" async show(req, res) {",
" return res.json();",
" }",
"",
" async edit(req, res) {",
" return res.json();",
" }",
"",
" async update(req, res) {",
" return res.json();",
" }",
"",
" async destroy(req, res) {",
" return res.json();",
" }",
"",
" async view(req, res) {",
" return res.json();",
" }",
"",
" async grid(req, res) {",
" return res.json();",
" }",
"",
" async form(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create resource controller"
},
"controllerStore": {
"prefix": "cst",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async store(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create controller with store method"
},
"controllerIndex": {
"prefix": "cin",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async index(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create controller with index method"
},
"controllerCreate": {
"prefix": "ccr",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async create(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create controller with create method"
},
"controllerShow": {
"prefix": "csh",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async show(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create controller with show method"
},
"controllerEdit": {
"prefix": "ced",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async edit(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create controller with edit method"
},
"controllerUpdate": {
"prefix": "cup",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async update(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create controller with update method"
},
"controllerDestroy": {
"prefix": "cde",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async destroy(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create controller with destroy method"
},
"controllerView": {
"prefix": "cvi",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async view(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create controller with view method"
},
"controllerGrid": {
"prefix": "cgr",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async grid(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create controller with grid method"
},
"controllerForm": {
"prefix": "cfo",
"body": [
"class ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}} {",
" async grid(req, res) {",
" return res.json();",
" }",
"}",
"",
"export default new ${1:${TM_FILENAME_BASE/(.*)$/${1:/capitalize}/}}();",
""
],
"description": "Create controller with form method"
},
"methodStore": {
"prefix": "st",
"body": ["async store(req, res) {", " return res.json();", "}", ""],
"description": "Create store method"
},
"methodIndex": {
"prefix": "in",
"body": ["async index(req, res) {", " return res.json();", "}", ""],
"description": "Create index method"
},
"methodCreate": {
"prefix": "cr",
"body": ["async create(req, res) {", " return res.json();", "}", ""],
"description": "Method create"
},
"methodShow": {
"prefix": "sh",
"body": ["async show(req, res) {", " return res.json();", "}", ""],
"description": "Create show method"
},
"methodEdit": {
"prefix": "ed",
"body": ["async edit(req, res) {", " return res.json();", "}", ""],
"description": "Create edit method"
},
"methodUpdate": {
"prefix": "up",
"body": ["async update(req, res) {", " return res.json();", "}", ""],
"description": "Create update method"
},
"methodDestroy": {
"prefix": "dt",
"body": ["async destroy(req, res) {", " return res.json();", "}", ""],
"description": "Create destroy method"
},
"methodDelete": {
"prefix": "de",
"body": ["async delete(req, res) {", " return res.json();", "}", ""],
"description": "Create delete method"
},
"methodView": {
"prefix": "vi",
"body": ["async view(req, res) {", " return res.json();", "}", ""],
"description": "Create view method"
},
"methodGrid": {
"prefix": "gr",
"body": ["async grid(req, res) {", " return res.json();", "}", ""],
"description": "Create grid method"
},
"methodForm": {
"prefix": "fo",
"body": ["async form(req, res) {", " return res.json();", "}", ""],
"description": "Create form method"
},
"import": {
"prefix": "imp",
"body": "import ${2:moduleName} from '${1:module}';$0",
    "description": "Imports entire module statement in ES6 syntax"
  },
  "importNoModuleName": {
    "prefix": "imn",
    "body": "import '${1:module}';$0",
    "description": "Imports entire module in ES6 syntax without module name"
  },
  "importDestructing": {
    "prefix": "imd",
    "body": "import { $2 } from '${1:module}';$0",
    "description": "Imports only a portion of the module in ES6 syntax"
  },
  "importEverything": {
    "prefix": "ime",
    "body": "import * as ${2:alias} from '${1:module}';$0",
    "description": "Imports everything as alias from the module in ES6 syntax"
  },
  "importAs": {
    "prefix": "ima",
    "body": "import { ${2:originalName} as ${3:alias} } from '${1:module}';$0",
    "description": "Imports a specific portion of the module by assigning a local alias in ES6 syntax"
  },
  "require": {
    "prefix": "rqr",
    "body": "require('${1:package}');",
"description": "Require a package"
},
"requireToConst": {
"prefix": "req",
"body": "const ${1:packageName} = require('${1:package}');$0",
    "description": "Require a package to const"
  },
  "moduleExports": {
    "prefix": "mde",
    "body": "module.exports = {\n\t$0\n};\n",
    "description": "Module exports from Common JS, node syntax at ES6"
  },
  "exportNamedVariable": {
    "prefix": "env",
    "body": "export const ${1:exportVariable} = ${2:localVariable};\n",
    "description": "Export named variable in ES6 syntax"
  },
  "exportNamedFunction": {
    "prefix": "enf",
    "body": "export const ${1:functionName} = (${2:params}) => {\n\t$0\n};\n",
    "description": "Export named function in ES6 syntax"
  },
  "exportDefaultFunction": {
    "prefix": "edf",
    "body": "export default function ${1:${TM_FILENAME_BASE}}(${2:params}) {\n\t$0\n};\n",
"description": "Export default function in ES6 syntax"
},
"exportClass": {
"prefix": "ecl",
"body": "export default class ${1:className} {\n\t$0\n};\n",
"description": "Export default class in ES6 syntax"
},
"exportClassExtends": {
"prefix": "ece",
"body": "export default class ${1:className} extends ${2:baseclassName} {\n\t$0\n};\n",
"description": "Export default class which extends a base one in ES6 syntax"
},

"constructor": {
"prefix": "con",
"body": "constructor(${1:params}) {\n\t${0}\n}",
"description": "Add default constructor in a class in ES6 syntax"
},
"method": {
"prefix": "met",
"body": "${1:methodName}(${2:params}) {\n\t${0}\n}",
    "description": "Creates a method inside a class in ES6 syntax"
  },
  "propertyGet": {
    "prefix": "pge",
    "body": "get ${1:propertyName}() {\n\treturn this.${0};\n}",
"description": "Creates a getter property inside a class in ES6 syntax"
},
"propertyset": {
"prefix": "pse",
"body": "set ${1:propertyName}(${2:value}) {\n\t${0};\n}",
"description": "Creates a setter property inside a class in ES6 syntax"
},

"forEach": {
"prefix": "fre",
"body": "${1:array}.forEach(${2:currentItem} => {\n\t${0}\n});",
    "description": "Creates a forEach statement in ES6 syntax"
  },
  "forOf": {
    "prefix": "fof",
    "body": "for (const ${1:item} of ${2:object}) {\n\t${0}\n}",
"description": "Iterating over property names of iterable objects"
},
"forIn": {
"prefix": "fin",
"body": "for (const ${1:item} in ${2:object}) {\n\t${0}\n}",
"description": "Iterating over property values of iterable objects"
},
"anonymousFunction": {
"prefix": "anfn",
"body": "(${1:params}) => {\n\t${2}\n}",
"description": "Creates an anonymous function in ES6 syntax"
},
"namedFunction": {
"prefix": "nfn",
"body": "const ${1:name} = (${2:params}) => {\n\t${3}\n}",
    "description": "Creates a named function in ES6 syntax"
  },
  "destructingObject": {
    "prefix": "dob",
    "body": "const {${2:propertyName}} = ${1:objectToDestruct};",
    "description": "Creates and assigns a local variable using object destructing"
  },
  "destructingArray": {
    "prefix": "dar",
    "body": "const [${2:propertyName}] = ${1:arrayToDestruct};",
    "description": "Creates and assigns a local variable using array destructing"
  },
  "setInterval": {
    "prefix": "sti",
    "body": "setInterval(() => {\n\t${2}\n}, ${0:intervalInms});",
    "description": "Executes the given function at specified intervals in ES6 syntax"
  },
  "setTimeOut": {
    "prefix": "sto",
    "body": "setTimeout(() => {\n\t${2}\n}, ${1:delayInms});",
    "description": "Executes the given function after the specified delay in ES6 syntax"
  },
  "promise": {
    "prefix": "prom",
    "body": "return new Promise((resolve, reject) => {\n\t${1}\n});",
"description": "Creates and returns a new Promise in the standard ES6 syntax"
},
"thenCatch": {
"prefix": "thenc",
"body": ".then((${1:result}) => {\n\t${2}\n}).catch((${3:err}) => {\n\t${4}\n});",
"description": "Add the .then and .catch methods to handle promises"
},

"consoleAssert": {
"prefix": "cas",
"body": "console.assert(${1:expression}, ${2:object});",
    "description": "If the specified expression is false, the message is written to the console along with a stack trace"
  },
  "consoleClear": {
    "prefix": "ccl",
    "body": "console.clear();",
    "description": "Clears the console"
  },
  "consoleCount": {
    "prefix": "cco",
    "body": "console.count(${1:label});",
"description": "Writes the the number of times that count() has been invoked at the same line and with the same label"
},
"consoleDebug": {
"prefix": "cdb",
"body": "console.debug(${1:object});",
    "description": "Displays a message in the console. Also display a blue right arrow icon along with the logged message in Safari"
  },
  "consoleDir": {
    "prefix": "cdi",
    "body": "console.dir(${1:object});",
"description": "Prints a JavaScript representation of the specified object"
},
"consoleError": {
"prefix": "cer",
"body": "console.error(${1:object});",
    "description": "Displays a message in the console and also includes a stack trace from where the method was called"
  },
  "consoleGroup": {
    "prefix": "cgr",
    "body": "console.group('${1:label}');",
"description": "Groups and indents all following output by an additional level, until console.groupEnd() is called."
},
"consoleGroupEnd": {
"prefix": "cge",
"body": "console.groupEnd();",
"description": "Closes out the corresponding console.group()."
},
"consoleLog": {
"prefix": "clg",
"body": "console.log(${1:object});",
    "description": "Displays a message in the console"
  },
  "consoleLogObject": {
    "prefix": "clo",
    "body": "console.log('${1:object} :>> ', ${1:object});",
    "description": "Displays an object in the console with its name"
  },
  "consoleTrace": {
    "prefix": "ctr",
    "body": "console.trace(${1:object});",
"description": "Prints a stack trace from the point where the method was called"
},
"consoleWarn": {
"prefix": "cwa",
"body": "console.warn(${1:object});",
    "description": "Displays a message in the console but also displays a yellow warning icon along with the logged message"
  },
  "consoleInfo": {
    "prefix": "cin",
    "body": "console.info(${1:object});",
"description": "Displays a message in the console but also displays a blue information icon along with the logged message"
},
"consoleTable": {
"prefix": "clt",
"body": "console.table(${1:object});",
    "description": "Displays tabular data as a table."
  },
  "consoleTime": {
    "prefix": "cti",
    "body": "console.time(${1:object});",
"description": "Sets starting point for execution time measurement"
},
"consoleTimeEnd": {
"prefix": "cte",
"body": "console.timeEnd(${1:object});",
    "description": "Sets end point for execution time measurement"
  },
  "reactClassComponentWithConstructor": {
    "prefix": "rcc",
    "body": [
      "import React from 'react';",
      "import PropTypes from 'prop-types';",
      "",
      "const propTypes = {};",
      "",
      "const defaultProps = {};",
      "",
      "export default class ${1:${TM_FILENAME_BASE}} extends React.Component {",
"\tconstructor(props) {",
"\t\tsuper(props);",
"\t\tthis.state = {};",
"\t}",
"",
"\trender() {",
"\t\treturn (",
"\t\t\t<React.Fragment>",
"\t\t\t\t$0",
      "\t\t\t</React.Fragment>",
      "\t\t);",
      "\t}",
      "}",
      "",
      " ${1:${TM_FILENAME_BASE}}.propTypes = propTypes;",
" ${1:${TM_FILENAME_BASE}}.defaultProps = defaultProps;"
],
"description": "React ES6 Component with Constructor"
},

"reactClassComponent": {
"prefix": "rc",
"body": [
"import React from 'react';",
"import PropTypes from 'prop-types';",
"",
"const propTypes = {};",
"",
"const defaultProps = {};",
"",
"export default class ${1:${TM_FILENAME_BASE}} extends React.Component {",
"\trender() {",
"\t\treturn (",
"\t\t\t<React.Fragment>",
"\t\t\t\t$0",
"\t\t\t</React.Fragment>",
"\t\t);",
"\t}",
"}",
"",
" ${1:${TM_FILENAME_BASE}}.propTypes = propTypes;",
" ${1:${TM_FILENAME_BASE}}.defaultProps = defaultProps;"
],
"description": "React ES6 Component"
},

"reactFunctionalComponent": {
"prefix": "rfunc",
"body": [
"import React from 'react';",
"import PropTypes from 'prop-types';",
"",
"const propTypes = {};",
"",
"const defaultProps = {};",
"",
"export default function ${1:${TM_FILENAME_BASE}}(props) {",
"\treturn (",
"\t\t<React.Fragment>",
"\t\t\t$0",
"\t\t</React.Fragment>",
"\t);",
"}",
"",
"${1:${TM_FILENAME_BASE}}.propTypes = propTypes;",
"${1:${TM_FILENAME_BASE}}.defaultProps = defaultProps;"
],
"description": "React ES6 Functional Component"
},

"reactConstructor": {
"prefix": "rconst",
"body": [
"constructor(props) {",
"\tsuper(props);",
"\tthis.state = {",
"\t\t$1,",
"\t};",
"}"
],
"description": "React ES6 Constructor"
},

"reactBindMethod": {
"prefix": "rbm",
"body": ["this.${1:method} = this.${1:method}.bind(this);"],
"description": "React ES6 bind method to this"
},

"componentWillMount": {
"prefix": "rcwm",
"body": "\ncomponentWillMount() {\n\t$0\n}\n",
"description": "Invoked once, both on the client and server, immediately before the initial rendering occurs"
},

"componentDidMount": {
"prefix": "rcdm",
"body": "componentDidMount() {\n\t$0\n}\n",
"description": "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs."
},

"componentWillReceiveProps": {
"prefix": "rcwr",
"body": "componentWillReceiveProps(nextProps) {\n\t$0\n}\n",
"description": "Invoked when a component is receiving new props. This method is not called for the initial render."
},

"shouldComponentUpdate": {
"prefix": "rscu",
"body": "shouldComponentUpdate(nextProps, nextState) {\n\t$0\n}\n",
"description": "Invoked before rendering when new props or state are being received. "
},

"componentWillUpdate": {
"prefix": "rcwup",
"body": "componentWillUpdate(nextProps, nextState) {\n\t$0\n}\n",
"description": "Invoked immediately before rendering when new props or state are being received."
},

"componentDidUpdate": {
"prefix": "rcdup",
"body": "componentDidUpdate(prevProps, prevState) {\n\t$0\n}\n",
"description": "Invoked immediately after the component's updates are flushed to the DOM."
},

"componentWillUnmount": {
"prefix": "rcwun",
"body": "componentWillUnmount() {\n\t$0\n}\n",
"description": "Invoked immediately before a component is unmounted from the DOM."
},

"componentRender": {
"prefix": "rren",
"body": "render() {\n\treturn (\n\t\t<div>\n\t\t\t$0\n\t\t</div>\n\t);\n}",
"description": "When called, it should examine this.props and this.state and return a single child element."
},

"componentSetStateObject": {
"prefix": "rsst",
"body": "this.setState($0);",
"description": "Performs a shallow merge of nextState into current state"
},

"componentSetStateFunc": {
"prefix": "rssf",
"body": "this.setState((state, props) => { return { $0 }});\n",
"description": "Performs a shallow merge of nextState into current state"
},

"componentProps": {
"prefix": "rprops",
"body": "this.props.$0",
"description": "Access component's props"
},

"componentState": {
"prefix": "rstate",
"body": "this.state.$0",
"description": "Access component's state"
},

"propTypes": {
"prefix": "rpt",
"body": "$1.propTypes = {\n\t$2\n};",
"description": "Creates empty propTypes declaration"
},

"defaultProps": {
"prefix": "rdp",
"body": "$1.defaultProps = {\n\t$2\n};",
"description": "Creates empty defaultProps declaration"
},

"propTypeArray": {
"prefix": "pta",
"body": "PropTypes.array,",
"description": "Array prop type"
},
"propTypeArrayRequired": {
"prefix": "ptar",
"body": "PropTypes.array.isRequired,",
"description": "Array prop type required"
},
"propTypeBool": {
"prefix": "ptb",
"body": "PropTypes.bool,",
"description": "Bool prop type"
},
"propTypeBoolRequired": {
"prefix": "ptbr",
"body": "PropTypes.bool.isRequired,",
"description": "Bool prop type required"
},
"propTypeFunc": {
"prefix": "ptf",
"body": "PropTypes.func,",
"description": "Func prop type"
},
"propTypeFuncRequired": {
"prefix": "ptfr",
"body": "PropTypes.func.isRequired,",
"description": "Func prop type required"
},
"propTypeNumber": {
"prefix": "ptn",
"body": "PropTypes.number,",
"description": "Number prop type"
},
"propTypeNumberRequired": {
"prefix": "ptnr",
"body": "PropTypes.number.isRequired,",
"description": "Number prop type required"
},
"propTypeObject": {
"prefix": "pto",
"body": "PropTypes.object,",
"description": "Object prop type"
},
"propTypeObjectRequired": {
"prefix": "ptor",
"body": "PropTypes.object.isRequired,",
"description": "Object prop type required"
},
"propTypeString": {
"prefix": "pts",
"body": "PropTypes.string,",
"description": "String prop type"
},
"propTypeStringRequired": {
"prefix": "ptsr",
"body": "PropTypes.string.isRequired,",
"description": "String prop type required"
},
"propTypeNode": {
"prefix": "ptnd",
"body": "PropTypes.node,",
"description": "Anything that can be rendered: numbers, strings, elements or an array"
},
"propTypeNodeRequired": {
"prefix": "ptndr",
"body": "PropTypes.node.isRequired,",
"description": "Anything that can be rendered: numbers, strings, elements or an array required"
},
"propTypeElement": {
"prefix": "ptel",
"body": "PropTypes.element,",
"description": "React element prop type"
},
"propTypeElementRequired": {
"prefix": "ptelr",
"body": "PropTypes.element.isRequired,",
"description": "React element prop type required"
},
"propTypeInstanceOf": {
"prefix": "pti",
"body": "PropTypes.instanceOf($0),",
    "description": "Is an instance of a class prop type"
  },
  "propTypeInstanceOfRequired": {
    "prefix": "ptir",
    "body": "PropTypes.instanceOf($0).isRequired,",
    "description": "Is an instance of a class prop type required"
  },
  "propTypeEnum": {
    "prefix": "pte",
    "body": "PropTypes.oneOf(['$0']),",
    "description": "Prop type limited to specific values by treating it as an enum"
  },
  "propTypeEnumRequired": {
    "prefix": "pter",
    "body": "PropTypes.oneOf(['$0']).isRequired,",
    "description": "Prop type limited to specific values by treating it as an enum required"
  },
  "propTypeOneOfType": {
    "prefix": "ptet",
    "body": "PropTypes.oneOfType([\n\t$0\n]),",
    "description": "An object that could be one of many types"
  },
  "propTypeOneOfTypeRequired": {
    "prefix": "ptetr",
    "body": "PropTypes.oneOfType([\n\t$0\n]).isRequired,",
    "description": "An object that could be one of many types required"
  },
  "propTypeArrayOf": {
    "prefix": "ptao",
    "body": "PropTypes.arrayOf($0),",
    "description": "An array of a certain type"
  },
  "propTypeArrayOfRequired": {
    "prefix": "ptaor",
    "body": "PropTypes.arrayOf($0).isRequired,",
    "description": "An array of a certain type required"
  },
  "propTypeObjectOf": {
    "prefix": "ptoo",
    "body": "PropTypes.objectOf($0),",
    "description": "An object with property values of a certain type"
  },
  "propTypeObjectOfRequired": {
    "prefix": "ptoor",
    "body": "PropTypes.objectOf($0).isRequired,",
    "description": "An object with property values of a certain type required"
  },
  "propTypeShape": {
    "prefix": "ptsh",
    "body": "PropTypes.shape({\n\t$0\n}),",
    "description": "An object taking on a particular shape"
  },
  "propTypeShapeRequired": {
    "prefix": "ptshr",
    "body": "PropTypes.shape({\n\t$0\n}).isRequired,",
    "description": "An object taking on a particular shape required"
  },
  "import": {
    "prefix": "imp",
    "body": "import ${2:name} from '${1:module}';$0"
  },
  "importDestructing": {
    "prefix": "imd",
    "body": "import { $2 } from '${1:module}';$0"
  },
  "Import react": {
    "prefix": "imr",
    "body": ["import React from 'react';", ""]
  },
  "Import PropTypes": {
    "prefix": "ipt",
    "body": ["import PropTypes from 'prop-types';"]
  },
  "Comment Block": {
    "prefix": "com",
    "body": ["/**", " * ${1}", " */"]
  },
  "consoleLog": {
    "prefix": "clg",
    "body": "console.log($1)$0"
  },
  "reactClassComponent": {
    "prefix": "rcc",
    "body": [
      "import React, { Component } from 'react';",
      "",
      "class ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/} extends Component {",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$1",
      "\t\t\t</div>",
      "\t\t);",
      "\t}",
      "}",
      "",
      "export default ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/};",
""
]
},
"reactNativeClassComponent": {
"prefix": "rncc",
"body": [
"import React, { Component } from 'react';",
"import {View, StyleSheet} from 'react-native';",
"",
"class ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/} extends Component {",
"\trender() {",
"\t\treturn (",
"\t\t\t<View>",
"\t\t\t\t$1",
"\t\t\t</View>",
"\t\t);",
"\t}",
"}",
"",
"const styles = StyleSheet.create({})",
"",
"export default ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/};",
""
]
},
"reactClassComponentPropTypes": {
"prefix": "rccp",
"body": [
"import React, { Component } from 'react';",
"import PropTypes from 'prop-types';",
"",
"",
"class ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/} extends Component {",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$1",
"\t\t\t</div>",
"\t\t);",
"\t}",
"}",
"",
"",
"${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}.propTypes = {",
"$0",
"};",
"",
"",
"export default ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/};",
""
]
},
"reactFunction": {
"prefix": "rfc",
"body": [
"import React from 'react';",
"",
"const ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/} = () => {",
"\treturn (",
"\t\t<div>",
"\t\t\t$1",
"\t\t</div>",
"\t);",
"}",
"",
"export default ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/};",
""
]
},
"reactFunctionProps": {
"prefix": "rfcp",
"body": [
"import React from 'react';",
"import PropTypes from 'prop-types';",
"",
"",
"const ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/} = () => {",
"\treturn (",
"\t\t<div>",
"\t\t\t$1",
"\t\t</div>",
"\t);",
"};",
"",
"",
"${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}.propTypes = {",
"$0",
"};",
"",
"",
"export default ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/};",
""
]
},
"reactNativeFunction": {
"prefix": "rnfc",
"body": [
"import React from 'react';",
"import {View, StyleSheet} from 'react-native';",
"",
"const ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/} = () => {",
"\treturn (",
"\t\t<View>",
"\t\t\t$1",
"\t\t</View>",
"\t);",
"}",
"",
"const styles = StyleSheet.create({})",
"",
"export default ${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/};",
""
]
},
"classConstructor": {
"prefix": "con",
"body": ["constructor(props) {", "\tsuper(props);", "\t$1", "}", ""]
},
"emptyState": {
"prefix": "est",
"body": ["this.state = {", "\t$1", "};"],
"description": "Creates empty state object. To be used in a constructor."
},
"componentDidMount": {
"prefix": "cdm",
"body": ["componentDidMount() {", "\t$1", "}", ""],
"description": "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs."
},
"shouldComponentUpdate": {
"prefix": "scu",
"body": ["shouldComponentUpdate(nextProps, nextState) {", "\t$1", "}", ""],
"description": "Invoked before rendering when new props or state are being received. "
},
"componentDidUpdate": {
"prefix": "cdup",
"body": ["componentDidUpdate(prevProps, prevState) {", "\t$1", "}", ""],
"description": "Invoked immediately after the component's updates are flushed to the DOM."
},
"componentWillUnmount": {
"prefix": "cwun",
"body": ["componentWillUnmount() {", "\t$1", "}", ""],
"description": "Invoked immediately before a component is unmounted from the DOM."
},
"getSnapshotBeforeUpdate": {
"prefix": "gsbu",
"body": [
"getSnapshotBeforeUpdate(prevProps, prevState) {",
"\t$0",
"}",
""
],
"description": "Invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture current values"
},
"getDerivedStateFromProps": {
"prefix": "gdsfp",
"body": [
"static getDerivedStateFromProps(nextProps, prevState) {",
"\t$0",
"}",
""
],
"description": "Invoked after a component is instantiated as well as when it receives new props."
},
"componentDidCatch": {
"prefix": "cdc",
"body": ["componentDidCatch(error, info) {", "\t$0", "}", ""],
"description": "Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them."
},
"componentSetStateObject": {
"prefix": "sst",
"body": "this.setState($1)",
    "description": "Performs a shallow merge of nextState into current state"
  },
  "componentSetStateFunc": {
    "prefix": "ssf",
    "body": ["this.setState((state, props) => { return { $1 }});", ""],
    "description": "Performs a shallow merge of nextState into current state"
  },
  "componentProps": {
    "prefix": "props",
    "body": "this.props.$1",
    "description": "Access component's props"
  },
  "componentState": {
    "prefix": "state",
    "body": "this.state.$1",
    "description": "Access component's state"
  },
  "bindThis": {
    "prefix": "bnd",
    "body": "this.$1 = this.$1.bind(this);",
    "description": "Binds the this of a method. To be used inside a constructor"
  },
  "propTypeArray": {
    "prefix": "pta",
    "body": "PropTypes.array,",
    "description": "Array prop type"
  },
  "propTypeArrayRequired": {
    "prefix": "ptar",
    "body": "PropTypes.array.isRequired,",
    "description": "Array prop type required"
  },
  "propTypeObject": {
    "prefix": "pto",
    "body": "PropTypes.object,",
    "description": "Object prop type"
  },
  "propTypeObjectRequired": {
    "prefix": "ptor",
    "body": "PropTypes.object.isRequired,",
    "description": "Object prop type required"
  },
  "propTypeBool": {
    "prefix": "ptb",
    "body": "PropTypes.bool,",
    "description": "Bool prop type"
  },
  "propTypeBoolRequired": {
    "prefix": "ptbr",
    "body": "PropTypes.bool.isRequired,",
    "description": "Bool prop type required"
  },
  "propTypeFunc": {
    "prefix": "ptf",
    "body": "PropTypes.func,",
    "description": "Func prop type"
  },
  "propTypeFuncRequired": {
    "prefix": "ptfr",
    "body": "PropTypes.func.isRequired,",
    "description": "Func prop type required"
  },
  "propTypeNumber": {
    "prefix": "ptn",
    "body": "PropTypes.number,",
    "description": "Number prop type"
  },
  "propTypeNumberRequired": {
    "prefix": "ptnr",
    "body": "PropTypes.number.isRequired,",
    "description": "Number prop type required"
  },
  "propTypeString": {
    "prefix": "pts",
    "body": "PropTypes.string,",
    "description": "String prop type"
  },
  "propTypeStringRequired": {
    "prefix": "ptsr",
    "body": "PropTypes.string.isRequired,",
    "description": "String prop type required"
  },
  "propTypeNode": {
    "prefix": "ptnd",
    "body": "PropTypes.node,",
    "description": "Anything that can be rendered: numbers, strings, elements or an array"
  },
  "propTypeNodeRequired": {
    "prefix": "ptndr",
    "body": "PropTypes.node.isRequired,",
    "description": "Anything that can be rendered: numbers, strings, elements or an array required"
  },
  "propTypeElement": {
    "prefix": "ptel",
    "body": "PropTypes.element,",
    "description": "React element prop type"
  },
  "propTypeElementRequired": {
    "prefix": "ptelr",
    "body": "PropTypes.element.isRequired,",
    "description": "React element prop type required"
  },
  "propTypeInstanceOf": {
    "prefix": "pti",
    "body": "PropTypes.instanceOf($1),",
    "description": "Is an instance of a class prop type"
  },
  "propTypeInstanceOfRequired": {
    "prefix": "ptir",
    "body": "PropTypes.instanceOf($1).isRequired,",
    "description": "Is an instance of a class prop type required"
  },
  "propTypeEnum": {
    "prefix": "pte",
    "body": "PropTypes.oneOf(['$1']),",
    "description": "Prop type limited to specific values by treating it as an enum"
  },
  "propTypeEnumRequired": {
    "prefix": "pter",
    "body": "PropTypes.oneOf(['$1']).isRequired,",
    "description": "Prop type limited to specific values by treating it as an enum required"
  },
  "propTypeOneOfType": {
    "prefix": "ptet",
    "body": ["PropTypes.oneOfType([", "\t$1", "]),"],
    "description": "An object that could be one of many types"
  },
  "propTypeOneOfTypeRequired": {
    "prefix": "ptetr",
    "body": ["PropTypes.oneOfType([", "\t$1", "]).isRequired,"],
    "description": "An object that could be one of many types required"
  },
  "propTypeArrayOf": {
    "prefix": "ptao",
    "body": "PropTypes.arrayOf($1),",
    "description": "An array of a certain type"
  },
  "propTypeArrayOfRequired": {
    "prefix": "ptaor",
    "body": "PropTypes.arrayOf($1).isRequired,",
    "description": "An array of a certain type required"
  },
  "propTypeObjectOf": {
    "prefix": "ptoo",
    "body": "PropTypes.objectOf($1),",
    "description": "An object with property values of a certain type"
  },
  "propTypeObjectOfRequired": {
    "prefix": "ptoor",
    "body": "PropTypes.objectOf($1).isRequired,",
    "description": "An object with property values of a certain type required"
  },
  "propTypeShape": {
    "prefix": "ptsh",
    "body": ["PropTypes.shape({", "\t$1", "}),"],
    "description": "An object taking on a particular shape"
  },
  "propTypeShapeRequired": {
    "prefix": "ptshr",
    "body": ["PropTypes.shape({", "\t$1", "}).isRequired,"],
    "description": "An object taking on a particular shape required"
  },
  "describeBlock": {
    "prefix": "describe",
    "body": ["describe('$1', () => {", "\t$0", "});", ""],
    "description": "Testing `describe` block"
  },
  "testBlock": {
    "prefix": "test",
    "body": ["test('$1', () => {", "\t$2", "});", "$0"],
    "description": "Testing `test` block"
  },
  "itBlock": {
    "prefix": "it",
    "body": ["it('$1', () => {", "\t$2", "});", "$0"],
    "description": "Testing `it` block"
  },
  "useState": {
    "prefix": "useState",
    "body": [
      "const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState(${2:initialState});"
    ]
  },
  "useEffect": {
    "prefix": "useEffect",
    "body": [
      "useEffect(() => {",
      "\t${1:effect}",
"\treturn () => {",
"\t\t${2:cleanup}",
      "\t};",
      "}, [${3:input}]);"
]
},
"useContext": {
"prefix": "useContext",
"body": ["const ${1:context} = useContext(${2:contextValue});"]
},
/_
Content sectioning
_/

"address": {
"prefix": "address",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<address>${0}</address>"]
},

"article": {
"prefix": "article",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<article>${0}</article>"]
},

"aside": {
"prefix": "aside",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<aside>${0}</aside>"]
},

"footer": {
"prefix": "footer",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<footer>${0}</footer>"]
},

"header": {
"prefix": "header",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<header>${0}</header>"]
},

/_
h1 - h6
_/

"h1": {
"prefix": "h1",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<h1>${0}</h1>"]
},

"h2": {
"prefix": "h2",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<h2>${0}</h2>"]
},

"h3": {
"prefix": "h3",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<h3>${0}</h3>"]
},

"h4": {
"prefix": "h4",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<h4>${0}</h4>"]
},

"h5": {
"prefix": "h5",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<h5>${0}</h5>"]
},

"h6": {
"prefix": "h6",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<h6>${0}</h6>"]
},

/\*

\*/

"main": {
"prefix": "main",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<main>${0}</main>"]
},

"nav": {
"prefix": "nav",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<nav>${0}</nav>"]
},

"section": {
"prefix": "section",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<section>${0}</section>"]
},

/_
Text content
_/

"blockquote": {
"prefix": "blockquote",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<blockquote>${0}</blockquote>"]
},

"dd": {
"prefix": "dd",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<dd>${0}</dd>"]
},

"div": {
"prefix": "div",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<div>${0}</div>"]
},

"dl": {
"prefix": "dl",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<dl>${0}</dl>"]
},

"dt": {
"prefix": "dt",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<dt>${0}</dt>"]
},

"figcaption": {
"prefix": "figcaption",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<figcaption>${0}</figcaption>"]
},

"figure": {
"prefix": "figure",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<figure>${0}</figure>"]
},

"hr": {
"prefix": "hr",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<hr/>"]
},

"li": {
"prefix": "li",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<li>${0}</li>"]
},

"ol": {
"prefix": "ol",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<ol>${0}</ol>"]
},

"p": {
"prefix": "p",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<p>${0}</p>"]
},

"pre": {
"prefix": "pre",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<pre>${0}</pre>"]
},

"ul": {
"prefix": "ul",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<ul>${0}</ul>"]
},

/_
Inline text semantics
_/

"a": {
"prefix": "a",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<a href=\"${1}\">${0}</a>"]
},

"abbr": {
"prefix": "abbr",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<abbr title=\"${1}\">${0}</abbr>"]
},

"br": {
"prefix": "br",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<br/>"]
},

"cite": {
"prefix": "cite",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<cite>${0}</cite>"]
},

"code": {
"prefix": "code",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<code>${0}</code>"]
},

"em": {
"prefix": "em",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<em>${0}</em>"]
},

"mark": {
"prefix": "mark",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<mark>${0}</mark>"]
},

"small": {
"prefix": "small",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<small>${0}</small>"]
},

"span": {
"prefix": "span",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<span>${0}</span>"]
},

"strong": {
"prefix": "strong",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<strong>${0}</strong>"]
},

"time": {
"prefix": "time",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<time>${0}</time>"]
},

/_
Image and multimedia
_/

"audio": {
"prefix": "audio",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<audio src=\"${1}\">${0}</audio>"]
},

"img": {
"prefix": "img",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<img src=\"${1}\" alt=\"${2}\" />${0}"]
},

"track": {
"prefix": "track",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<track src=\"${0}\" />"]
},

"video": {
"prefix": "video",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<video src=\"${1}\">${0}</video>"]
},

/_
Demarcating edits
_/

"del": {
"prefix": "del",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<del>${0}</del>"]
},

"ins": {
"prefix": "ins",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<ins>${0}</ins>"]
},

/_
Table content
_/

"caption": {
"prefix": "caption",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<caption>${0}</caption>"]
},

"table": {
"prefix": "table",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<table>${0}</table>"]
},

"tbody": {
"prefix": "tbody",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<tbody>${0}</tbody>"]
},

"td": {
"prefix": "td",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<td>${0}</td>"]
},

"tfoot": {
"prefix": "tfoot",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<tfoot>${0}</tfoot>"]
},

"th": {
"prefix": "th",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<th>${0}</th>"]
},

"thead": {
"prefix": "thead",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<thead>${0}</thead>"]
},

"tr": {
"prefix": "tr",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<tr${1: key=\"${2}\"}>${0}</tr>"]
},

/_
Forms
_/

"button": {
"prefix": "button",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<button>${0}</button>"]
},

"datalist": {
"prefix": "datalist",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<datalist>${0}</datalist>"]
},

"fieldset": {
"prefix": "fieldset",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<fieldset>${0}</fieldset>"]
},

"form": {
"prefix": "form",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<form>${0}</form>"]
},

"input": {
"prefix": "input",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<input type=\"${1:text}\" />${0}"]
},

"label": {
"prefix": "label",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<label>${0}</label>"]
},

"legend": {
"prefix": "legend",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<legend>${0}</legend>"]
},

"optgroup": {
"prefix": "optgroup",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<optgroup>${0}</optgroup>"]
},

"option": {
"prefix": "option",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<option value=\"${1}\" key=\"${2}\">${0}</option>"]
},

"progress": {
"prefix": "progress",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<progress>${0}</progress>"]
},

"select": {
"prefix": "select",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<select>${0}</select>"]
},

"textarea": {
"prefix": "textarea",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<textarea cols=\"${1:30}\" rows=\"${2:10}\">${0}</textarea>"]
},

/_
Interactive elements
_/

"details": {
"prefix": "details",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<details>${0}</details>"]
},

"summary": {
"prefix": "summary",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["<summary>${0}</summary>"]
},

/_
React
_/

"className": {
"prefix": "className",
"scope": "javascript,javascriptreact,typescriptreact",
"body": ["className=\"${0}\""]
},
"EJS No Output": {
"prefix": "ejs",
"body": ["<% $1 %> $2"],
"description": "EJS No Output"
},
"EJS Output Value": {
"prefix": "ejsout",
"body": ["<%= $1 %> $2"],
"description": "EJS outputs no value"
},
"EJS Output Escaped": {
"prefix": "ejsesc",
"body": ["<%- $1 %> $2"],
"description": "EJS outputs value"
},
"EJS Comment": {
"prefix": "ejscom",
"body": ["<%# $1 %> $2"],
"description": "EJS comment tag with no output"
},
"EJS Literal": {
"prefix": "ejslit",
"body": ["<%% $1 %> $2"],
"description": "EJS outputs a literal '<%'"
},
"EJS Include": {
"prefix": "ejsinc",
"body": ["<% include $1 %> $2"],
"description": "EJS include statement"
},
"EJS For Loop": {
"prefix": "ejsfor",
"body": [
"<% for( let ${1:index} = 0; ${1:index} < ${2:array}.length; ${1:index}++ ) { %>",
"$3",
"<% } %>"
],
"description": "EJS For Loop"
},
"EJS ForEach": {
"prefix": "ejseach",
"body": ["<% ${1:array}.forEach(${2:element} => { %>", " $3", "<% }) %>"],
"description": "EJS ForEach Loop"
},
"EJS If Statement": {
"prefix": "ejsif",
"body": ["<% if (${1:condition}) { %>", " $2", "<% } %>"],
"description": "EJS if statement"
},
"EJS Else Statement": {
"prefix": "ejselse",
"body": ["<% } else { %>", " $1"],
"description": "EJS if statement"
},
"EJS Else If Statement": {
"prefix": "ejselif",
"body": ["<% } else if ({$1:condition}) { %>", " $2"],
"description": "EJS if statement"
},
"if helper": {
"prefix": "hif",
"body": ["{{#if ${1:cond}}}", "${0}", "{{/if}}"],
"description": "If block helper"
},
"if else helper": {
"prefix": "hifelse",
"body": ["{{#if ${1:cond}}}", "${0}", "{{else}}", "${0}", "{{/if}}"],
"description": "if else block helper"
},
"unless helper": {
"prefix": "hunless",
"body": ["{{#unless ${1:cond}}}", "${0}", "{{/unless}}"],
"description": "unless block helper"
},
"each helper": {
"prefix": "heach",
"body": ["{{#each ${1:list}}}", "${0}", "{{/each}}"],
"description": "each block helper"
},
"each else helper": {
"prefix": "heachelse",
"body": ["{{#each ${1:list}}}", "${0}", "{{else}}", "$0", "{{/each}}"],
"description": "each else block helper"
},
"with helper": {
"prefix": "hwith",
"body": ["{{#with ${property}}}", "${0}", "{{/with}}"],
"description": "each block helper"
},
"partials ": {
"prefix": "hpar",
"body": "{{> partial_name}}}",
"description": "partials in hbs"
},
"Mongoose Generate User Model": {
"prefix": "moSchema",
"body": [
"${1:const mongoose = require('mongoose'); // Erase if already required}",
"",
"// Declare the Schema of the Mongo model",
"var userSchema = new mongoose.Schema({",
" name:{",
" type:String,",
" required:true,",
" ${2:unique:true,}",
" index:true,",
" },",
" email:{",
" type:String,",
" ${3:required:true,}",
" unique:true,",
" },",
" mobile:{",
" type:${4:String},",
" ${5:required:true,}",
" unique:true,",
" },",
" password:{",
" type:String,",
" required:true,",
" },",
"});",
"$0",
"//Export the model",
"module.exports = mongoose.model('${6:User}', userSchema);"
],
"description": "Generates typical User model with 4 fields"
},
"mongoose connect": {
"prefix": "moConnect",
"body": [
"const mongoose = require(\"mongoose\");",
"",
"",
"const connectDB = async () => {",
" try {",
" const connect = await mongoose.connect(process.env.MONGO_URI, {",
"useNewUrlParser: true,",
" });",
"console.log(\"monogDB connected successfully\");",
"} catch (error) {",
" console.log(error);",
"}",
"};",
"module.exports = connectDB;"
],
"description": "connect to MongoDB"
},
"MongoDB Connect": {
"prefix": "!mdbc",
"body": [
"const mongoose = require('mongoose');",
"",
"mongoose.Promise = global.Promise;",
"",
"// Connect MongoDB at default port 27017.",
"mongoose.connect('mongodb://localhost:27017/${1:DB Name}', {",
" useNewUrlParser: true,",
" useCreateIndex: true,",
"}, (err) => {",
" if (!err) {",
" console.log('MongoDB Connection Succeeded.')",
" } else {",
" console.log('Error in DB connection: ' + err)",
" }",
"});",
"$0"
],
"description": "Generates code for MongoConnect using mongoose library in npm."
},
"MongoDB Generate User Model": {
"prefix": "!mdbsc",
"body": [
"${1:const mongoose = require('mongoose'); // Erase if already required}",
"",
"// Declare the Schema of the Mongo model",
"var userSchema = new mongoose.Schema({",
" name:{",
" type:String,",
" required:true,",
" ${2:unique:true,}",
" index:true,",
" },",
" email:{",
" type:String,",
" ${3:required:true,}",
" unique:true,",
" },",
" mobile:{",
" type:${4:String},",
" ${5:required:true,}",
" unique:true,",
" },",
" password:{",
" type:String,",
" required:true,",
" },",
"});",
"$0",
"//Export the model",
"module.exports = mongoose.model('${6:User}', userSchema);"
],
"description": "Generates typical User model with 4 fields"
},
"MongoDB create": {
"prefix": "!mdbcr",
"body": [
"var array = [{",
" ${1:field}:${2:item}",
"}, {",
" ${3:field}:${4:item}",
"}];",
"${5:Model}.create(",
      "    array",
      ").then((docs) => {",
      "    $0",
      "});"
    ],
    "description": "Generates code for create query in mongoose."
  },
  "MongoDB createCollection": {
    "prefix": "!mdbcc",
    "body": ["${1:Model}.createCollection().then((docs) => {", " $0", "});"],
    "description": "Generates code for createCollection query in mongoose."
  },
  "MongoDB insertMany": {
    "prefix": "!mdbim",
    "body": [
      "var array = [{",
      "    ${1:field}:${2:item}",
"}, {",
" ${3:field}:${4:item}",
"}];",
"${5:Model}.insertMany(",
      "    array",
      ").then((docs) => {",
      "    $0",
      "});"
    ],
    "description": "Generates code for insertMany query in mongoose."
  },
  "MongoDB populate": {
    "prefix": "!mdbp",
    "body": [
      "var o = { ${1:field}: '${2:value}'};",
"${3:Model}.populate(o, { ${4:field}: '${5:value}'}, function (err, user) {",
" $0",
      "});"
    ],
    "description": "Generates code for populate query in mongoose."
  },
  "MongoDB findOne": {
    "prefix": "!mdbfo",
    "body": [
      "${1:Model}.findOne({",
" ${2:field}: ${3:filter},",
      "}).then((doc) => {",
      "    if (!doc) {",
      "        console.log(\"${4:message}\")",
" } else{",
" $0",
      "    }",
      "});"
    ],
    "description": "Generates code for findOne query in mongoose."
  },
  "MongoDB find": {
    "prefix": "!mdbf",
    "body": [
      "${1:Model}.find({ ",
" ${2:field}: ${3:filter}",
      "}, (err, docs) => {",
      "   if(err){",
      "       console.log(`Error: ` + err)",
      "   } else{",
      "     if(docs.length === 0){",
      "         console.log(\"${4:message}\")",
" } else{",
" $0",
      "     }",
      "   }",
      "});"
    ],
    "description": "Generates code for find query in mongoose."
  },
  "MongoDB findById": {
    "prefix": "!mdbfbi",
    "body": [
      "${1:Model}.findById({ ",
" ${2:id}",
      "}, (err, doc) => {",
      "   if(err){",
      "       console.log(`Error: ` + err)",
      "   } else{",
      "     if(!doc){",
      "         console.log(\"${3:message}\")",
" } else{",
" $0",
      "     }",
      "   }",
      "});"
    ],
    "description": "Generates code for findById query in mongoose."
  },
  "MongoDB countDocuments": {
    "prefix": "!mdbcd",
    "body": [
      "${1:Model}.countDocuments({",
" ${2:type}: ${3:filter}",
      "}, (err, count) => {",
      "    if (err) {",
      "        console.log(`Error: ` + err)",
      "    else",
      "    console.log('There are %d ${4:documents}', count);",
      "    $0",
      "});"
    ],
    "description": "Generates code for countDocuments query in mongoose."
  },
  "MongoDB aggregate": {
    "prefix": "!mdba",
    "body": [
      "${1:Model}.aggregate([",
" { ${2:$group}: { _id: null, ${3:value}: { $max: '${4:$value}'}}},",
" { ${5:$project}: { _id: 0, ${6:value}: ${7:1}}",
"]).",
" then(function (res) {",
" console.log(res);",
" $0",
      "});"
    ],
    "description": "Generates code for aggregate query in mongoose."
  },
  "MongoDB deleteOne": {
    "prefix": "!mdbdo",
    "body": [
      "${1:Model}.deleteOne({ ",
" ${2:field}: '${3:filter}' ",
"}, (err) => {",
" console.log(`Error: ` + err)",
" $0",
      "});"
    ],
    "description": "Generates code for deleteOne query in mongoose."
  },
  "MongoDB deleteMany": {
    "prefix": "!mdbdm",
    "body": [
      "${1:Model}.deleteMany({ ",
" ${2:field}: '${3:filter}' ",
" ${4:field}: '{ ${5:$gte}: ${6:0}' }",
      "}, (err) => {",
      "   console.log(`Error: ` + err)",
      "   $0",
      "});"
    ],
    "description": "Generates code for deleteMany query in mongoose."
  },
  "MongoDB findOneAndDelete": {
    "prefix": "!mdbfoad",
    "body": [
      "${1:Model}.findOneAndDelete({ ",
" ${2:field}: ${3:filter}",
      "}, (err, doc) => {",
      "   if(err){",
      "       console.log(`Error: ` + err)",
      "   } else{",
      "     if(!doc){",
      "         console.log(\"${4:message}\")",
" } else{",
" $0",
      "     }",
      "   }",
      "});"
    ],
    "description": "Generates code for findOneAndDelete query in mongoose."
  },
  "MongoDB mapReduce": {
    "prefix": "!mdbmr",
    "body": [
      "var o = {};",
      "o.map = function () { ${1:emit}(this.${2:name}, ${3:value}) };",
      "o.reduce = function (${4:k}, ${5:vals}) { return ${6:vals.length} };",
      "${7:Model}.mapReduce(o, (err, doc) => {",
" if(err){",
" console.log(`Error: ` + err)",
" } else{",
" $0",
      "   }",
      "});"
    ],
    "description": "Generates code for mapReduce query in mongoose."
  },
  "MongoDB findOneAndUpdate": {
    "prefix": "!mdbfoau",
    "body": [
      "${1:Model}.findOneAndUpdate({",
" ${2:find-field}: ${3:filter},",
      "}, {",
      "    ${4:update-field}: ${5:filter},",
      "}, (err, doc) => {",
      "    if (err) {",
      "        console.log(`Error: ` + err)",
      "    } else {",
      "        $0",
      "    }",
      "});"
    ],
    "description": "Generates code for findOneAndUpdate query in mongoose."
  },
  "MongoDB updateOne": {
    "prefix": "!mdbuo",
    "body": [
      "${1:Model}.updateOne({ ",
" ${2:find-field}: ${3:filter}",
      "}, {",
      "    ${4:update-field}: ${5:filter}",
      "}",
      "(err) => {",
      "   if(err){",
      "       console.log(`Error: ` + err)",
      "   }",
      "});"
    ],
    "description": "Generates code for updateOne query in mongoose."
  },
  "MongoDB replaceOne": {
    "prefix": "!mdbro",
    "body": [
      "${1:Model}.replaceOne({ ",
" ${2:find-field}: ${3:filter}",
      "}, {",
      "    ${4:field}: ${5:value}",
      "}",
      " (err) => {",
      "   if(err){",
      "       console.log(`Error: ` + err)",
      "   }",
      "});"
    ],
    "description": "Generates code for replaceOne query in mongoose."
  },
  "MongoDB updateMany": {
    "prefix": "!mdbum",
    "body": [
      "${1:Model}.updateMany({ ",
" ${2:find-field}: ${3:filter}",
      "}, {",
      "    ${4:update-field}: ${5:filter}",
      "}",
      "(err) => {",
      "   if(err){",
      "       console.log(`Error: ` + err)",
      "   }",
      "});"
    ],
    "description": "Generates code for updateMany query in mongoose."
  },
  "MongoDB bulkWrite": {
    "prefix": "!mdbbw",
    "body": [
      "${1:Model}.bulkWrite([",
"{",
" insertOne: {",
" document: {",
" ${2:field}: '${3:value}',",
" ${4:field: '${5:value}'",
" }",
" }",
"},",
"{",
" updateOne: {",
" filter: { ${6:field}: '${7:value}' },",
" update: { ${8:field}: '${9:value}' }",
" }",
"},",
"{",
" deleteOne: {",
" {",
" filter: { ${10:field}: '${11:value}'}",
" }",
" }",
"}",
"]).then(res => {",
" console.log(res.insertedCount, res.modifiedCount, res.deletedCount);",
" $0",
      "});"
    ],
    "description": "Generates code for bulkWrite query in mongoose."
  },
  "MongoDB methods": {
    "prefix": "!mdbmethod",
    "body": [
      "${1:schema}.methods.${2:func} = function ${2}(callback){",
      "   return this.model(${3:model}).${4:find}({ ${5:type}: this.${5} }, callback);",
"}",
"$0"
    ],
    "description": "Generates code for schema.methods.function in mongoose."
  },
  "MongoDB statics": {
    "prefix": "!mdbstatic",
    "body": [
      "${1:schema}.statics.${2:func} = function ${2}(${3:param}, callback){",
" return this.${4:where}(${3}, new RegExp(${3}, 'i')).${5:exec}(callback);",
"}",
"$0"
    ],
    "description": "Generates code for schema.statics.function in mongoose."
  },
  "import": {
    "prefix": "imp",
    "body": "import ${2:moduleName} from '${1:module}'$0"
  },
  "importNoModuleName": {
    "prefix": "imn",
    "body": "import '${1:module}'$0"
  },
  "importDestructing": {
    "prefix": "imd",
    "body": "import { $2 } from '${1:module}'$0"
  },
  "importEverything": {
    "prefix": "ime",
    "body": "import * as ${2:alias} from '${1:module}'$0"
  },
  "importAs": {
    "prefix": "ima",
    "body": "import { ${2:originalName} as ${3:alias} } from '${1:module}'$0"
  },
  "exportDefault": {
    "prefix": "exp",
    "body": "export default $1$0"
  },
  "exportDestructing": {
    "prefix": "exd",
    "body": "export { $2 } from '${1:module}'$0"
  },
  "exportAs": {
    "prefix": "exa",
    "body": "export { ${2:originalName} as ${3:alias} } from '${1:module}'$0"
  },
  "exportNamedFunction": {
    "prefix": "enf",
    "body": [
      "export const ${1:functionName} = (${2:params}) => {",
"\t$0",
      "}",
      ""
    ],
    "description": "Export named function in ES7 syntax"
  },
  "exportDefaultFunction": {
    "prefix": "edf",
    "body": ["export default (${1:params}) => {", "\t$0", "}", ""],
    "description": "Export default function in ES7 syntax"
  },
  "exportDefaultNamedFunction": {
    "prefix": "ednf",
    "body": [
      "export default function ${1:functionName}(${2:params}) {",
"\t$0",
      "}",
      ""
    ],
    "description": "Export default named function in ES7 syntax"
  },
  "method": {
    "prefix": "met",
    "body": ["${1:methodName} = (${2:params}) => {", "\t${0}", "}", ""],
"description": "Creates a method inside a class in ES7 syntax"
},
"propertyGet": {
"prefix": "pge",
"body": ["get ${1:propertyName}() {", "\treturn this.${0}", "}", ""],
"description": "Creates a getter property inside a class in ES7 syntax"
},
"propertySet": {
"prefix": "pse",
"body": ["set ${1:propertyName}(${2:value}) {", "\t${0}", "}", ""],
"description": "Creates a setter property inside a class in ES7 syntax"
},
"forEach": {
"prefix": "fre",
"body": ["${1:array}.forEach(${2:currentItem} => {", "\t${0}", "})", ""],
"description": "Creates a forEach statement in ES7 syntax"
},
"forOf": {
"prefix": "fof",
"body": ["for(let ${1:item} of ${2:object}) {", "\t${0}", "}", ""],
"description": "Iterating over property names of iterable objects"
},
"forIn": {
"prefix": "fin",
"body": ["for(let ${1:item} in ${2:object}) {", "\t${0}", "}", ""],
"description": "Iterating over property values of iterable objects"
},
"anonymousFunction": {
"prefix": "anfn",
"body": ["(${1:params}) => {", "\t${2}", "}"],
"description": "Creates an anonymous function in ES7 syntax"
},
"namedFunction": {
"prefix": "nfn",
"body": ["const ${1:name} = (${2:params}) => {", "\t${3}", "}", ""],
"description": "Creates a named function in ES7 syntax"
},
"destructingObject": {
"prefix": "dob",
"body": "const {${2:propertyName}} = ${1:objectToDestruct}",
    "description": "Creates and assigns a local variable using object destructing"
  },
  "destructingArray": {
    "prefix": "dar",
    "body": "const [${2:propertyName}] = ${1:arrayToDestruct}",
    "description": "Creates and assigns a local variable using array destructing"
  },
  "setInterval": {
    "prefix": "sti",
    "body": ["setInterval(() => {", "\t${2}", "}, ${0:intervalInms})", ""],
    "description": "Executes the given function at specified intervals in ES7 syntax"
  },
  "setTimeOut": {
    "prefix": "sto",
    "body": ["setTimeout(() => {", "\t${2}", "}, ${1:delayInms})", ""],
    "description": "Executes the given function after the specified delay in ES7 syntax"
  },
  "promise": {
    "prefix": "prom",
    "body": ["return new Promise((resolve, reject) => {", "\t${1}", "})", ""],
"description": "Creates and returns a new Promise in the standard ES7 syntax"
},
"consoleAssert": {
"prefix": "cas",
"body": "console.assert(${1:expression}, ${2:object})",
    "description": "If the specified expression is false, the message is written to the console along with a stack trace"
  },
  "consoleClear": {
    "prefix": "ccl",
    "body": "console.clear()",
    "description": "Clears the console"
  },
  "consoleCount": {
    "prefix": "cco",
    "body": "console.count(${1:label})",
"description": "Writes the the number of times that count() has been invoked at the same line and with the same label"
},
"consoleDir": {
"prefix": "cdi",
"body": "console.dir(${1:object})",
    "description": "Prints a JavaScript representation of the specified object"
  },
  "consoleError": {
    "prefix": "cer",
    "body": "console.error(${1:object})",
"description": "Displays a message in the console and also includes a stack trace from where the method was called"
},
"consoleGroup": {
"prefix": "cgr",
"body": "console.group(\"${1:label}\")",
    "description": "Groups and indents all following output by an additional level, until console.groupEnd() is called."
  },
  "consoleGroupEnd": {
    "prefix": "cge",
    "body": "console.groupEnd()",
    "description": "Closes out the corresponding console.group()."
  },
  "consoleLog": {
    "prefix": "clg",
    "body": "console.log(${1:object})",
"description": "Displays a message in the console"
},
"consoleTrace": {
"prefix": "ctr",
"body": "console.trace(${1:object})",
    "description": "Prints a stack trace from the point where the method was called"
  },
  "consoleLogObject": {
    "prefix": "clo",
    "body": "console.log(`${1:object}`, ${1:object})", "description": "Logs property with name." }, "consoleLogJson": { "prefix": "clj", "body": "console.log(`${1:object}`, JSON.stringify(${1:object}, null, 2))",
"description": "Logs stringified JSON property with name."
},
"consoleTime": {
"prefix": "ctm",
"body": "console.time(`${1:object}`)",
"description": "Console time wrapper"
},
"consoleTimeEnd": {
"prefix": "cte",
"body": "console.timeEnd(`${1:object}`)",
"description": "Console time end wrapper"
},
"consoleWarn": {
"prefix": "cwa",
"body": "console.warn(${1:object})",
    "description": "Displays a message in the console but also displays a yellow warning icon along with the logged message"
  },
  "consoleInfo": {
    "prefix": "cin",
    "body": "console.info(${1:object})",
"description": "Displays a message in the console but also displays a blue information icon along with the logged message"
},
"destructProps": {
"prefix": "cp",
"body": ["const { $1 } = this.props"],
"description": "Creates and assigns a local variable using props destructing"
},
"destructState": {
"prefix": "cs",
"body": ["const { $1 } = this.state"],
"description": "Creates and assigns a local variable using state destructing"
},
"import React": {
"prefix": "imr",
"body": ["import React from 'react'", ""]
},
"import ReactDOM": {
"prefix": "imrd",
"body": ["import ReactDOM from 'react-dom'", ""]
},
"import React, { Component }": {
"prefix": "imrc",
"body": ["import React, { Component } from 'react'", ""]
},
"import React, { Component } & PropTypes": {
"prefix": "imrcp",
"body": [
"import React, { Component } from 'react'",
"import PropTypes from 'prop-types'",
""
]
},
"import React, { PureComponent }": {
"prefix": "imrpc",
"body": ["import React, { PureComponent } from 'react'", ""]
},
"import React, { PureComponent } & PropTypes": {
"prefix": "imrpcp",
"body": [
"import React, { PureComponent } from 'react'",
"import PropTypes from 'prop-types'",
""
]
},
"import React, { memo }": {
"prefix": "imrm",
"body": ["import React, { memo } from 'react'", ""]
},
"import React, { memo } & PropTypes": {
"prefix": "imrmp",
"body": [
"import React, { memo } from 'react'",
"import PropTypes from 'prop-types'",
""
]
},
"import React, {useState}": {
"prefix": "imrs",
"body": ["import React, { useState } from 'react'", ""]
},
"import React, {useEffect}": {
"prefix": "imre",
"body": ["import React, { useEffect } from 'react'", ""]
},
"import React, {useRef}": {
"prefix": "imur",
"body": ["import React, { useRef } from 'react'", ""]
},
"import React, {useState, useEffect}": {
"prefix": "imrse",
"body": ["import React, { useState, useEffect } from 'react'", ""]
},
"import PropTypes": {
"prefix": "impt",
"body": ["import PropTypes from 'prop-types'", ""]
},
"import React Router": {
"prefix": "imrr",
"body": [
"import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",
""
]
},
"import React Browser Router": {
"prefix": "imbr",
"body": ["import { BrowserRouter as Router } from 'react-router-dom'", ""]
},
"import React Browser Router - Route": {
"prefix": "imbrr",
"body": ["import { Route } from 'react-router-dom'", ""]
},
"import React Browser Router - Route Combo": {
"prefix": "imbrc",
"body": [
"import { Route, Switch, NavLink, Link } from 'react-router-dom'",
""
]
},
"import React Browser Router - Route - Routes": {
"prefix": "imbrr-v6",
"body": [
"import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'",
""
]
},
"Route - react router dom": {
"prefix": "Route",
"body": ["<Route path=\"/\" element={<${1:name} />} />"]
},
"Link - react router dom": {
"prefix": "Link",
"body": [" <Link to=\"/\">${1:name}</Link>"]
},
"react router dom": {
"prefix": "rrd-v6",
"body": [
"<BrowserRouter>",
" <Routes>",
" <Route path=\"/\" element={<Home />} />",
" <Route path=\"*\" element={<NotFound />} />",
" </Routes>",
" </BrowserRouter>"
]
},
"import React Browser Router - Switch": {
"prefix": "imbrs",
"body": ["import { Switch } from 'react-router-dom'", ""]
},
"import React Browser Router - Link": {
"prefix": "imbrl",
"body": ["import { Link } from 'react-router-dom'", ""]
},
"import React Browser Router - NavLink": {
"prefix": "imbrnl",
"body": ["import { NavLink } from 'react-router-dom'", ""]
},
"import redux statement": {
"prefix": "redux",
"body": ["import { connect } from 'react-redux'", ""]
},
"reactClassComponent": {
"prefix": "rcc",
"body": [
"import React, { Component } from 'react'",
"",
"export default class ${1:${TM_FILENAME_BASE}} extends Component {",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$0",
"\t\t\t</div>",
"\t\t)",
"\t}",
"}",
""
],
"description": "Creates a React component class with ES7 module system"
},
"reactClassExportComponent": {
"prefix": "rce",
"body": [
"import React, { Component } from 'react'",
"",
"export class ${1:${TM_FILENAME_BASE}} extends Component {",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$0",
"\t\t\t</div>",
"\t\t)",
"\t}",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
],
"description": "Creates a React component class with ES7 module system"
},
"reactFunctionalExportComponent": {
"prefix": "rfce",
"body": [
"import React from 'react'",
"",
"function ${1:${TM_FILENAME_BASE}}() {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
],
"description": "Creates a React Functional Component with ES7 module system"
},
"reactFunctionalComponent": {
"prefix": "rfc",
"body": [
"import React from 'react'",
"",
"export default function ${1:${TM_FILENAME_BASE}}() {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
""
],
"description": "Creates a React Functional Component with ES7 module system"
},
"reactFunctionalComponentWithPropTypes": {
"prefix": "rfcp",
"body": [
"import React from 'react'",
"import PropTypes from 'prop-types'",
"",
"function ${1:${TM_FILENAME_BASE}}(props) {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"${1:${TM_FILENAME_BASE}}.propTypes = {",
"",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
"",
""
],
"description": "Creates a React Functional Component with ES7 module system with PropTypes"
},
"reactArrowFunctionExportComponent": {
"prefix": "rafce",
"body": [
"import React from 'react'",
"",
"const ${1:${TM_FILENAME_BASE}} = () => {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
],
"description": "Creates a React Arrow Function Component with ES7 module system"
},
"reactArrowFunctionComponent": {
"prefix": "rafc",
"body": [
"import React from 'react'",
"",
"export const ${1:${TM_FILENAME_BASE}} = () => {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
""
],
"description": "Creates a React Arrow Function Component with ES7 module system"
},
"reactArrowFunctionComponentWithPropTypes": {
"prefix": "rafcp",
"body": [
"import React from 'react'",
"import PropTypes from 'prop-types'",
"",
"const ${1:${TM_FILENAME_BASE}} = props => {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"${1:${TM_FILENAME_BASE}}.propTypes = {",
"",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
],
"description": "Creates a React Arrow Function Component with ES7 module system with PropTypes"
},
"reactClassExportComponentWithPropTypes": {
"prefix": "rcep",
"body": [
"import React, { Component } from 'react'",
"import PropTypes from 'prop-types'",
"",
"export class ${1:${TM_FILENAME_BASE}} extends Component {",
"\tstatic propTypes = {",
"",
"\t}",
"",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$0",
"\t\t\t</div>",
"\t\t)",
"\t}",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
],
"description": "Creates a React component class with ES7 module system"
},
"reactClassPureComponent": {
"prefix": "rpc",
"body": [
"import React, { PureComponent } from 'react'",
"",
"export default class ${1:${TM_FILENAME_BASE}} extends PureComponent {",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$0",
"\t\t\t</div>",
"\t\t)",
"\t}",
"}",
""
],
"description": "Creates a React pure component class with ES7 module system"
},
"reactClassExportPureComponent": {
"prefix": "rpce",
"body": [
"import React, { PureComponent } from 'react'",
"",
"export class ${1:${TM_FILENAME_BASE}} extends PureComponent {",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$0",
"\t\t\t</div>",
"\t\t)",
"\t}",
"}",
"",
"export default ${1:$TM_FILENAME_BASE}",
""
],
"description": "Creates a React pure component class with ES7 module system export"
},
"reactClassPureComponentWithPropTypes": {
"prefix": "rpcp",
"body": [
"import React, { PureComponent } from 'react'",
"import PropTypes from 'prop-types'",
"",
"export default class ${1:${TM_FILENAME_BASE}} extends PureComponent {",
"\tstatic propTypes = {",
"",
"\t}",
"",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$0",
"\t\t\t</div>",
"\t\t)",
"\t}",
"}",
""
],
"description": "Creates a React component class with ES7 module system"
},
"reactFunctionMemoComponent": {
"prefix": "rmc",
"body": [
"import React, { memo } from 'react'",
"",
"export default memo(function ${1:${TM_FILENAME_BASE}}() {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"})",
""
],
"description": "Creates a React Memo Function Component with ES7 module system"
},
"reactFunctionMemoComponentWithPropTypes": {
"prefix": "rmcp",
"body": [
"import React, { memo } from 'react'",
"import PropTypes from 'prop-types'",
"",
"const ${1:${TM_FILENAME_BASE}} = memo(function ${1:${TM_FILENAME_BASE}}(props) {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"})",
"",
"${1:${TM_FILENAME_BASE}}.propTypes = {",
"",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
],
"description": "Creates a React Memo Function Component with ES7 module system with PropTypes"
},
"reactClassCompomentPropTypes": {
"prefix": "rccp",
"body": [
"import React, { Component } from 'react'",
"import PropTypes from 'prop-types'",
"",
"export default class ${1:${TM_FILENAME_BASE}} extends Component {",
"\tstatic propTypes = {",
"\t\t${2:prop}: ${3:PropTypes}",
"\t}",
"",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$0",
"\t\t\t</div>",
"\t\t)",
"\t}",
"}",
""
],
"description": "Creates a React component class with PropTypes and ES7 module system"
},
"reactClassCompomentRedux": {
"prefix": "rcredux",
"body": [
"import React, { Component } from 'react'",
"import { connect } from 'react-redux'",
"",
"export class ${1:${TM_FILENAME_BASE}} extends Component {",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$0",
"\t\t\t</div>",
"\t\t)",
"\t}",
"}",
"",
"const mapStateToProps = (state) => ({",
"\t",
"})",
"",
"const mapDispatchToProps = {",
"\t",
"}",
"",
"export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})",
""
],
"description": "Creates a React component class with connected redux and ES7 module system"
},
"reactClassCompomentReduxPropTypes": {
"prefix": "rcreduxp",
"body": [
"import React, { Component } from 'react'",
"import PropTypes from 'prop-types'",
"import { connect } from 'react-redux'",
"",
"export class ${1:${TM_FILENAME_BASE}} extends Component {",
"\tstatic propTypes = {",
"\t\t${2:prop}: ${3:PropTypes}",
"\t}",
"",
"\trender() {",
"\t\treturn (",
"\t\t\t<div>",
"\t\t\t\t$0",
"\t\t\t</div>",
"\t\t)",
"\t}",
"}",
"",
"const mapStateToProps = (state) => ({",
"\t",
"})",
"",
"const mapDispatchToProps = {",
"\t",
"}",
"",
"export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})",
""
],
"description": "Creates a React component class with PropTypes with connected redux and ES7 module system"
},
"reactFunctionalCompomentRedux": {
"prefix": "rfcredux",
"body": [
"import React from 'react'",
"import { connect } from 'react-redux'",
"",
"export const ${1:${TM_FILENAME_BASE}} = (props) => {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"const mapStateToProps = (state) => ({",
"\t",
"})",
"",
"const mapDispatchToProps = {",
"\t",
"}",
"",
"export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})",
""
],
"description": "Creates a React functional component with connected redux and ES7 module system"
},
"reactFunctionalCompomentReduxPropTypes": {
"prefix": "rfcreduxp",
"body": [
"import React from 'react'",
"import PropTypes from 'prop-types'",
"import { connect } from 'react-redux'",
"",
"export const ${1:${TM_FILENAME_BASE}} = (props) => {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"${1:${TM_FILENAME_BASE}}.propTypes = {",
"\t${2:props}: ${3:PropTypes}",
"}",
"",
"const mapStateToProps = (state) => ({",
"\t",
"})",
"",
"const mapDispatchToProps = {",
"\t",
"}",
"",
"export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})",
""
],
"description": "Creates a React functional component with PropTypes with connected redux and ES7 module system"
},
"mappingToProps": {
"prefix": "reduxmap",
"body": [
"const mapStateToProps = (state) => ({",
"\t${1}",
"})",
"",
"const mapDispatchToProps = {",
"\t",
"}",
""
]
},
"classConstructor": {
"prefix": "rconst",
"body": [
"constructor(props) {",
"\tsuper(props)",
"",
"\tthis.state = {",
"\t\t $0",
"\t}",
"}",
""
],
"description": "Adds a default constructor for it('', () => {})the class that contains props as arguments"
},
"emptyState": {
"prefix": "est",
"body": ["state = {", "\t$1", "}", ""],
"description": "Creates empty state object. To be used in a constructor."
},
"componentWillMount": {
"prefix": "cwm",
"body": ["componentWillMount() {", "\t$0", "}", ""],
"description": "DEPRECATED!!!. Invoked once, both on the client and server, immediately before the initial rendering occurs"
},
"componentDidMount": {
"prefix": "cdm",
"body": ["componentDidMount() {", "\t$0", "}", ""],
"description": "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs."
},
"componentWillReceiveProps": {
"prefix": "cwr",
"body": ["componentWillReceiveProps(nextProps) {", "\t$0", "}", ""],
"description": "DEPRECATED!!!. Invoked when a component is receiving new props. This method is not called for the initial render."
},
"shouldComponentUpdate": {
"prefix": "scu",
"body": ["shouldComponentUpdate(nextProps, nextState) {", "\t$0", "}", ""],
"description": "Invoked before rendering when new props or state are being received. "
},
"componentWillUpdate": {
"prefix": "cwup",
"body": ["componentWillUpdate(nextProps, nextState) {", "\t$0", "}", ""],
"description": "DEPRECATED!!!. Invoked immediately before rendering when new props or state are being received."
},
"componentDidUpdate": {
"prefix": "cdup",
"body": ["componentDidUpdate(prevProps, prevState) {", "\t$0", "}", ""],
"description": "Invoked immediately after the component's updates are flushed to the DOM."
},
"componentWillUnmount": {
"prefix": "cwun",
"body": ["componentWillUnmount() {", "\t$0", "}", ""],
"description": "Invoked immediately before a component is unmounted from the DOM."
},
"getDerivedStateFromProps": {
"prefix": "gdsfp",
"body": ["static getDerivedStateFromProps(props, state) {", "\t${1}", "}"],
"description": "Invoked right before calling the render method, both on the initial mount and on subsequent updates."
},
"getSnapshotBeforeUpdate": {
"prefix": "gsbu",
"body": [
"getSnapshotBeforeUpdate = (prevProps, prevState) => {",
"\t$0",
"}",
""
],
"description": "Called right before mutations are made (e.g. before the DOM is updated)"
},
"componentRender": {
"prefix": "ren",
"body": [
"render() {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}"
],
"description": "Basic render."
},
"createContext": {
"prefix": "rcontext",
"body": ["const ${1:contextName} = React.createContext()", ""],
"description": "Create React context"
},
"createRef": {
"prefix": "cref",
"body": ["this.${1:refName}Ref = React.createRef()", ""],
"description": "Create ref statement used inside constructor"
},
"forwardRef": {
"prefix": "fref",
"body": ["const ref = React.createRef()", ""],
"description": "Forward ref statement used inside component"
},
"componentSetStateObject": {
"prefix": "sst",
"body": "this.setState({$0})",
    "description": "Performs a shallow merge of nextState into current state"
  },
  "componentSetStateFunc": {
    "prefix": "ssf",
    "body": ["this.setState((state, props) => { return { $0 }})", ""],
    "description": "Performs a shallow merge of nextState into current state"
  },
  "componentProps": {
    "prefix": "props",
    "body": "this.props.$0",
    "description": "Access component's props"
  },
  "componentState": {
    "prefix": "state",
    "body": "this.state.$0"
  },
  "bindThis": {
    "prefix": "bnd",
    "body": "this.${1:methodName} = this.${1:methodName}.bind(this)$0",
    "description": "Binds this to a method"
  },
  "reduxAction": {
    "prefix": "rxaction",
    "body": [
      "export const ${1:actionName} = (payload) => ({",
      "\ttype: ${3:type},",
      "\tpayload",
      "})",
      ""
    ]
  },
  "reduxConst": {
    "prefix": "rxconst",
    "body": "export const ${1:constantName} = '${1:constantName}'"
},
"reduxReducer": {
"prefix": "rxreducer",
"body": [
"const initialState = {",
"",
"}",
"",
"export default (state = initialState, { type, payload }) => {",
"\tswitch (type) {",
"",
"\tcase ${1:typeName}:",
"\t\treturn { ...state, ...payload }",
"",
"\tdefault:",
"\t\treturn state",
"\t}",
"}",
""
]
},
"reduxSelector": {
"prefix": "rxselect",
"body": [
"import { createSelector } from 'reselect'",
"",
"export const ${1:selectorName} = state => state.${2:selector}",
""
]
},
"reduxSlice": {
"prefix": "rxslice",
"body": [
"import { createSlice } from '@reduxjs/toolkit'",
"",
"const initialState = {",
"",
"}",
"",
"const ${1:${TM_FILENAME_BASE}} = createSlice({",
"\tname: ${2:sliceName},",
"\tinitialState,",
"\treducers: {",
"\t",
"\t}",
"});",
"",
"export const {",
"",
"} = ${1:${TM_FILENAME_BASE}}.actions",
"export default ${1:${TM_FILENAME_BASE}}.reducer"
]
},
"reactNativeComponent": {
"prefix": "rnc",
"body": [
"import React, { Component } from 'react'",
"import { Text, View } from 'react-native'",
"",
"export default class ${1:${TM_FILENAME_BASE}} extends Component {",
"\trender() {",
"\t\treturn (",
"\t\t\t<View>",
"\t\t\t\t<Text> ${2:textInComponent} </Text>",
"\t\t\t</View>",
"\t\t)",
"\t}",
"}",
""
]
},
"reactNativeComponentWithStyles": {
"prefix": "rncs",
"body": [
"import React, { Component } from 'react'",
"import { Text, StyleSheet, View } from 'react-native'",
"",
"export default class ${1:${TM_FILENAME_BASE}} extends Component {",
"\trender() {",
"\t\treturn (",
"\t\t\t<View>",
"\t\t\t\t<Text> ${2:textInComponent} </Text>",
"\t\t\t</View>",
"\t\t)",
"\t}",
"}",
"",
"const styles = StyleSheet.create({})",
""
]
},
"reactNativeComponentExport": {
"prefix": "rnce",
"body": [
"import React, { Component } from 'react'",
"import { Text, View } from 'react-native'",
"",
"export class ${1:${TM_FILENAME_BASE}} extends Component {",
"\trender() {",
"\t\treturn (",
"\t\t\t<View>",
"\t\t\t\t<Text> ${2:textInComponent} </Text>",
"\t\t\t</View>",
"\t\t)",
"\t}",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
]
},
"reactNativePureComponent": {
"prefix": "rnpc",
"body": [
"import React, { PureComponent } from 'react'",
"import { Text, View } from 'react-native'",
"",
"export default class ${1:${TM_FILENAME_BASE}} extends PureComponent {",
"\trender() {",
"\t\treturn (",
"\t\t\t<View>",
"\t\t\t\t<Text> ${2:textInComponent} </Text>",
"\t\t\t</View>",
"\t\t)",
"\t}",
"}",
""
]
},
"reactNativePureComponentExport": {
"prefix": "rnpce",
"body": [
"import React, { PureComponent } from 'react'",
"import { Text, View } from 'react-native'",
"",
"export class ${1:${TM_FILENAME_BASE}} extends PureComponent {",
"\trender() {",
"\t\treturn (",
"\t\t\t<View>",
"\t\t\t\t<Text> ${2:textInComponent} </Text>",
"\t\t\t</View>",
"\t\t)",
"\t}",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
]
},
"reactNativeClassComponentRedux": {
"prefix": "rncredux",
"body": [
"import React, { Component } from 'react'",
"import { View, Text } from 'react-native'",
"import PropTypes from 'prop-types'",
"import { connect } from 'react-redux'",
"",
"export class ${1:${TM_FILENAME_BASE}} extends Component {",
"\tstatic propTypes = {",
"\t\t${2:prop}: ${3:PropTypes}",
"\t}",
"",
"\trender() {",
"\t\treturn (",
"\t\t\t<View>",
"\t\t\t\t<Text> ${2:textInComponent} </Text>",
"\t\t\t</View>",
"\t\t)",
"\t}",
"}",
"",
"const mapStateToProps = (state) => ({",
"\t",
"})",
"",
"const mapDispatchToProps = {",
"\t",
"}",
"",
"export default connect(mapStateToProps, mapDispatchToProps)(${1:${TM_FILENAME_BASE}})",
""
],
"description": "Creates a React Native component class with PropTypes with connected redux and ES7 module system"
},
"reactNativeFunctionalExportComponent": {
"prefix": "rnfe",
"body": [
"import React from 'react'",
"import { View, Text } from 'react-native'",
"",
"const ${1:${TM_FILENAME_BASE}} = () => {",
"\treturn (",
"\t\t<View>",
"\t\t\t<Text>$0</Text>",
"\t\t</View>",
"\t)",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
]
},
"reactNativeFunctionalExportComponentWithStyles": {
"prefix": "rnfes",
"body": [
"import React from 'react'",
"import { StyleSheet, Text, View } from 'react-native'",
"",
"const ${1:${TM_FILENAME_BASE}} = () => {",
"\treturn (",
"\t\t<View>",
"\t\t\t<Text>$0</Text>",
"\t\t</View>",
"\t)",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
"",
"const styles = StyleSheet.create({})",
""
]
},
"reactNativeFunctionalComponent": {
"prefix": "rnf",
"body": [
"import React from 'react'",
"import { View, Text } from 'react-native'",
"",
"export default function ${1:${TM_FILENAME_BASE}}() {",
"\treturn (",
"\t\t<View>",
"\t\t\t<Text>$0</Text>",
"\t\t</View>",
"\t)",
"}",
""
]
},
"reactNativeFunctionalComponentWithStyles": {
"prefix": "rnfs",
"body": [
"import React from 'react'",
"import { StyleSheet, Text, View } from 'react-native'",
"",
"export default function ${1:${TM_FILENAME_BASE}}() {",
"\treturn (",
"\t\t<View>",
"\t\t\t<Text>$0</Text>",
"\t\t</View>",
"\t)",
"}",
"",
"const styles = StyleSheet.create({})",
""
]
},
"reactNativeImport": {
"prefix": "imrn",
"body": "import { ${1:moduleName} } from 'react-native'"
  },
  "reactNativeStyles": {
    "prefix": "rnstyle",
    "body": ["const styles = StyleSheet.create({", "\t${1:style}", "})", ""]
},
"propTypeArray": {
"prefix": "pta",
"body": "PropTypes.array,",
"description": "Array prop type"
},
"propTypeArrayRequired": {
"prefix": "ptar",
"body": "PropTypes.array.isRequired,",
"description": "Array prop type required"
},
"propTypeBool": {
"prefix": "ptb",
"body": "PropTypes.bool,",
"description": "Bool prop type"
},
"propTypeBoolRequired": {
"prefix": "ptbr",
"body": "PropTypes.bool.isRequired,",
"description": "Bool prop type required"
},
"propTypeFunc": {
"prefix": "ptf",
"body": "PropTypes.func,",
"description": "Func prop type"
},
"propTypeFuncRequired": {
"prefix": "ptfr",
"body": "PropTypes.func.isRequired,",
"description": "Func prop type required"
},
"propTypeNumber": {
"prefix": "ptn",
"body": "PropTypes.number,",
"description": "Number prop type"
},
"propTypeNumberRequired": {
"prefix": "ptnr",
"body": "PropTypes.number.isRequired,",
"description": "Number prop type required"
},
"propTypeObject": {
"prefix": "pto",
"body": "PropTypes.object,",
"description": "Object prop type"
},
"propTypeObjectRequired": {
"prefix": "ptor",
"body": "PropTypes.object.isRequired,",
"description": "Object prop type required"
},
"propTypeString": {
"prefix": "pts",
"body": "PropTypes.string,",
"description": "String prop type"
},
"propTypeStringRequired": {
"prefix": "ptsr",
"body": "PropTypes.string.isRequired,",
"description": "String prop type required"
},
"propTypeNode": {
"prefix": "ptnd",
"body": "PropTypes.node,",
"description": "Anything that can be rendered: numbers, strings, elements or an array"
},
"propTypeNodeRequired": {
"prefix": "ptndr",
"body": "PropTypes.node.isRequired,",
"description": "Anything that can be rendered: numbers, strings, elements or an array required"
},
"propTypeElement": {
"prefix": "ptel",
"body": "PropTypes.element,",
"description": "React element prop type"
},
"propTypeElementRequired": {
"prefix": "ptelr",
"body": "PropTypes.element.isRequired,",
"description": "React element prop type required"
},
"propTypeInstanceOf": {
"prefix": "pti",
"body": "PropTypes.instanceOf($0),",
    "description": "Is an instance of a class prop type"
  },
  "propTypeInstanceOfRequired": {
    "prefix": "ptir",
    "body": "PropTypes.instanceOf($0).isRequired,",
    "description": "Is an instance of a class prop type required"
  },
  "propTypeEnum": {
    "prefix": "pte",
    "body": "PropTypes.oneOf(['$0']),",
    "description": "Prop type limited to specific values by treating it as an enum"
  },
  "propTypeEnumRequired": {
    "prefix": "pter",
    "body": "PropTypes.oneOf(['$0']).isRequired,",
    "description": "Prop type limited to specific values by treating it as an enum required"
  },
  "propTypeOneOfType": {
    "prefix": "ptet",
    "body": ["PropTypes.oneOfType([", "\t$0", "]),"],
    "description": "An object that could be one of many types"
  },
  "propTypeOneOfTypeRequired": {
    "prefix": "ptetr",
    "body": ["PropTypes.oneOfType([", "\t$0", "]).isRequired,"],
    "description": "An object that could be one of many types required"
  },
  "propTypeArrayOf": {
    "prefix": "ptao",
    "body": "PropTypes.arrayOf($0),",
    "description": "An array of a certain type"
  },
  "propTypeArrayOfRequired": {
    "prefix": "ptaor",
    "body": "PropTypes.arrayOf($0).isRequired,",
    "description": "An array of a certain type required"
  },
  "propTypeObjectOf": {
    "prefix": "ptoo",
    "body": "PropTypes.objectOf($0),",
    "description": "An object with property values of a certain type"
  },
  "propTypeObjectOfRequired": {
    "prefix": "ptoor",
    "body": "PropTypes.objectOf($0).isRequired,",
    "description": "An object with property values of a certain type required"
  },
  "propTypeShape": {
    "prefix": "ptsh",
    "body": ["PropTypes.shape({", "\t$0", "}),"],
    "description": "An object taking on a particular shape"
  },
  "propTypeShapeRequired": {
    "prefix": "ptshr",
    "body": ["PropTypes.shape({", "\t$0", "}).isRequired,"],
    "description": "An object taking on a particular shape required"
  },
  "propTypeExact": {
    "prefix": "ptex",
    "body": ["PropTypes.exact({", "\t$0", "}),"],
    "description": "An object with warnings on extra properties"
  },
  "propTypeExactRequired": {
    "prefix": "ptexr",
    "body": ["PropTypes.exact({", "\t$0", "}).isRequired,"],
    "description": "An object with warnings on extra properties required"
  },
  "staticPropTpyes": {
    "prefix": "ptypes",
    "body": ["static propTypes = {", "$0", "}", ""]
  },
  "propTypeAny": {
    "prefix": "ptany",
    "body": "PropTypes.any,",
    "description": "Any prop type"
  },
  "Comment Big Block": {
    "prefix": "cmmb",
    "body": ["/**", " * ${0}", " */"]
  },
  "describeBlock": {
    "prefix": "desc",
    "body": ["describe('$1', () => {", "\t$0", "})", ""],
    "description": "Testing `describe` block"
  },
  "testBlock": {
    "prefix": "test",
    "body": ["test('should $1', () => {", "\t$0", "})", ""],
    "description": "Testing `test` block"
  },
  "testAsyncBlock": {
    "prefix": "testa",
    "body": ["test('should $1', async () => {", "\t$0", "})", ""],
    "description": "Testing `asynchronous test` block"
  },
  "itBlock": {
    "prefix": "tit",
    "body": ["it('should $1', () => {", "\t$0", "})", ""],
    "description": "Testing `it` block"
  },
  "itAsyncBlock": {
    "prefix": "tita",
    "body": ["it('should $1', async () => {", "\t$0", "})", ""],
    "description": "Testing asynchronous `it` block"
  },
  "setupReactTest": {
    "prefix": "stest",
    "body": [
      "import React from 'react'",
      "import renderer from 'react-test-renderer'",
      "",
      "import { ${1:${TM_FILENAME_BASE}} } from '../${1:${TM_FILENAME_BASE}}'",
"",
"describe('<${1:${TM_FILENAME_BASE}} />', () => {",
"\tconst defaultProps = {}",
"\tconst wrapper = renderer.create(<${1:${TM_FILENAME_BASE}} {...defaultProps} />)",
"",
"\ttest('render', () => {",
"\t\texpect(wrapper).toMatchSnapshot()",
"\t})",
"})",
""
]
},
"setupReactNativeTest": {
"prefix": "sntest",
"body": [
"import 'react-native'",
"import React from 'react'",
"import renderer from 'react-test-renderer'",
"",
"import ${1:${TM_FILENAME_BASE}} from '../${1:${TM_FILENAME_BASE}}'",
"",
"describe('<${1:${TM_FILENAME_BASE}} />', () => {",
"\tconst defaultProps = {}",
"\tconst wrapper = renderer.create(<${1:${TM_FILENAME_BASE}} {...defaultProps} />)",
"",
"\ttest('render', () => {",
"\t\texpect(wrapper).toMatchSnapshot()",
"\t})",
"})",
""
]
},
"setupReactComponentTestWithRedux": {
"prefix": "srtest",
"body": [
"import React from 'react'",
"import renderer from 'react-test-renderer'",
"import { Provider } from 'react-redux'",
"",
"import store from 'src/store'",
"import { ${1:${TM_FILENAME_BASE}} } from '../${1:${TM_FILENAME_BASE}}'",
"",
"describe('<${1:${TM_FILENAME_BASE}} />', () => {",
"\tconst defaultProps = {}",
"\tconst wrapper = renderer.create(",
"\t\t<Provider store={store}>",
"\t\t <${1:${TM_FILENAME_BASE}} {...defaultProps} />",
"\t\t</Provider>,",
"\t)",
"",
"\ttest('render', () => {",
"\t\texpect(wrapper).toMatchSnapshot()",
"\t})",
"})",
""
],
"description": "Create test component"
},
"setupReactNativeTestWithRedux": {
"prefix": "snrtest",
"body": [
"import 'react-native'",
"import React from 'react'",
"import renderer from 'react-test-renderer'",
"import { Provider } from 'react-redux'",
"",
"import store from 'src/store'",
"import ${1:${TM_FILENAME_BASE}} from '../${1:${TM_FILENAME_BASE}}'",
"",
"describe('<${1:${TM_FILENAME_BASE}} />', () => {",
"\tconst defaultProps = {}",
"\tconst wrapper = renderer.create(",
"\t\t<Provider store={store}>",
"\t\t\t<${1:${TM_FILENAME_BASE}} {...defaultProps} />",
"\t\t</Provider>,",
"\t)",
"",
"\ttest('render', () => {",
"\t\texpect(wrapper).toMatchSnapshot()",
"\t})",
"})",
""
]
},
"graphQLForComponent": {
"prefix": "graphql",
"body": ["import { compose, graphql } from 'react-apollo'", ""]
},
"exportGraphQL": {
"prefix": "expgql",
"body": [
"export default compose(",
"\tgraphql(${1:queryOrMutation}, { name: ${2:name} }),",
")(${1:${TM_FILENAME_BASE}})"
]
},
"hocComponentWithRedux": {
"prefix": "hocredux",
"body": [
"import React from 'react'",
"import PropTypes from 'prop-types'",
"import { connect } from 'react-redux'",
"",
"export const mapStateToProps = state => ({",
"",
"})",
"",
"export const mapDispatchToProps = {",
" ",
"}",
"",
"export const ${1:hocComponentName} = (WrappedComponent) => {",
"\tconst hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
"",
"\thocComponent.propTypes = {",
"\t}",
"",
"\treturn hocComponent",
"}",
"",
"export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${1:hocComponentName}(WrapperComponent))",
""
]
},
"hocComponent": {
"prefix": "hoc",
"body": [
"import React from 'react'",
"import PropTypes from 'prop-types'",
"",
"export default (WrappedComponent) => {",
"\tconst hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
"",
"\thocComponent.propTypes = {",
"\t}",
"",
"\treturn hocComponent",
"}",
""
]
},
"useState": {
"prefix": "useState",
"body": [
"const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState(${2:initialState})"
    ]
  },
  "useEffect": {
    "prefix": "useEffect",
    "body": [
      "useEffect(() => {",
      "\t${1:effect}",
"\treturn () => {",
"\t\t${2:cleanup}",
      "\t}",
      "}, [${3:input}])"
]
},
"useContext": {
"prefix": "useContext",
"body": ["const ${1:context} = useContext(${2:contextValue})"]
},
"useReducer": {
"prefix": "useReducer",
"body": [
"const [state, dispatch] = useReducer(${1:reducer}, ${2:initialState}, ${3:init})"
    ]
  },
  "useCallback": {
    "prefix": "useCallback",
    "body": [
      "useCallback(",
      "\t() => {",
      "\t\t${1:callback}",
"\t},",
"\t[${2:input}],",
")"
]
},
"useMemo": {
"prefix": "useMemo",
"body": ["useMemo(() => ${1:function}, ${2:input})"]
},
"useRef": {
"prefix": "useRef",
"body": ["const ${1:ref} = useRef(${2:initialValue})"]
},
"useImperativeHandle": {
"prefix": "useImperativeHandle",
"body": [
"useImperativeHandle(",
"\t${1:ref},",
      "\t() => {",
      "\t\t${2:handler}",
"\t},",
"\t[${3:input}],",
")"
]
},
"useDebugValue": {
"prefix": "useDebugValue",
"body": ["useDebugValue(${1:value})"]
},
"useLayoutEffect": {
"prefix": "useLayoutEffect",
"body": [
"useLayoutEffect(() => {",
"\t${1:effect}",
      "\treturn () => {",
      "\t\t${2:cleanup}",
"\t};",
"}, [${3:input}])"
]
},
"useSelector": {
"prefix": "useSelector",
"body": ["const ${1:state} = useSelector(state => state.${1:state})"]
},
"useDispatch": {
"prefix": "useDispatch",
"body": ["const dispatch = useDispatch()"]
},
"typeof": {
"prefix": "tpf",
"body": ["typeof ${0}"]
},
"\_reactFunctionalExportComponent": {
"prefix": "\_rfce",
"body": [
"function ${1:${TM_FILENAME_BASE}}() {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
],
"description": "Creates a React 17 Functional Component with ES7 module system"
},
"\_reactFunctionalComponent": {
"prefix": "\_rfc",
"body": [
"export default function ${1:${TM_FILENAME_BASE}}() {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
""
],
"description": "Creates a React 17 Functional Component with ES7 module system"
},
"\_reactFunctionalComponentWithPropTypes": {
"prefix": "\_rfcp",
"body": [
"import PropTypes from 'prop-types'",
"",
"function ${1:${TM_FILENAME_BASE}}(props) {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"${1:${TM_FILENAME_BASE}}.propTypes = {",
"",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
"",
""
],
"description": "Creates a React 17 Functional Component with ES7 module system with PropTypes"
},
"\_reactArrowFunctionExportComponent": {
"prefix": "\_rafce",
"body": [
"const ${1:${TM_FILENAME_BASE}} = () => {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
],
"description": "Creates a React 17 Arrow Function Component with ES7 module system"
},
"\_reactArrowFunctionComponent": {
"prefix": "\_rafc",
"body": [
"export const ${1:${TM_FILENAME_BASE}} = () => {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
""
],
"description": "Creates a React 17 Arrow Function Component with ES7 module system"
},
"\_reactArrowFunctionComponentWithPropTypes": {
"prefix": "\_rafcp",
"body": [
"import PropTypes from 'prop-types'",
"",
"const ${1:${TM_FILENAME_BASE}} = props => {",
"\treturn (",
"\t\t<div>",
"\t\t\t$0",
"\t\t</div>",
"\t)",
"}",
"",
"${1:${TM_FILENAME_BASE}}.propTypes = {",
"",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
],
"description": "Creates a React 17 Arrow Function Component with ES7 module system with PropTypes"
},
"\_reactNativeFunctionalExportComponent": {
"prefix": "\_rnfe",
"body": [
"import { View, Text } from 'react-native'",
"",
"const ${1:${TM_FILENAME_BASE}} = () => {",
"\treturn (",
"\t\t<View>",
"\t\t\t<Text>$0</Text>",
"\t\t</View>",
"\t)",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
""
]
},
"\_reactNativeFunctionalExportComponentWithStyles": {
"prefix": "\_rnfes",
"body": [
"import { StyleSheet, Text, View } from 'react-native'",
"",
"const ${1:${TM_FILENAME_BASE}} = () => {",
"\treturn (",
"\t\t<View>",
"\t\t\t<Text>$0</Text>",
"\t\t</View>",
"\t)",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}",
"",
"const styles = StyleSheet.create({})",
""
]
},
"\_reactNativeFunctionalComponent": {
"prefix": "\_rnf",
"body": [
"import { View, Text } from 'react-native'",
"",
"export default function ${1:${TM_FILENAME_BASE}}() {",
"\treturn (",
"\t\t<View>",
"\t\t\t<Text>$0</Text>",
"\t\t</View>",
"\t)",
"}",
""
]
},
"\_reactNativeFunctionalComponentWithStyles": {
"prefix": "\_rnfs",
"body": [
"import { StyleSheet, Text, View } from 'react-native'",
"",
"export default function ${1:${TM_FILENAME_BASE}}() {",
"\treturn (",
"\t\t<View>",
"\t\t\t<Text>$0</Text>",
"\t\t</View>",
"\t)",
"}",
"",
"const styles = StyleSheet.create({})",
""
]
},
"\_setupReactTest": {
"prefix": "\_stest",
"body": [
"import renderer from 'react-test-renderer'",
"",
"import { ${1:${TM_FILENAME_BASE}} } from '../${1:${TM_FILENAME_BASE}}'",
"",
"describe('<${1:${TM_FILENAME_BASE}} />', () => {",
"\tconst defaultProps = {}",
"\tconst wrapper = renderer.create(<${1:${TM_FILENAME_BASE}} {...defaultProps} />)",
"",
"\ttest('render', () => {",
"\t\texpect(wrapper).toMatchSnapshot()",
"\t})",
"})",
""
]
},
"\_setupReactNativeTest": {
"prefix": "\_sntest",
"body": [
"import 'react-native'",
"import renderer from 'react-test-renderer'",
"",
"import ${1:${TM_FILENAME_BASE}} from '../${1:${TM_FILENAME_BASE}}'",
"",
"describe('<${1:${TM_FILENAME_BASE}} />', () => {",
"\tconst defaultProps = {}",
"\tconst wrapper = renderer.create(<${1:${TM_FILENAME_BASE}} {...defaultProps} />)",
"",
"\ttest('render', () => {",
"\t\texpect(wrapper).toMatchSnapshot()",
"\t})",
"})",
""
]
},
"\_setupReactComponentTestWithRedux": {
"prefix": "\_srtest",
"body": [
"import renderer from 'react-test-renderer'",
"import { Provider } from 'react-redux'",
"",
"import store from 'src/store'",
"import { ${1:${TM_FILENAME_BASE}} } from '../${1:${TM_FILENAME_BASE}}'",
"",
"describe('<${1:${TM_FILENAME_BASE}} />', () => {",
"\tconst defaultProps = {}",
"\tconst wrapper = renderer.create(",
"\t\t<Provider store={store}>",
"\t\t <${1:${TM_FILENAME_BASE}} {...defaultProps} />",
"\t\t</Provider>,",
"\t)",
"",
"\ttest('render', () => {",
"\t\texpect(wrapper).toMatchSnapshot()",
"\t})",
"})",
""
],
"description": "Create test component"
},
"\_setupReactNativeTestWithRedux": {
"prefix": "\_snrtest",
"body": [
"import 'react-native'",
"import renderer from 'react-test-renderer'",
"import { Provider } from 'react-redux'",
"",
"import store from 'src/store'",
"import ${1:${TM_FILENAME_BASE}} from '../${1:${TM_FILENAME_BASE}}'",
"",
"describe('<${1:${TM_FILENAME_BASE}} />', () => {",
"\tconst defaultProps = {}",
"\tconst wrapper = renderer.create(",
"\t\t<Provider store={store}>",
"\t\t\t<${1:${TM_FILENAME_BASE}} {...defaultProps} />",
"\t\t</Provider>,",
"\t)",
"",
"\ttest('render', () => {",
"\t\texpect(wrapper).toMatchSnapshot()",
"\t})",
"})",
""
]
},
"\_hocComponentWithRedux": {
"prefix": "\_hocredux",
"body": [
"import PropTypes from 'prop-types'",
"import { connect } from 'react-redux'",
"",
"export const mapStateToProps = state => ({",
"",
"})",
"",
"export const mapDispatchToProps = {",
" ",
"}",
"",
"export const ${1:hocComponentName} = (WrappedComponent) => {",
"\tconst hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
"",
"\thocComponent.propTypes = {",
"\t}",
"",
"\treturn hocComponent",
"}",
"",
"export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${1:hocComponentName}(WrapperComponent))",
""
]
},
"\_hocComponent": {
"prefix": "\_hoc",
"body": [
"import PropTypes from 'prop-types'",
"",
"export default (WrappedComponent) => {",
"\tconst hocComponent = ({ ...props }) => <WrappedComponent {...props} />",
"",
"\thocComponent.propTypes = {",
"\t}",
"",
"\treturn hocComponent",
"}",
""
]
},
"reactCustomHook": {
"prefix": "rch",
"body": [
"const ${1:${TM_FILENAME_BASE}} = () => {",
"\t$2",
"}",
"",
"export default ${1:${TM_FILENAME_BASE}}"
],
"description": "Creates a React Custom Hook with ES7 module system"
}
}
