function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var i=n("eWCmQ");function l(e,t){return new Promise(((o,r)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefolt();const o=Number(delay.value),r=(Number(step.value),Number(amount.value));for(let t=0;t<r;t+=1)l(t,o).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}));t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.01b0a5ec.js.map