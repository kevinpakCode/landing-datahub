webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/components/footer.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/components/footer.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n* COLOR\\n*/\\n/*\\n* Fonts\\n*/\\n/*\\n* SubTitle\\n*/\\n/*\\n* BoxShadow\\n*/\\n/*\\n* Btn\\n*/\\n/*\\n* Link\\n*/\\n/*\\n* LinearGrandientText\\n*/\\n.footer_footer__3_Kyo {\\n  padding: 30px 0 30px 0;\\n  background-color: #E7E7E7;\\n}\\n.footer_footer__3_Kyo .footer_inner__2x1Ye {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.footer_footer__3_Kyo .footer_logo__16vuL {\\n  padding-top: 10px;\\n}\\n.footer_footer__3_Kyo .footer_copyright__1yAL1 {\\n  color: #878789;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../_variables.scss\",\"webpack://../mixins/_titles.scss\",\"webpack://../mixins/_ui.scss\",\"webpack://footer.module.scss\"],\"names\":[],\"mappings\":\"AAAA;;CAAA;AA0EA;;CAAA;AChEA;;CAAA;ACVA;;CAAA;AAQA;;CAAA;AA4BA;;CAAA;AAiCA;;CAAA;AClEA;EACE,sBAAA;EACA,yBHgByB;AGG3B;AAjBE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAmBJ;AAhBE;EACE,iBAAA;AAkBJ;AAfE;EACE,cHDe;AGkBnB\",\"sourcesContent\":[\"/*\\n* COLOR\\n*/\\n\\n//Default\\n$colorWhite: #fff;\\n$colorBlack: #000;\\n$colorRed: #ff0000;\\n$colorYellow: #ffd000;\\n\\n$colorAmaranth: #ee2746;\\n$colorBiscay: #1b3073;\\n\\n\\n//Systeme Colors\\n$colorSystemRedCinnabar: #EB3637;\\n$colorSystemShark: #1C1C1E;\\n$colorSystemJumbo: #878789;\\n$colorSystemConcrete: #f2f2f2;\\n$colorSystemMystic: #EBEFF3;\\n$colorSystemMercury:#E5E5E5;\\n$colorSystemMercurySecond: #E7E7E7;\\n$colorSystemAlabaster: #f8f8f8;\\n$colorOutrageousOrange: #FF5E3A;\\n$colorPizaze: #FF9500;\\n$colorPaleSky: #6D7885;\\n$colorBalticSea: #1D1B1F;\\n\\n\\n$colorSystemRed : linear-gradient(0deg, #FF2A68 0%, #FF5E3A 100%);\\n$colorSystemRedSecond: linear-gradient(250.45deg, #FF5E3A 21.1%, #FF9500 167.47%);\\n$colorSystemRedThird: linear-gradient(0deg, #FF5E3A 0%, #FF9500 100%);\\n$colorSystemRedFourth: conic-gradient(from 0deg at 50% 50%, #FF2A68 0deg, #FF5E3A 360deg);\\n$colorSystemRedFifth: -10px -10px 20px #FFFFFF, 8px 8px 16px rgba(0, 0, 0, 0.15);\\n$colorSystemRedSixth: -3px -3px 10px rgba(255, 255, 255, 0.2), 8px 8px 16px rgba(0, 0, 0, 0.05);\\n$colorSystemRedSeventh: linear-gradient(264.9deg, #FF3B30 -6.02%, #FF5E3A 59.7%, #FF9500 115.3%);\\n\\n$colorSystemForShadow: 8px 8px 16px rgba(0, 0, 0, 0.15);\\n$colorSystemForShadowSecond: rgba(255, 94, 58, 0.45);\\n\\n//Flat Colors\\n$colorTurquoise: #1ABC9C;\\n$colorGreenSea: #16A085;\\n\\n$colorEmerald: #2ECC71;\\n$colorNephritis: #27AE60;\\n\\n$colorPeterRiver: #3498DB;\\n$colorBelizeHole: #2980B9;\\n\\n$colorAmethyst: #9B59B6;\\n$colorWisteria: #8E44AD;\\n\\n$colorSunFlower: #F1C40F;\\n$colorOrange: #F39C12;\\n\\n\\n$colorCarrot: #E67E22;\\n$colorPumpkin: #D35400;\\n\\n$colorAlizarin: #E74C3C;\\n$colorPomegranate: #C0392B;\\n\\n$colorClouds: #ECF0F1;\\n$colorSilver: #BDC3C7;\\n\\n$colorConcrete: #95A5A6;\\n$colorAsbestos: #7F8C8D;\\n\\n$colorWetAsphalt: #34495E;\\n$colorMidnightBlue: #2C3E50;\\n\\n\\n\\n/*\\n* Fonts\\n*/\\n//SourceSansPro\\n$FirstFontBold: \\\"SourceSansPro-Bold\\\", sans-serif ;\\n$FirstFontMedium: \\\"SourceSansPro-SemiBold\\\", sans-serif;\\n$FirstFontRegular: \\\"SourceSansPro-Regular\\\", sans-serif ;\\n$FirstFontLight: \\\"SourceSansPro-Light\\\", sans-serif ;\\n\\n//Golos\\n$GolosBold: \\\"Golos-Bold\\\", sans-serif ;\\n$GolosMedium: \\\"Golos-Medium\\\", sans-serif;\\n$GolosRegular: \\\"Golos-Regular\\\", sans-serif ;\\n\\n\\n\",\"@mixin FistTitle($size:3rem, $color:$colorBlack){\\n  font-size: $size !important;\\n  color: $color !important;\\n  line-height: $size !important;\\n  font-family: $GolosBold !important;\\n  margin-top: 0 !important;\\n  margin-bottom: 24px !important;\\n}\\n\\n\\n/*\\n* SubTitle\\n*/\\n@mixin subTitle($size:1.5rem, $color:$colorSystemRedFifth, $mb:61px) {\\n  margin-bottom: $mb;\\n  font-size: $size;\\n  font-family: $FirstFontLight;\\n  color: $color;\\n}\",\"/*\\n* BoxShadow\\n*/\\n@mixin boxshadow($color:$colorSystemForShadow) {\\n  box-shadow: $color;\\n}\\n\\n\\n/*\\n* Btn\\n*/\\n@mixin btn($bg:$colorWhite, $color:$colorSystemRedThird, $radius:1rem, $padVertical:16px, $padHaurizontal:35px) {\\n  background: $bg;\\n  border-radius: $radius;\\n  padding: $padVertical $padHaurizontal;\\n  font-family: $FirstFontMedium;\\n  //transition: all .3s ease;\\n\\n  &> span {\\n    color: $color;\\n  }\\n\\n  &:hover {\\n    //background: darken($bg, 4%);\\n    background: $colorPizaze;\\n\\n    &> span {\\n      background: none;\\n      -webkit-background-clip: unset !important;\\n      -webkit-text-fill-color: $colorWhite !important;\\n      color: $colorClouds;\\n    }\\n  }\\n}\\n\\n\\n/*\\n* Link\\n*/\\n@mixin link($size:1rem, $defaultColor:$colorSystemRedCinnabar, $eventColor:$colorSystemRedCinnabar) {\\n  font-size: $size;\\n  color: $defaultColor;\\n  transition: all .3s ease;\\n  position: relative;\\n  overflow: hidden;\\n  font-family: $FirstFontMedium;\\n\\n  &::before {\\n    content: '';\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 2px;\\n    transition: all .3s ease;\\n    background-color: $defaultColor;\\n  }\\n\\n  &:hover {\\n    color: darken($eventColor, 2%);\\n    \\n    &::before {\\n      width: 0;\\n      background-color: darken($eventColor, 2%);\\n    }\\n  }\\n}\\n\\n\\n/*\\n* LinearGrandientText\\n*/\\n@mixin LinearGrandientText($firsColor:$colorOutrageousOrange, $secondColor:$colorPizaze ) {\\n  background: linear-gradient(0deg, $colorOutrageousOrange 0%, $secondColor 100%);\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n}\\n\\n\\n\",\"@import './../commons.scss';\\n\\n\\n.footer {\\n  padding: 30px 0 30px 0;\\n  background-color: $colorSystemMercurySecond;// old $colorSystemShark\\n\\n  .inner {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n  }\\n\\n  .logo {\\n    padding-top: 10px;\\n  }\\n\\n  .copyright {\\n    color: $colorSystemJumbo;\\n  }\\n  \\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"footer\": \"footer_footer__3_Kyo\",\n\t\"inner\": \"footer_inner__2x1Ye\",\n\t\"logo\": \"footer_logo__16vuL\",\n\t\"copyright\": \"footer_copyright__1yAL1\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NvbXBvbmVudHMvZm9vdGVyLm1vZHVsZS5zY3NzP2U2MTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLG1LQUFtSywyQkFBMkIsOEJBQThCLEdBQUcsOENBQThDLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsNkNBQTZDLHNCQUFzQixHQUFHLGtEQUFrRCxtQkFBbUIsR0FBRyxPQUFPLHFMQUFxTCxLQUFLLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sV0FBVyxhQUFhLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssVUFBVSwyRUFBMkUsb0JBQW9CLHFCQUFxQix3QkFBd0IsNEJBQTRCLHdCQUF3Qix5REFBeUQsNkJBQTZCLDZCQUE2QixnQ0FBZ0MsOEJBQThCLDhCQUE4QixxQ0FBcUMsaUNBQWlDLGtDQUFrQyx3QkFBd0IseUJBQXlCLDJCQUEyQix3RUFBd0Usb0ZBQW9GLHdFQUF3RSw0RkFBNEYsbUZBQW1GLGtHQUFrRyxtR0FBbUcsNERBQTRELHVEQUF1RCw0Q0FBNEMsMEJBQTBCLDJCQUEyQiwyQkFBMkIsOEJBQThCLDRCQUE0Qiw0QkFBNEIsMEJBQTBCLDZCQUE2Qix3QkFBd0IsNEJBQTRCLHlCQUF5Qiw0QkFBNEIsNkJBQTZCLDBCQUEwQix3QkFBd0IsNEJBQTRCLDBCQUEwQiw4QkFBOEIsOEJBQThCLDhGQUE4RiwyREFBMkQsNERBQTRELHdEQUF3RCxxREFBcUQsNkNBQTZDLGdEQUFnRCwwREFBMEQsZ0NBQWdDLDZCQUE2QixrQ0FBa0MsdUNBQXVDLDZCQUE2QixtQ0FBbUMsR0FBRyxnR0FBZ0csdUJBQXVCLHFCQUFxQixpQ0FBaUMsa0JBQWtCLEdBQUcsd0VBQXdFLHVCQUF1QixHQUFHLHNJQUFzSSxvQkFBb0IsMkJBQTJCLDBDQUEwQyxrQ0FBa0MsK0JBQStCLGVBQWUsb0JBQW9CLEtBQUssZUFBZSxvQ0FBb0MsK0JBQStCLGlCQUFpQix5QkFBeUIsa0RBQWtELHdEQUF3RCw0QkFBNEIsT0FBTyxLQUFLLEdBQUcsMkhBQTJILHFCQUFxQix5QkFBeUIsNkJBQTZCLHVCQUF1QixxQkFBcUIsa0NBQWtDLGlCQUFpQixrQkFBa0IseUJBQXlCLGdCQUFnQixjQUFjLGtCQUFrQixrQkFBa0IsK0JBQStCLHNDQUFzQyxLQUFLLGVBQWUscUNBQXFDLHVCQUF1QixpQkFBaUIsa0RBQWtELE9BQU8sS0FBSyxHQUFHLGdJQUFnSSxvRkFBb0Ysa0NBQWtDLHlDQUF5QyxHQUFHLHFDQUFxQyxlQUFlLDJCQUEyQixnREFBZ0Qsc0NBQXNDLG9CQUFvQiwwQkFBMEIscUNBQXFDLEtBQUssYUFBYSx3QkFBd0IsS0FBSyxrQkFBa0IsK0JBQStCLEtBQUssT0FBTyxtQkFBbUI7QUFDamdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9jb21wb25lbnRzL2Zvb3Rlci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuKiBDT0xPUlxcbiovXFxuLypcXG4qIEZvbnRzXFxuKi9cXG4vKlxcbiogU3ViVGl0bGVcXG4qL1xcbi8qXFxuKiBCb3hTaGFkb3dcXG4qL1xcbi8qXFxuKiBCdG5cXG4qL1xcbi8qXFxuKiBMaW5rXFxuKi9cXG4vKlxcbiogTGluZWFyR3JhbmRpZW50VGV4dFxcbiovXFxuLmZvb3Rlcl9mb290ZXJfXzNfS3lvIHtcXG4gIHBhZGRpbmc6IDMwcHggMCAzMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0U3O1xcbn1cXG4uZm9vdGVyX2Zvb3Rlcl9fM19LeW8gLmZvb3Rlcl9pbm5lcl9fMngxWWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mb290ZXJfZm9vdGVyX18zX0t5byAuZm9vdGVyX2xvZ29fXzE2dnVMIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG4uZm9vdGVyX2Zvb3Rlcl9fM19LeW8gLmZvb3Rlcl9jb3B5cmlnaHRfXzF5QUwxIHtcXG4gIGNvbG9yOiAjODc4Nzg5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vbWl4aW5zL190aXRsZXMuc2Nzc1wiLFwid2VicGFjazovLy4uL21peGlucy9fdWkuc2Nzc1wiLFwid2VicGFjazovL2Zvb3Rlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBQTtBQTBFQTs7Q0FBQTtBQ2hFQTs7Q0FBQTtBQ1ZBOztDQUFBO0FBUUE7O0NBQUE7QUE0QkE7O0NBQUE7QUFpQ0E7O0NBQUE7QUNsRUE7RUFDRSxzQkFBQTtFQUNBLHlCSGdCeUI7QUdHM0I7QUFqQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQW1CSjtBQWhCRTtFQUNFLGlCQUFBO0FBa0JKO0FBZkU7RUFDRSxjSERlO0FHa0JuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiogQ09MT1JcXG4qL1xcblxcbi8vRGVmYXVsdFxcbiRjb2xvcldoaXRlOiAjZmZmO1xcbiRjb2xvckJsYWNrOiAjMDAwO1xcbiRjb2xvclJlZDogI2ZmMDAwMDtcXG4kY29sb3JZZWxsb3c6ICNmZmQwMDA7XFxuXFxuJGNvbG9yQW1hcmFudGg6ICNlZTI3NDY7XFxuJGNvbG9yQmlzY2F5OiAjMWIzMDczO1xcblxcblxcbi8vU3lzdGVtZSBDb2xvcnNcXG4kY29sb3JTeXN0ZW1SZWRDaW5uYWJhcjogI0VCMzYzNztcXG4kY29sb3JTeXN0ZW1TaGFyazogIzFDMUMxRTtcXG4kY29sb3JTeXN0ZW1KdW1ibzogIzg3ODc4OTtcXG4kY29sb3JTeXN0ZW1Db25jcmV0ZTogI2YyZjJmMjtcXG4kY29sb3JTeXN0ZW1NeXN0aWM6ICNFQkVGRjM7XFxuJGNvbG9yU3lzdGVtTWVyY3VyeTojRTVFNUU1O1xcbiRjb2xvclN5c3RlbU1lcmN1cnlTZWNvbmQ6ICNFN0U3RTc7XFxuJGNvbG9yU3lzdGVtQWxhYmFzdGVyOiAjZjhmOGY4O1xcbiRjb2xvck91dHJhZ2VvdXNPcmFuZ2U6ICNGRjVFM0E7XFxuJGNvbG9yUGl6YXplOiAjRkY5NTAwO1xcbiRjb2xvclBhbGVTa3k6ICM2RDc4ODU7XFxuJGNvbG9yQmFsdGljU2VhOiAjMUQxQjFGO1xcblxcblxcbiRjb2xvclN5c3RlbVJlZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjRkYyQTY4IDAlLCAjRkY1RTNBIDEwMCUpO1xcbiRjb2xvclN5c3RlbVJlZFNlY29uZDogbGluZWFyLWdyYWRpZW50KDI1MC40NWRlZywgI0ZGNUUzQSAyMS4xJSwgI0ZGOTUwMCAxNjcuNDclKTtcXG4kY29sb3JTeXN0ZW1SZWRUaGlyZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNGRjVFM0EgMCUsICNGRjk1MDAgMTAwJSk7XFxuJGNvbG9yU3lzdGVtUmVkRm91cnRoOiBjb25pYy1ncmFkaWVudChmcm9tIDBkZWcgYXQgNTAlIDUwJSwgI0ZGMkE2OCAwZGVnLCAjRkY1RTNBIDM2MGRlZyk7XFxuJGNvbG9yU3lzdGVtUmVkRmlmdGg6IC0xMHB4IC0xMHB4IDIwcHggI0ZGRkZGRiwgOHB4IDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuJGNvbG9yU3lzdGVtUmVkU2l4dGg6IC0zcHggLTNweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgOHB4IDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuJGNvbG9yU3lzdGVtUmVkU2V2ZW50aDogbGluZWFyLWdyYWRpZW50KDI2NC45ZGVnLCAjRkYzQjMwIC02LjAyJSwgI0ZGNUUzQSA1OS43JSwgI0ZGOTUwMCAxMTUuMyUpO1xcblxcbiRjb2xvclN5c3RlbUZvclNoYWRvdzogOHB4IDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuJGNvbG9yU3lzdGVtRm9yU2hhZG93U2Vjb25kOiByZ2JhKDI1NSwgOTQsIDU4LCAwLjQ1KTtcXG5cXG4vL0ZsYXQgQ29sb3JzXFxuJGNvbG9yVHVycXVvaXNlOiAjMUFCQzlDO1xcbiRjb2xvckdyZWVuU2VhOiAjMTZBMDg1O1xcblxcbiRjb2xvckVtZXJhbGQ6ICMyRUNDNzE7XFxuJGNvbG9yTmVwaHJpdGlzOiAjMjdBRTYwO1xcblxcbiRjb2xvclBldGVyUml2ZXI6ICMzNDk4REI7XFxuJGNvbG9yQmVsaXplSG9sZTogIzI5ODBCOTtcXG5cXG4kY29sb3JBbWV0aHlzdDogIzlCNTlCNjtcXG4kY29sb3JXaXN0ZXJpYTogIzhFNDRBRDtcXG5cXG4kY29sb3JTdW5GbG93ZXI6ICNGMUM0MEY7XFxuJGNvbG9yT3JhbmdlOiAjRjM5QzEyO1xcblxcblxcbiRjb2xvckNhcnJvdDogI0U2N0UyMjtcXG4kY29sb3JQdW1wa2luOiAjRDM1NDAwO1xcblxcbiRjb2xvckFsaXphcmluOiAjRTc0QzNDO1xcbiRjb2xvclBvbWVncmFuYXRlOiAjQzAzOTJCO1xcblxcbiRjb2xvckNsb3VkczogI0VDRjBGMTtcXG4kY29sb3JTaWx2ZXI6ICNCREMzQzc7XFxuXFxuJGNvbG9yQ29uY3JldGU6ICM5NUE1QTY7XFxuJGNvbG9yQXNiZXN0b3M6ICM3RjhDOEQ7XFxuXFxuJGNvbG9yV2V0QXNwaGFsdDogIzM0NDk1RTtcXG4kY29sb3JNaWRuaWdodEJsdWU6ICMyQzNFNTA7XFxuXFxuXFxuXFxuLypcXG4qIEZvbnRzXFxuKi9cXG4vL1NvdXJjZVNhbnNQcm9cXG4kRmlyc3RGb250Qm9sZDogXFxcIlNvdXJjZVNhbnNQcm8tQm9sZFxcXCIsIHNhbnMtc2VyaWYgO1xcbiRGaXJzdEZvbnRNZWRpdW06IFxcXCJTb3VyY2VTYW5zUHJvLVNlbWlCb2xkXFxcIiwgc2Fucy1zZXJpZjtcXG4kRmlyc3RGb250UmVndWxhcjogXFxcIlNvdXJjZVNhbnNQcm8tUmVndWxhclxcXCIsIHNhbnMtc2VyaWYgO1xcbiRGaXJzdEZvbnRMaWdodDogXFxcIlNvdXJjZVNhbnNQcm8tTGlnaHRcXFwiLCBzYW5zLXNlcmlmIDtcXG5cXG4vL0dvbG9zXFxuJEdvbG9zQm9sZDogXFxcIkdvbG9zLUJvbGRcXFwiLCBzYW5zLXNlcmlmIDtcXG4kR29sb3NNZWRpdW06IFxcXCJHb2xvcy1NZWRpdW1cXFwiLCBzYW5zLXNlcmlmO1xcbiRHb2xvc1JlZ3VsYXI6IFxcXCJHb2xvcy1SZWd1bGFyXFxcIiwgc2Fucy1zZXJpZiA7XFxuXFxuXFxuXCIsXCJAbWl4aW4gRmlzdFRpdGxlKCRzaXplOjNyZW0sICRjb2xvcjokY29sb3JCbGFjayl7XFxuICBmb250LXNpemU6ICRzaXplICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogJHNpemUgIWltcG9ydGFudDtcXG4gIGZvbnQtZmFtaWx5OiAkR29sb3NCb2xkICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi8qXFxuKiBTdWJUaXRsZVxcbiovXFxuQG1peGluIHN1YlRpdGxlKCRzaXplOjEuNXJlbSwgJGNvbG9yOiRjb2xvclN5c3RlbVJlZEZpZnRoLCAkbWI6NjFweCkge1xcbiAgbWFyZ2luLWJvdHRvbTogJG1iO1xcbiAgZm9udC1zaXplOiAkc2l6ZTtcXG4gIGZvbnQtZmFtaWx5OiAkRmlyc3RGb250TGlnaHQ7XFxuICBjb2xvcjogJGNvbG9yO1xcbn1cIixcIi8qXFxuKiBCb3hTaGFkb3dcXG4qL1xcbkBtaXhpbiBib3hzaGFkb3coJGNvbG9yOiRjb2xvclN5c3RlbUZvclNoYWRvdykge1xcbiAgYm94LXNoYWRvdzogJGNvbG9yO1xcbn1cXG5cXG5cXG4vKlxcbiogQnRuXFxuKi9cXG5AbWl4aW4gYnRuKCRiZzokY29sb3JXaGl0ZSwgJGNvbG9yOiRjb2xvclN5c3RlbVJlZFRoaXJkLCAkcmFkaXVzOjFyZW0sICRwYWRWZXJ0aWNhbDoxNnB4LCAkcGFkSGF1cml6b250YWw6MzVweCkge1xcbiAgYmFja2dyb3VuZDogJGJnO1xcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcXG4gIHBhZGRpbmc6ICRwYWRWZXJ0aWNhbCAkcGFkSGF1cml6b250YWw7XFxuICBmb250LWZhbWlseTogJEZpcnN0Rm9udE1lZGl1bTtcXG4gIC8vdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcblxcbiAgJj4gc3BhbiB7XFxuICAgIGNvbG9yOiAkY29sb3I7XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgLy9iYWNrZ3JvdW5kOiBkYXJrZW4oJGJnLCA0JSk7XFxuICAgIGJhY2tncm91bmQ6ICRjb2xvclBpemF6ZTtcXG5cXG4gICAgJj4gc3BhbiB7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdW5zZXQgIWltcG9ydGFudDtcXG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogJGNvbG9yV2hpdGUgIWltcG9ydGFudDtcXG4gICAgICBjb2xvcjogJGNvbG9yQ2xvdWRzO1xcbiAgICB9XFxuICB9XFxufVxcblxcblxcbi8qXFxuKiBMaW5rXFxuKi9cXG5AbWl4aW4gbGluaygkc2l6ZToxcmVtLCAkZGVmYXVsdENvbG9yOiRjb2xvclN5c3RlbVJlZENpbm5hYmFyLCAkZXZlbnRDb2xvcjokY29sb3JTeXN0ZW1SZWRDaW5uYWJhcikge1xcbiAgZm9udC1zaXplOiAkc2l6ZTtcXG4gIGNvbG9yOiAkZGVmYXVsdENvbG9yO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiAkRmlyc3RGb250TWVkaXVtO1xcblxcbiAgJjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZmF1bHRDb2xvcjtcXG4gIH1cXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogZGFya2VuKCRldmVudENvbG9yLCAyJSk7XFxuICAgIFxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZXZlbnRDb2xvciwgMiUpO1xcbiAgICB9XFxuICB9XFxufVxcblxcblxcbi8qXFxuKiBMaW5lYXJHcmFuZGllbnRUZXh0XFxuKi9cXG5AbWl4aW4gTGluZWFyR3JhbmRpZW50VGV4dCgkZmlyc0NvbG9yOiRjb2xvck91dHJhZ2VvdXNPcmFuZ2UsICRzZWNvbmRDb2xvcjokY29sb3JQaXphemUgKSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgJGNvbG9yT3V0cmFnZW91c09yYW5nZSAwJSwgJHNlY29uZENvbG9yIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcblxcblwiLFwiQGltcG9ydCAnLi8uLi9jb21tb25zLnNjc3MnO1xcblxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvclN5c3RlbU1lcmN1cnlTZWNvbmQ7Ly8gb2xkICRjb2xvclN5c3RlbVNoYXJrXFxuXFxuICAuaW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgfVxcblxcbiAgLmNvcHlyaWdodCB7XFxuICAgIGNvbG9yOiAkY29sb3JTeXN0ZW1KdW1ibztcXG4gIH1cXG4gIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXJfZm9vdGVyX18zX0t5b1wiLFxuXHRcImlubmVyXCI6IFwiZm9vdGVyX2lubmVyX18yeDFZZVwiLFxuXHRcImxvZ29cIjogXCJmb290ZXJfbG9nb19fMTZ2dUxcIixcblx0XCJjb3B5cmlnaHRcIjogXCJmb290ZXJfY29weXJpZ2h0X18xeUFMMVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/components/footer.module.scss\n");

/***/ })

})