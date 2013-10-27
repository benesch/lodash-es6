/**
 * Lo-Dash 2.2.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import nativeBind from './nativeBind';
import reNative from './reNative';

/** Used to enable optimizations for V8 */
var isV8 = nativeBind && !/\n/.test(nativeBind) && !reNative.test(root.attachEvent);

export default = isV8;
