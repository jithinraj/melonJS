/*!
 * melonJS Game Engine - v14.1.0
 * http://www.melonjs.org
 * melonjs is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * @copyright (C) 2011 - 2022 Olivier Biot (AltByte Pte Ltd)
 */
var primitiveFragment = "varying vec4 vColor;\n\nvoid main(void) {\n    gl_FragColor = vColor;\n}\n";

export { primitiveFragment as default };
