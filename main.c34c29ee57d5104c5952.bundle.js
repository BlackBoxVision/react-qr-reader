(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1182:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(377).configure)([__webpack_require__(1183)],module,!1)}).call(this,__webpack_require__(116)(module))},1183:function(module,exports,__webpack_require__){var map={"./QrReader.stories.tsx":1187};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1183},1187:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ScanCode",(function(){return ScanCode}));__webpack_require__(250),__webpack_require__(4),__webpack_require__(16),__webpack_require__(3),__webpack_require__(10),__webpack_require__(11),__webpack_require__(20),__webpack_require__(15),__webpack_require__(14),__webpack_require__(17),__webpack_require__(12),__webpack_require__(5),__webpack_require__(25);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),zxing_browser=__webpack_require__(493);__webpack_require__(18);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}var isValidType=function isValidType(value,name,type){var isValid=_typeof(value)===type;return isValid||console.warn('[ReactQrReader]: Expected "'.concat(name,'" to be a of type "').concat(type,'".')),isValid},hooks_useQrReader=function useQrReader(_ref){var delayBetweenScanAttempts=_ref.scanDelay,video=_ref.constraints,onResult=_ref.onResult,videoId=_ref.videoId,controlsRef=Object(react.useRef)(null);Object(react.useEffect)((function(){var codeReader=new zxing_browser.BrowserQRCodeReader(null,{delayBetweenScanAttempts:delayBetweenScanAttempts});if(!function isMediaDevicesSupported(){var isMediaDevicesSupported="undefined"!=typeof navigator&&!!navigator.mediaDevices;return isMediaDevicesSupported||console.warn('[ReactQrReader]: MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"'),isMediaDevicesSupported}()&&isValidType(onResult,"onResult","function")){onResult(null,new Error('MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"'),codeReader)}return isValidType(video,"constraints","object")&&codeReader.decodeFromConstraints({video:video},videoId,(function(result,error){isValidType(onResult,"onResult","function")&&onResult(result,error,codeReader)})).then((function(controls){return controlsRef.current=controls})).catch((function(error){isValidType(onResult,"onResult","function")&&onResult(null,error,codeReader)})),function(){var _controlsRef$current;null===(_controlsRef$current=controlsRef.current)||void 0===_controlsRef$current||_controlsRef$current.stop()}}),[])},styles={container:{width:"100%",paddingTop:"100%",overflow:"hidden",position:"relative"},video:{top:0,left:0,width:"100%",height:"100%",display:"block",overflow:"hidden",position:"absolute",transform:void 0}},QrReader_QrReader=function QrReader(_ref){var constraints=_ref.constraints,ViewFinder=_ref.ViewFinder,scanDelay=_ref.scanDelay,className=_ref.className,onResult=_ref.onResult,videoId=_ref.videoId;return hooks_useQrReader({constraints:constraints,scanDelay:scanDelay,onResult:onResult,videoId:videoId}),react.createElement("section",{className:className},react.createElement("div",{style:styles.container},!!ViewFinder&&react.createElement(ViewFinder,null),react.createElement("video",{muted:!0,id:videoId,style:Object.assign({},styles.video,{transform:"user"===(null==constraints?void 0:constraints.facingMode)&&"scaleX(-1)"})})))};QrReader_QrReader.displayName="QrReader",QrReader_QrReader.displayName="QrReader",QrReader_QrReader.defaultProps={constraints:{facingMode:"user"},videoId:"video",scanDelay:500};try{QrReader_QrReader.displayName="QrReader",QrReader_QrReader.__docgenInfo={description:"",displayName:"QrReader",props:{constraints:{defaultValue:{value:"{\n    facingMode: 'user',\n  }"},description:"Media track constraints object, to specify which camera and capabilities to use",name:"constraints",required:!1,type:{name:"MediaTrackConstraints"}},onResult:{defaultValue:null,description:"Called when an error occurs.",name:"onResult",required:!1,type:{name:"OnResultFunction"}},ViewFinder:{defaultValue:null,description:"Property that represents the view finder component",name:"ViewFinder",required:!1,type:{name:"(props: any) => ReactElement<any, any>"}},scanDelay:{defaultValue:{value:500},description:"Property that represents the scan period",name:"scanDelay",required:!1,type:{name:"number"}},videoId:{defaultValue:{value:"video"},description:"Property that represents the ID of the video element",name:"videoId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Property that represents an optional className to modify styles",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/QrReader/index.tsx#QrReader"]={docgenInfo:QrReader_QrReader.__docgenInfo,name:"QrReader",path:"src/QrReader/index.tsx#QrReader"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var QrReader_stories_styles={container:{width:"400px",margin:"auto"}},QrReader_stories_Template=function Template(args){var _useState2=_slicedToArray(Object(react.useState)(null),2),error=_useState2[0],setError=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(null),2),data=_useState4[0],setData=_useState4[1];return react_default.a.createElement("div",{style:QrReader_stories_styles.container},react_default.a.createElement(QrReader_QrReader,_extends({},args,{onResult:function onResult(result,error){result&&setData(result),error&&setError(error.message)}})),react_default.a.createElement("p",null,"The value is: ",JSON.stringify(data,null,2)),react_default.a.createElement("p",null,"The error is: ",error))};QrReader_stories_Template.displayName="Template";var ScanCode=QrReader_stories_Template.bind({});ScanCode.args={ViewFinder:function ViewFinder(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("svg",{width:"50px",viewBox:"0 0 100 100",style:{top:0,left:0,zIndex:1,boxSizing:"border-box",border:"50px solid rgba(0, 0, 0, 0.3)",position:"absolute",width:"100%",height:"100%"}},react_default.a.createElement("path",{fill:"none",d:"M13,0 L0,0 L0,13",stroke:"rgba(255, 0, 0, 0.5)",strokeWidth:"5"}),react_default.a.createElement("path",{fill:"none",d:"M0,87 L0,100 L13,100",stroke:"rgba(255, 0, 0, 0.5)",strokeWidth:"5"}),react_default.a.createElement("path",{fill:"none",d:"M87,100 L100,100 L100,87",stroke:"rgba(255, 0, 0, 0.5)",strokeWidth:"5"}),react_default.a.createElement("path",{fill:"none",d:"M100,13 L100,0 87,0",stroke:"rgba(255, 0, 0, 0.5)",strokeWidth:"5"})))},videoId:"video",scanDelay:500,constraints:{facingMode:"user"}};__webpack_exports__.default={title:"Browser QR Reader",component:QrReader_QrReader};ScanCode.parameters=Object.assign({storySource:{source:"(args) => {\n  const [error, setError] = useState(null);\n  const [data, setData] = useState(null);\n\n  return (\n    <div style={styles.container}>\n      <QrReader\n        {...args}\n        onResult={(result, error) => {\n          if (result) {\n            setData(result);\n          }\n\n          if (error) {\n            setError(error.message);\n          }\n        }}\n      />\n      <p>The value is: {JSON.stringify(data, null, 2)}</p>\n      <p>The error is: {error}</p>\n    </div>\n  );\n}"}},ScanCode.parameters)},496:function(module,exports,__webpack_require__){__webpack_require__(497),__webpack_require__(753),__webpack_require__(754),__webpack_require__(909),__webpack_require__(1128),__webpack_require__(1161),__webpack_require__(1173),__webpack_require__(1175),__webpack_require__(1180),module.exports=__webpack_require__(1182)},621:function(module,exports){},698:function(module,exports){},754:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(377)}},[[496,1,2]]]);
//# sourceMappingURL=main.c34c29ee57d5104c5952.bundle.js.map